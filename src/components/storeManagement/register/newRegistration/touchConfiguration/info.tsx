
import { IButtonInfo } from "@/interfaces/register";
import Calculator from "./Calculator";

export const info: IButtonInfo[] = [
  {
    id: 1,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-2",
      buttonElement: "Notification",
      type: "fixed",
      department: {
        id: 1,
        value: "dept_001",
        label: "Admin",
      },
    },
    color: "firstBlock",
  },
  {
    id: 2,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Soda",
      type: "drag",
      department: { id: 2, value: "dept_002", label: "Beverages" },
    },
    color: "blue",
  },
  {
    id: 3,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Coffee",
      type: "drag",
      department: { id: 2, value: "dept_002", label: "Beverages" },
    },
    color: "blue",
  },
  {
    id: 4,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Hot Food",
      type: "drag",
      department: { id: 3, value: "dept_003", label: "Food" },
    },
    color: "blue",
  },
  {
    id: 5,
    data: {
      rowSpan: "row-span-4",
      colSpan: "col-span-3",
      buttonElement: <Calculator />,
      type: "fixed",
      department: { id: 4, value: "dept_004", label: "Tools" },
    },
    color: "black",
  },
  {
    id: 6,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Alcohol",
      type: "drag",
      department: { id: 5, value: "dept_005", label: "Drinks" },
    },
    color: "blue",
  },
  {
    id: 7,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Tobacco",
      type: "drag",
      department: { id: 6, value: "dept_006", label: "Tobacco" },
    },
    color: "blue",
  },
  {
    id: 8,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",

      buttonElement: "blue",
      type: "drag",
      department: { id: 2, value: "dept_002", label: "Beverages" },
    },
    color: "blue",
  },
  {
    id: 9,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "E-Cig",
      type: "drag",
      department: { id: 6, value: "dept_006", label: "Tobacco" },
    },
    color: "blue",
  },
  {
    id: 10,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Propane",
      type: "drag",
      department: { id: 7, value: "dept_007", label: "Fuel" },
    },
    color: "blue",
  },
  {
    id: 11,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Ice Bag",
      type: "drag",
      department: { id: 8, value: "dept_008", label: "Frozen Goods" },
    },
    color: "blue",
  },
  {
    id: 12,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Snacks",
      type: "drag",
      department: { id: 3, value: "dept_003", label: "Food" },
    },
    color: "blue",
  },
  {
    id: 13,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Dairy",
      type: "drag",
      department: { id: 9, value: "dept_009", label: "Dairy" },
    },
    color: "blue",
  },
  {
    id: 14,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Tax",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "blue",
  },
  {
    id: 15,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Non-Tax",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "blue",
  },
  {
    id: 16,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Lotto",
      type: "drag",
      department: { id: 11, value: "dept_011", label: "Entertainment" },
    },
    color: "blue",
  },
  {
    id: 17,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Lotto Pay Out",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "blue",
  },
  {
    id: 18,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Cash Back Fee",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "blue",
  },
  {
    id: 19,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Scratch Off",
      type: "drag",
      department: { id: 11, value: "dept_011", label: "Entertainment" },
    },
    color: "blue",
  },
  {
    id: 20,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Coupon",
      type: "drag",
      department: { id: 12, value: "dept_012", label: "Discounts" },
    },
    color: "blue",
  },
  {
    id: 21,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Round Up",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "red",
  },
  {
    id: 22,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "EBT",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "red",
  },
  {
    id: 23,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Debit",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "red",
  },
  {
    id: 24,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Credit",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "red",
  },
  {
    id: 25,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "$5",
      type: "drag",
      department: { id: 13, value: "dept_013", label: "Sales" },
    },
    color: "red",
  },
  {
    id: 26,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "$10",
      type: "drag",
      department: { id: 13, value: "dept_013", label: "Sales" },
    },
    color: "red",
  },
  {
    id: 27,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "$20",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "red",
  },
  {
    id: 28,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "$Cash$",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "red",
  },
  {
    id: 29,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "",
      type: "drag",
      department: "",
    },
    color: "white",
  },
  {
    id: 30,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "",
      type: "drag",
      department: "",
    },
    color: "white",
  },
  {
    id: 31,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "",
      type: "drag",
      department: "",
    },
    color: "white",
  },
  {
    id: 32,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "",
      type: "drag",
      department: "",
    },
    color: "white",
  },
  {
    id: 33,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",

      buttonElement: "",
      type: "drag",
      department: "",
    },
    color: "white",
  },
  {
    id: 34,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "",
      type: "drag",
      department: "",
    },
    color: "white",
  },
  {
    id: 35,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "",
      type: "drag",
      department: "",
    },
    color: "white",
  },
  {
    id: 36,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",

      buttonElement: "Misc.",
      type: "drag",
      department: { id: 14, value: "dept_014", label: "Miscellaneous" },
    },
    color: "white",
  },
  {
    id: 37,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",

      buttonElement: "Void",
      type: "drag",
      department: { id: 15, value: "dept_015", label: "Operations" },
    },
    color: "red",
  },
  {
    id: 38,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",

      buttonElement: "Discount",
      type: "drag",
      department: { id: 13, value: "dept_013", label: "Sales" },
    },
    color: "red",
  },
  {
    id: 41,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",

      buttonElement: "No Sale",
      type: "drag",
      department: { id: 13, value: "dept_013", label: "Sales" },
    },
    color: "red",
  },
  {
    id: 42,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",

      buttonElement: "Suspend",
      type: "drag",
      department: { id: 15, value: "dept_015", label: "Operations" },
    },
    color: "red",
  },
  {
    id: 43,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",

      buttonElement: "Recall",
      type: "drag",
      department: { id: 15, value: "dept_015", label: "Operations" },
    },
    color: "red",
  },
  {
    id: 44,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",

      buttonElement: "Safe Drop",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "red",
  },
  {
    id: 45,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",

      buttonElement: "Refund",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "red",
  },
  {
    id: 46,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",

      buttonElement: "Cancel",
      type: "drag",
      department: { id: 15, value: "dept_015", label: "Operations" },
    },
    color: "red",
  },
  {
    id: 47,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",

      buttonElement: "",
      type: "drag",
      department: "",
    },
    color: "white",
  },
  {
    id: 48,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "",
      type: "drag",
      department: "",
    },
    color: "white",
  },
  {
    id: 49,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "",
      type: "drag",
      department: "",
    },
    color: "white",
  },
  {
    id: 50,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "",
      type: "drag",
      department: "",
    },
    color: "white",
  },
  {
    id: 51,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Vendor Pay Out",
      type: "drag",
      department: { id: 10, value: "dept_010", label: "Finance" },
    },
    color: "white",
  },
  {
    id: 52,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
      buttonElement: "Last Card",
      type: "drag",
      department: { id: 15, value: "dept_015", label: "Operations" },
    },
    color: "white",
  },
  {
    id: 53,
    data: {
      rowSpan: "row-span-1",
      colSpan: "col-span-2",
      buttonElement: "More",
      type: "fixed",
      department: { id: 16, value: "dept_016", label: "General" },
    },
    color: "lastBlock",
  },
];
