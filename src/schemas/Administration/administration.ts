import { z } from "zod";

export const AdministrationSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters"),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .refine((val) => /^\d+$/.test(val), {
      message: "Invalid phone number format",
    })
    .refine((val) => val.length === 11, {
      message: "Phone number must be exactly 11 digits",
    }),
});

export const EditAdministrationSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters")
    .optional(),
  phone: z
    .string()
    .refine((val) => /^\d+$/.test(val), {
      message: "Invalid phone number format",
    })
    .refine((val) => val.length === 11, {
      message: "Phone number must be exactly 11 digits",
    })
    .optional(),
  status: z
    .enum(["active", "inactive"], {
      required_error: "Status is required",
      invalid_type_error: "Status must be either 'Active' or 'Inactive'",
    })
    .default("active")
    .optional(),
});

export type EditAdministrationFormData = z.infer<
  typeof EditAdministrationSchema
>;

export type AdministrationFormData = z.infer<typeof AdministrationSchema>;
