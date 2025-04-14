import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
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
  dateFormat = "dd MMM, yy",
  setValue,
  trigger,
  isRequired,
  disabled,
  defaultValue,
  requiredMessage = "Date is required.",
}: IDateInput<T>) => {
  const [, setDate] = useState<Date>();
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, dateFormat);
      setDate(selectedDate);
      setValue(
        name as Path<T>,
        formattedDate as unknown as PathValue<T, Path<T>>,
        { shouldValidate: true }
      );
      trigger(name as Path<T>);
    }
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
        // defaultValue={defaultValue}
        defaultValue={defaultValue as PathValue<T, Path<T>>}
        rules={{ required: requiredMessage }}
        // rules={{ required: "Date is required" }}
        render={({ field }) => (
          <div className="flex flex-col gap-2">
            <Popover>
              <PopoverTrigger asChild className="py-5">
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start text-left font-normal bg-whiteSecondary cursor-pointer",
                    !field.value && "text-muted-foreground"
                  )}
                  disabled={disabled}
                  type="button"
                >
                  <CalendarIcon />
                  {field.value ? (
                    format(field.value, "dd MMM yy")
                  ) : (
                    <span>{placeholderText}</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-whiteSecondary pointer-events-auto">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={handleDateSelect}
                  initialFocus
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
          </div>
        )}
      />
      {/* {errors[name] && !disabled && (
        <p className="text-red-500 text-sm pl-2">
          {typeof errors[name]?.message === "string"
            ? errors[name]?.message
            : ""}
        </p>
      )} */}
    </div>
  );
};

export default DateInput;
