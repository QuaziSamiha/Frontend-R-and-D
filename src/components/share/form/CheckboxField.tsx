"use client";
import {
  Controller,
  type Control,
  type FieldValues,
  type FieldPath,
  type FieldErrors,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export interface CheckboxOption {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
}

export interface CheckboxGroupProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName;
  control: Control<TFieldValues>;
  options: CheckboxOption[];
  label?: string;
  description?: string;
  className?: string;
  errors?: FieldErrors<TFieldValues>;
  required?: boolean;
  trigger?: (name?: TName | TName[]) => Promise<boolean>;
}

export function CheckboxGroup<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  options,
  label,
  description,
  className,
  errors,
  required = false,
  trigger,
}: CheckboxGroupProps<TFieldValues, TName>) {
  const errorMessage = errors?.[name]?.message as string | undefined;

  return (
    <div className={cn("space-y-3", className)}>
      {label && (
        <div className="flex items-baseline justify-between">
          <Label className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label} {required && <span className="text-destructive">*</span>}
          </Label>
        </div>
      )}
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          // Ensure field.value is an array
          const values: string[] = Array.isArray(field.value)
            ? field.value
            : [];

          // Check if all options are selected
          const allSelected =
            options.length > 0 &&
            options.every((option) => values.includes(option.value));

          // Handle select all
          const handleSelectAll = (checked: boolean) => {
            if (checked) {
              // Select all options
              const allValues = options.map((option) => option.value);
              field.onChange(allValues);
            } else {
              // Deselect all options
              field.onChange([]);
            }
            if (trigger) trigger(name);
          };

          // Handle individual checkbox change
          const handleCheckboxChange = (checked: boolean, value: string) => {
            if (checked) {
              // Add value to array
              field.onChange([...values, value]);
            } else {
              // Remove value from array
              field.onChange(values.filter((v: string) => v !== value));
            }
            if (trigger) trigger(name);
          };

          return (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 rounded-md border p-3 bg-muted/20">
                <Checkbox
                  id={`${name}-select-all`}
                  checked={allSelected}
                  onCheckedChange={handleSelectAll}
                  className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <Label
                  htmlFor={`${name}-select-all`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Select All
                </Label>
              </div>

              <div className="grid gap-2">
                {options.map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center space-x-2 rounded-md border p-3 transition-colors hover:bg-muted/50"
                  >
                    <Checkbox
                      id={option.id}
                      checked={values.includes(option.value)}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(!!checked, option.value)
                      }
                      disabled={option.disabled}
                      className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <Label
                      htmlFor={option.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      />

      {errorMessage && (
        <p className="text-sm font-medium text-destructive">{errorMessage}</p>
      )}
    </div>
  );
}
