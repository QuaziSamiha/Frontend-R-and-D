import { TableHeadingProps } from "@/types/table/table.types";

export default function TableHeading({ name }: TableHeadingProps) {
  return <p className="font-semibold text-blackSecondary text-2xl">{name}</p>;
}
