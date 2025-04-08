import { z } from "zod";

export const CoreModuleSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters"),
  description: z
    .string()
    .min(3, "Description must be atleast 3 characters")
    .optional(),
});

export const EditCoreModuleSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters")
    .optional(),
  description: z
    .string()
    .min(3, "Description must be atleast 3 characters")
    .optional(),
  status: z
    .enum(["active", "inactive"], {
      required_error: "Status is required",
      invalid_type_error: "Status must be either 'Active' or 'Inactive'",
    })
    .default("active")
    .optional(),
});

export type EditCoreModuleFormData = z.infer<typeof EditCoreModuleSchema>;

export type CoreModuleFormData = z.infer<typeof CoreModuleSchema>;
