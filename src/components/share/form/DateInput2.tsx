import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, isBefore, startOfDay } from "date-fns";
import { Controller, FieldValues, Path, PathValue } from "react-hook-form";
import { IDateInput } from "@/types/form/form.types";
// ======== IMPORTING SHADCN UI COMPONENTS ============
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const DateInput = <T extends FieldValues>({
  labelName,
  placeholderText,
  name,
  control,
  errors,
  trigger,
  isRequired,
  disabled,
  defaultValue,
  requiredMessage = "Date is required.",
}: IDateInput<T>) => {
  // Get today's date at the start of the day for comparison
  const today = startOfDay(new Date());

  // Function to disable past dates
  const disablePastDates = (date: Date) => {
    return isBefore(date, today);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-blackSecondary text-base font-medium pl-2">
        {labelName}
        {isRequired && <span className="text-red-500 px-0.5">*</span>}{" "}
      </label>

      <Controller
        name={name as Path<T>}
        control={control}
        defaultValue={defaultValue as PathValue<T, Path<T>>}
        rules={{ required: requiredMessage }}
        render={({ field }) => (
          <div className="relative flex flex-col gap-2">
            <Popover>
              <PopoverTrigger asChild className="py-5">
                <Button
                  variant="outline"
                  className={cn(
                    "justify-start text-left font-normal bg-whiteSecondary cursor-pointer",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? (
                    format(new Date(field.value), "PP")
                  ) : (
                    <span>{placeholderText}</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-whiteSecondary ">
                <Calendar
                  mode="single"
                  selected={field.value ? new Date(field.value) : undefined}
                  onSelect={(date) => {
                    field.onChange(date ? format(date, "yyyy-MM-dd") : "");
                    trigger(name as Path<T>);
                  }}
                  disabled={disablePastDates}
                  initialFocus
                  fromDate={new Date()} // Only allow dates from today onwards
                />
              </PopoverContent>
            </Popover>
            {errors[name] && !disabled && (
              <p className="text-red-500 text-sm pl-2">
                {typeof errors[name]?.message === "string"
                  ? errors[name]?.message
                  : ""}
              </p>
            )}
            {/* <p className="text-xs text-gray-500 mt-1">
              Date must be in the future
            </p> */}
          </div>
        )}
      />
    </div>
  );
};

export default DateInput;
