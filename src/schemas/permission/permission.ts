import { z } from "zod";

export const PermissionSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters"),
  description: z.string().optional(),
  moduleID: z.string({
    required_error: "Module is required!!",
    invalid_type_error: "Module must be a string",
  }),
  featureID: z.string({
    required_error: "Feature is required!!",
    invalid_type_error: "Feature must be a string",
  }),
});

export const EditPermissionSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  moduleID: z.string().optional(),
  featureID: z.string().optional(),
});

export type EditPermissionFormData = z.infer<typeof EditPermissionSchema>;

export type PermissionFormData = z.infer<typeof PermissionSchema>;
