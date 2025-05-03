"use client";

import { categoryOptions, getRequisitionColumns, requisition } from "../data";
import { rowValue } from "@/lib/redux/features/user/userSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { RequisitionDataProps } from "@/types/user/user.types";
import TableContent from "@/components/share/table/TableContent";
import CustomDialog from "@/components/share/dialog/CustomDialog";
import { TbSend } from "react-icons/tb";
import { SubmitHandler, useForm } from "react-hook-form";
import GreyButton from "@/components/share/button/GreyButton";
import TextArea from "@/components/share/form/TextArea";
import DateInput from "@/components/share/form/DateInput2";
import BlueButton from "@/components/share/button/BlueButton";
import CheckboxField from "@/components/share/form/CheckboxField";

interface IFormInputs {
  supplier: {
    id: string;
    label: string;
    value: string;
  }[];
  remark: string;
  lasDate: string;
}

export default function SendQuotation() {
  // ============== STATES FOR MODALS ==========
  const [supplierModalOpen, setSupplierModalOpen] = useState(false);
  const [deadlineModalOpen, setDeadlineModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  // ============== STATES FOR TABLE ==========
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const dispatch = useAppDispatch();

  const {
    control,
    trigger,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IFormInputs>();

  const handleSendSingleQuotation = (rowData: RequisitionDataProps) => {
    dispatch(rowValue(rowData));
    setSupplierModalOpen(true);
  };

  const handleSendAllQuotation = () => {
    setSupplierModalOpen(true);
  };

  const handleSupplierSubmit = async () => {
    console.log("clicked supplier");
    const isValid = await trigger("supplier");
    if (isValid) {
      setSupplierModalOpen(false);
      setDeadlineModalOpen(true);
    }
  };

  const handleDeadlineSubmit = async () => {
    console.log("clicked deadline");
    const isValid = await trigger(["lasDate", "remark"]);
    if (isValid) {
      setDeadlineModalOpen(false);
      setConfirmModalOpen(true);
    }
  };
  const handleDeadlineCancel = () => {
    setDeadlineModalOpen(false);
    reset();
  };

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log("submitted");
    console.log(data);
    setConfirmModalOpen(false);
    reset();
  };

  const columns = getRequisitionColumns(handleSendSingleQuotation);
  const table = useReactTable({
    data: requisition.items ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <section className="flex flex-col gap-8">
      <TableContent table={table} />
      <div className="flex justify-between items-center w-full px-6">
        <p className="font-medium">
          Send quotation (
          <span className="text-lightAltBlue">
            Requisition No: {requisition.id}
          </span>
          ) to all enlisted suppliers
        </p>
        <button
          onClick={handleSendAllQuotation}
          className="flex items-center gap-3 text-sm text-white font-medium bg-lightAltBlue hover:bg-darkBlue border border-lightAltBlue px-4 py-2 rounded-md cursor-pointer"
        >
          <TbSend size={18} />
          Send Quotation
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* =============== 1st MODAL =================== */}
        <CustomDialog
          open={supplierModalOpen}
          onOpenChange={setSupplierModalOpen}
          dialogWidth="w-[40vw]"
          title="Select Suppliers"
        >
          <div>
            <div className="px-6 py-4 border-y border-gray-300">
              <CheckboxField
                name="supplier"
                control={control}
                options={categoryOptions}
                // errors={errors}
                trigger={trigger}
                isRequired
              />
            </div>
            <div className="px-6 py-4 flex justify-end items-center">
              <BlueButton
                buttonLabel="Next"
                onClickFunction={handleSupplierSubmit}
              />
            </div>
          </div>
        </CustomDialog>

        {/* =============== 2nd MODAL =================== */}

        <CustomDialog
          open={deadlineModalOpen}
          onOpenChange={setDeadlineModalOpen}
          dialogWidth="w-[30vw]"
          title="Deadline & Comment"
        >
          <div className="border-y border-gray-300 py-4 px-6 space-y-4">
            <DateInput
              labelName="Last Date"
              name="lasDate"
              placeholderText="dd/mm/yyyy"
              errors={errors}
              control={control}
              trigger={trigger}
              isRequired
              requiredMessage="Date is required."
            />
            <TextArea
              labelName="Remark"
              placeholderText="Write remark"
              name="remark"
              control={control}
            />
          </div>
          <div className="flex justify-end items-center gap-3 px-6 py-4">
            <GreyButton
              buttonLabel="Cancel"
              onClickFunction={handleDeadlineCancel}
            />
            <BlueButton
              buttonLabel="Send"
              onClickFunction={handleDeadlineSubmit}
            />
          </div>
        </CustomDialog>

        {/* =============== 3rd MODAL =================== */}
        <CustomDialog
          open={confirmModalOpen}
          onOpenChange={setConfirmModalOpen}
          dialogWidth="w-[30vw]"
          title="Are You Sure?"
        >
          <div className="px-6 py-4 border-y border-gray-300">
            <p>Are you sure you want to submit quotation?</p>
          </div>
          <div className="px-6 pt-2 pb-4 flex justify-end items-center gap-3">
            <GreyButton
              buttonLabel="Cancel"
              onClickFunction={() => setConfirmModalOpen(false)}
            />
            <BlueButton
              buttonLabel="Confirm"
              onClickFunction={handleSubmit(onSubmit)}
              buttonType="submit"
            />
          </div>
        </CustomDialog>
      </form>
    </section>
  );
}

// "use client";

// import { getRequisitionColumns, requisition } from "../data";
// import { rowValue } from "@/lib/redux/features/user/userSlice";
// import { useAppDispatch } from "@/lib/redux/hooks";
// import {
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   SortingState,
//   useReactTable,
// } from "@tanstack/react-table";
// import { useState } from "react";
// import { RequisitionDataProps } from "@/types/user/user.types";
// import TableContent from "@/components/share/table/TableContent";
// import CustomDialog from "@/components/share/dialog/CustomDialog";
// import { TbSend } from "react-icons/tb";
// import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
// import SubmitButton from "@/components/share/form/SubmitButton";
// import GreyButton from "@/components/share/button/GreyButton";
// import { CheckboxGroup } from "@/components/share/form/CheckboxField";
// import TextArea from "@/components/share/form/TextArea";
// import DateInput from "@/components/share/form/DateInput2";
// import BlueButton from "@/components/share/button/BlueButton";

// interface IFormInputs {
//   supplier: {
//     id: string;
//     label: string;
//     value: string;
//   }[];
//   remark: string;
//   lasDate: string;
// }

// // Sample options for the checkbox groups
// const categoryOptions = [
//   { id: "category-1", label: "Technology", value: "technology" },
//   { id: "category-2", label: "Health & Fitness", value: "health" },
//   { id: "category-3", label: "Business", value: "business" },
//   { id: "category-4", label: "Entertainment", value: "entertainment" },
//   { id: "category-5", label: "Science", value: "science" },
// ];

// export default function SendQuotation() {
//   const [supplierModalOpen, setSupplierModalOpen] = useState(false);
//   const [deadlineModalOpen, setDeadlineModalOpen] = useState(false);
//   const [sorting, setSorting] = useState<SortingState>([]);
//   const [filtering, setFiltering] = useState("");
//   const [columnVisibility, setColumnVisibility] = useState({});
//   const dispatch = useAppDispatch();

//   const handleSendSingleQuotation = (rowData: RequisitionDataProps) => {
//     dispatch(rowValue(rowData));
//     setSupplierModalOpen(true);
//   };

//   const handleAllQuotation = () => {
//     setSupplierModalOpen(true);
//   };

//   const methods = useForm<IFormInputs>();
//   const {
//     control,
//     trigger,
//     formState: { errors },
//     handleSubmit,
//   } = methods;

//   // const onSupplierSubmit: SubmitHandler<ISupplierForm> = (data) => {
//   //   console.log(data);
//   //   setDeadlineModalOpen(true);
//   //   setSupplierModalOpen(false);
//   // };

//   // const onDeadlineSubmit: SubmitHandler<IDeadlineForm> = (data) => {
//   //   console.log(data);
//   //   setDeadlineModalOpen(false);
//   // };

//   const handleSupplierSubmit = () => {
//     console.log("clicked");
//     // e.preventDefault(); // Prevent form submission
//     // e.stopPropagation(); // Stop event bubbling
//     setDeadlineModalOpen(true);
//     setSupplierModalOpen(false);
//   };

//   const onSubmit: SubmitHandler<IFormInputs> = (data) => {
//     console.log(data);
//   };

//   const columns = getRequisitionColumns(handleSendSingleQuotation);
//   const table = useReactTable({
//     data: requisition.items ?? [],
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     state: {
//       sorting,
//       globalFilter: filtering,
//       columnVisibility,
//     },
//     onSortingChange: setSorting,
//     onGlobalFilterChange: setFiltering,
//     onColumnVisibilityChange: setColumnVisibility,
//   });
//   return (
//     <section className="flex flex-col gap-8">
//       <TableContent table={table} />
//       <div className="flex justify-between items-center w-full px-6">
//         <p className="font-medium">
//           Send quotation (
//           <span className="text-lightAltBlue">
//             Requisition No: {requisition.id}
//           </span>
//           ) to all enlisted suppliers
//         </p>
//         <button
//           onClick={handleAllQuotation}
//           className="flex items-center gap-3 text-sm text-white font-medium bg-lightAltBlue hover:bg-darkBlue border border-lightAltBlue px-4 py-2 rounded-md cursor-pointer"
//         >
//           <TbSend size={18} />
//           Send Quotation
//         </button>
//       </div>

//       <CustomDialog
//         open={supplierModalOpen}
//         onOpenChange={setSupplierModalOpen}
//         dialogWidth="w-[50vw]"
//         title="Select Suppliers"
//       >
//         <FormProvider {...methods}>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="px-6 py-4 border-y border-gray-300">
//               <CheckboxGroup
//                 name="supplier"
//                 control={control}
//                 options={categoryOptions}
//                 errors={errors}
//                 required
//                 trigger={trigger}
//               />
//             </div>
//             <div className="px-6 py-4 flex justify-end items-center">
//               <BlueButton
//                 buttonLabel="Submit"
//                 onClickFunction={handleSupplierSubmit}
//               />
//             </div>
//           </form>
//         </FormProvider>
//       </CustomDialog>

//       <CustomDialog
//         open={deadlineModalOpen}
//         onOpenChange={setDeadlineModalOpen}
//         dialogWidth="w-[30vw]"
//         title="Deadline & Comment"
//       >
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="border-y border-gray-300 py-4 px-6 space-y-4">
//             <DateInput
//               labelName="Last Date"
//               name="lasDate"
//               placeholderText="dd/mm/yyyy"
//               errors={errors}
//               control={control}
//               trigger={trigger}
//               isRequired
//               requiredMessage="Date is required."
//             />
//             <TextArea
//               labelName="Remark"
//               placeholderText="Write remark"
//               name="remark"
//               control={control}
//             />
//           </div>
//           <div className="flex justify-end items-center gap-3 px-6 py-4">
//             <GreyButton
//               buttonLabel="Cancel"
//               onClickFunction={() => setDeadlineModalOpen(false)}
//             />
//             <SubmitButton buttonWidth="w-fit" submitTitle="Send" />
//           </div>
//         </form>
//       </CustomDialog>
//     </section>
//   );
// }
