import { z } from "zod";

export const FeatureSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters"),
  description: z.string().optional(),
  moduleID: z.string({
    required_error: "ModuleID is required!!",
    invalid_type_error: "ModuleID must be a string",
  }),
});

export const EditFeatureSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  status: z
    .enum(["active", "inactive"], {
      required_error: "Status is required!!",
      invalid_type_error: "Status must be either 'Active' or 'Inactive'",
    })
    .default("active")
    .optional(),
});

export type EditFeatureFormData = z.infer<typeof EditFeatureSchema>;

export type FeatureFormData = z.infer<typeof FeatureSchema>;
