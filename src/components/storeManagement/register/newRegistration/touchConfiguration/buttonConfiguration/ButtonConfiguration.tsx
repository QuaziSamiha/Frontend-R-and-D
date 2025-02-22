import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectField from "@/components/ui/form/SelectField";
import SubmitButton from "@/components/ui/form/SubmitButton";
import { buttonSchema } from "./buttonSchema";
import Input from "@/components/ui/form/Input";
import { ISelectOption } from "@/interfaces/form";
import { IButtonInfo } from "@/interfaces/register";

interface IForm {
  buttonLabel: string;
  department: string;
}

// ========= DEMO DEPARTMENTS =============
const departments: ISelectOption[] = [
  {
    id: 1,
    value: "dept_001",
    label: "Admin",
  },
  { id: 2, value: "dept_002", label: "Beverages" },
  { id: 3, value: "dept_003", label: "Food" },
  { id: 4, value: "dept_004", label: "Tools" },
  { id: 5, value: "dept_005", label: "Drinks" },
  { id: 6, value: "dept_006", label: "Tobacco" },
  { id: 7, value: "dept_007", label: "Fuel" },
  { id: 8, value: "dept_008", label: "Frozen Goods" },
  { id: 9, value: "dept_009", label: "Dairy" },
  { id: 10, value: "dept_010", label: "Finance" },
  { id: 11, value: "dept_011", label: "Entertainment" },
  { id: 12, value: "dept_012", label: "Discounts" },
  { id: 13, value: "dept_013", label: "Sales" },
  { id: 14, value: "dept_014", label: "Miscellaneous" },
  { id: 15, value: "dept_015", label: "Operations" },
  { id: 16, value: "dept_016", label: "General" },
];

const ButtonConfiguration: React.FC<IButtonInfo> = ({
  // id,
  data: {
    // rowSpan,
    // colSpan,
    buttonElement,
    // type,
    department,
  },
  // color,
}) => {
  const resolver = yupResolver(buttonSchema);

  // ========= REACT HOOK FORM =========
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IForm>({ resolver });

  // ============ SUBMIT FUNCTION ===========
  const onSubmit: SubmitHandler<IForm> = (data) => {
    alert(JSON.stringify(data));
  };

  // ============== FORM ERROR ==========
  const onError = (errors: unknown) => {
    console.error("Form submission errors:", errors);
  };

  return (
    <DialogContent className="w-2/4 bg-white">
      <DialogHeader className="pt-8 pl-3">
        <DialogTitle className="text-lg text-black font-semibold">
          Button Configure
        </DialogTitle>
      </DialogHeader>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Input
          inputType="text"
          labelName="Label"
          placeholderText="Label Name"
          register={register}
          name="buttonLabel"
          errors={errors}
          defaultValue={typeof buttonElement === "string" ? buttonElement : ""}
          isRequired
        />
        <SelectField
          control={control}
          name="department"
          data={departments}
          label="Department"
          placeholderText="-Select Department-"
          errors={errors}
          labelKey="label"
          valueKey="value"
          isLoading={false}
          defaultValue={
            typeof department === "object" ? department?.value : department
          }
        />
        <SubmitButton
          submitTitle="Save Button"
          bgColor="bg-violetAltTernary"
          hoverBgColor="bg-transparent"
        />
      </form>
    </DialogContent>
  );
};

export default ButtonConfiguration;
// import {
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import SelectField from "@/components/ui/form/SelectField";
// import SubmitButton from "@/components/ui/form/SubmitButton";
// import { buttonSchema } from "./buttonSchema";
// import { IItem } from "@/interfaces/register";
// import Input from "@/components/ui/form/Input";

// interface IForm {
//   buttonLabel: string;
//   department: string;
// }

// // =========== DEPARTMENT TYPE ============
// interface IDepartment {
//   id: number;
//   value: string;
//   label: string;
// }

// // ========= DEMO DEPARTMENTS =============
// const departments: IDepartment[] = [
//   {
//     id: 1,
//     value: "dept_001",
//     label: "Admin",
//   },
//   { id: 2, value: "dept_002", label: "Beverages" },
//   { id: 3, value: "dept_003", label: "Food" },
//   { id: 4, value: "dept_004", label: "Tools" },
//   { id: 5, value: "dept_005", label: "Drinks" },
//   { id: 6, value: "dept_006", label: "Tobacco" },
//   { id: 7, value: "dept_007", label: "Fuel" },
//   { id: 8, value: "dept_008", label: "Frozen Goods" },
//   { id: 9, value: "dept_009", label: "Dairy" },
//   { id: 10, value: "dept_010", label: "Finance" },
//   { id: 11, value: "dept_011", label: "Entertainment" },
//   { id: 12, value: "dept_012", label: "Discounts" },
//   { id: 13, value: "dept_013", label: "Sales" },
//   { id: 14, value: "dept_014", label: "Miscellaneous" },
//   { id: 15, value: "dept_015", label: "Operations" },
//   { id: 16, value: "dept_016", label: "General" },
// ];

// const ButtonConfiguration: React.FC<IItem> = ({
//   // id,
//   data: {
//     // rowSpan,
//     // colSpan,
//     buttonElement,
//     // type,
//     department,
//   },
//   // color,
// }) => {
//   // console.log("id", id);
//   // console.log("button element", buttonElement);
//   // console.log("department", department);

//   const resolver = yupResolver(buttonSchema);

//   // ========= REACT HOOK FORM =========
//   const {
//     register,
//     handleSubmit,
//     // setValue,
//     formState: { errors },
//     control,
//     // resetField,
//   } = useForm<IForm>({ resolver });

//   // ============ SUBMIT FUNCTION ===========
//   const onSubmit: SubmitHandler<IForm> = (data) => {
//     const formData = JSON.stringify(data);
//     // console.log("Form data submitted:", formData);
//     // console.log(buttonData);
//     alert(formData);
//   };

//   // ============== FORM ERROR ==========
//   const onError = (errors: unknown) => {
//     console.error("Form submission errors:", errors);
//   };

//   return (
//     <DialogContent className="w-2/4 bg-white">
//       <DialogHeader className="pt-8 pl-3">
//         <DialogTitle className="text-lg text-black font-semibold">
//           Button Configure
//         </DialogTitle>
//       </DialogHeader>
//       <form
//         className="flex flex-col gap-5"
//         onSubmit={handleSubmit(onSubmit, onError)}
//       >
//         <Input
//           inputType="text"
//           labelName="Label"
//           placeholderText="Label Name"
//           register={register}
//           name="buttonLabel"
//           errors={errors}
//           defaultValue={buttonElement}
//           isRequired
//         />
//         <SelectField
//           control={control}
//           name="department"
//           data={departments}
//           label="Department"
//           placeholderText="-Select Department-"
//           errors={errors}
//           labelKey="label"
//           valueKey="value"
//           isLoading={false}
//           defaultValue={department}
//         />
//         <SubmitButton
//           submitTitle="Save Button"
//           bgColor="bg-violetAltTernary"
//           hoverBgColor="bg-transparent"
//         />
//       </form>
//     </DialogContent>
//   );
// };

// export default ButtonConfiguration;
