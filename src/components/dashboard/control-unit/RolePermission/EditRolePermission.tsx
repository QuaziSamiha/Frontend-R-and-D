import { SelectField } from "@/components/share/form";
import { usePatch } from "@/hooks/usePatch";
import { useAppSelector } from "@/lib/redux/hooks";
import {
  EditRolePermissionFormData,
  EditRolePermissionSchema,
} from "@/schemas/role-permission/role-permission";
import { IEditComponentProps } from "@/types/global/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  canRead?: boolean;
  canWrite?: boolean;
  canDelete?: boolean;
  rolePermissionID?: string;
};

export default function EditRolePermission({
  setEditModalOpen,
  refetch,
}: IEditComponentProps) {
  const { val: editData } = useAppSelector((state) => state.user) as {val:Props};

  const { canRead, canWrite, canDelete, rolePermissionID } = editData;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    // resetField,
    control,
  } = useForm<EditRolePermissionFormData>({
    resolver: zodResolver(EditRolePermissionSchema),
  });

  const { mutate: updateRolePermission, isPending } = usePatch(
    `/role-permission/${rolePermissionID}`,
    () => {
      refetch();
      reset();
      setEditModalOpen(false);
    }
  );

  const onSubmit = (data: EditRolePermissionFormData) => {
    // alert(JSON.stringify(data));

    const dataToSend: Partial<EditRolePermissionFormData> = {};
    for (const key in data) {
      if (
        data[key as keyof EditRolePermissionFormData] !==
        editData[key as keyof EditRolePermissionFormData]
      ) {
        const value = data[key as keyof EditRolePermissionFormData];
        dataToSend[key as keyof EditRolePermissionFormData] = value;
      }
    }

    const ConvertingStringToBoolean = {
      canRead: dataToSend.canRead === "true",
      canWrite: dataToSend.canWrite === "true",
      canDelete: dataToSend.canDelete === "true",
    };

    if (Object.keys(dataToSend).length === 0) {
      toast.error("No changes detected!");
      return;
    }

    updateRolePermission(ConvertingStringToBoolean);
  };

  const options = [
    {
      id: 1,
      label: "True",
      value: "true",
    },
    {
      id: 2,
      label: "False",
      value: "false",
    },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          <SelectField
            label="Read"
            placeholderText="Select ..."
            name="canRead"
            control={control}
            data={options}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            isRequired={true}
            defaultValue={canRead === true ? "true" : "false"}
          />
          <SelectField
            label="Write"
            placeholderText="Select ..."
            name="canWrite"
            control={control}
            data={options}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            isRequired={true}
            defaultValue={canWrite === true ? "true" : "false"}
          />
          <SelectField
            label="Delete"
            placeholderText="Select ..."
            name="canDelete"
            control={control}
            data={options}
            labelKey="label"
            valueKey="value"
            errors={errors}
            isLoading={false}
            isRequired={true}
            defaultValue={canDelete === true ? "true" : "false"}
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
