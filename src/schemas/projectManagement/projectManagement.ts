import { z } from "zod";

export const ProjectManagementSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters"),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .refine((val) => /^\+?\d+$/.test(val), {
      message: "Invalid phone number format",
    })
    .refine((val) => val.replace(/^\+/, "").length >= 11, {
      message: "Phone number must be at least 11 digits",
    }),
});

export const EditProjectManagementSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters")
    .optional(),
  email: z.string().email({ message: "Invalid email address" }).optional(),
  phone: z
    .string()
    .refine((val) => /^\+?\d+$/.test(val), {
      message: "Invalid phone number format",
    })
    .refine((val) => val.replace(/^\+/, "").length >= 11, {
      message: "Phone number must be at least 11 digits",
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

export type EditProjectManagementFormData = z.infer<
  typeof EditProjectManagementSchema
>;

export type ProjectManagementFormData = z.infer<typeof ProjectManagementSchema>;
