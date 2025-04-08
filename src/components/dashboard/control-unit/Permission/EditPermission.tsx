import { usePatch } from "@/hooks/usePatch";
import { useAppSelector } from "@/lib/redux/hooks";
import { Input, SelectField } from "@/components/share/form";
import {
  EditPermissionFormData,
  EditPermissionSchema,
} from "@/schemas/permission/permission";
import { IEditComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CoreModuleDropDown, FeaturesDropDown } from "@/utils/DataForming";
import { useGet } from "@/hooks/useGet";
import {
  CoreModuleTypes,
  FeatureTypes,
} from "@/types/controlUnit/ControlUnit.types";

type Props = {
  name?: string;
  description?: string;
  featureID?: string;
  moduleID?: string;
  permissionID?: string;
};

export default function EditPermission({
  setEditModalOpen,
  refetch,
}: IEditComponentProps) {
  const { val: editData } = useAppSelector((state) => state.user) as {
    val: Props;
  };

  const { name, moduleID, description, featureID, permissionID } = editData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<EditPermissionFormData>({
    resolver: zodResolver(EditPermissionSchema),
  });

  const { mutate: updatePermission, isPending } = usePatch(
    `/permission/${permissionID}`,
    () => {
      refetch();
      reset();
      setEditModalOpen(false);
    }
  );

  const { data: allCoreModuleData } = useGet<CoreModuleTypes[]>(
    "/core-module",
    ["allCoreModuleData"]
  );

  const { data: allFeaturesData } = useGet<FeatureTypes[]>("/feature", [
    "allFeatures",
  ]);

  const moduleDropDown = CoreModuleDropDown(allCoreModuleData ?? []);

  const featuresDropDown = FeaturesDropDown(allFeaturesData ?? []);

  const onSubmit = (data: EditPermissionFormData) => {
    // alert(JSON.stringify(data));

    const dataToSend: Partial<EditPermissionFormData> = {};
    for (const key in data) {
      if (
        data[key as keyof EditPermissionFormData] !==
        editData[key as keyof EditPermissionFormData]
      ) {
        const value = data[key as keyof EditPermissionFormData];
        if (
          key === "status" &&
          (value === "active" || value === "inactive" || value === undefined)
        ) {
          dataToSend[key as keyof EditPermissionFormData] = value;
        } else if (key !== "status") {
          dataToSend[key as keyof EditPermissionFormData] = value;
        }
      }
    }

    if (Object.keys(dataToSend).length === 0) {
      toast.error("No changes detected!");
      return;
    }

    updatePermission(dataToSend);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          <Input
            inputType="text"
            labelName="Name"
            placeholderText="Enter your name"
            name="name"
            errors={errors}
            register={register}
            defaultValue={name}
          />
          <Input
            inputType="text"
            labelName="Description"
            placeholderText="Enter your description"
            name="description"
            errors={errors}
            register={register}
            defaultValue={description}
          />
          <SelectField
            label="Select Module"
            placeholderText="Select Module"
            name="moduleID"
            control={control}
            data={moduleDropDown}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            defaultValue={moduleID}
          />
          <SelectField
            label="Select Feature"
            placeholderText="Select feature"
            name="featureID"
            control={control}
            data={featuresDropDown}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            defaultValue={featureID}
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="bg-lightAltBlue/90 hover:bg-lightAltBlue text-whitePrimary text-sm font-medium px-8 py-3 rounded-full mt-6 cursor-pointer"
        >
          {isPending ? "Loading..." : "Edit"}
        </button>
      </form>
    </div>
  );
}
