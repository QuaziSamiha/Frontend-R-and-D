import { z } from "zod";

export const RolePermissionSchema = z.object({
  roleDesignationID: z.string({
    required_error: "Role Designation is required!!",
    invalid_type_error: "Role Designation must be a string",
  }),
  permissionID: z.string({
    required_error: "Permission Id is required!!",
    invalid_type_error: "Permission Id must be a string",
  }),
  canRead: z
    .enum(["true", "false"], {
      required_error: "Can Read is required!!",
      invalid_type_error: "Can Read must be either 'true' or 'false'",
    })
    .default("false"),
  canWrite: z
    .enum(["true", "false"], {
      required_error: "Can Write is required!!",
      invalid_type_error: "Can Write must be either 'true' or 'false'",
    })
    .default("false"),
  canDelete: z
    .enum(["true", "false"], {
      required_error: "Can Delete is required!!",
      invalid_type_error: "Can Delete must be either 'true' or 'false'",
    })
    .default("false"),
});

export const EditRolePermissionSchema = z.object({
  canRead: z
    .enum(["true", "false"], {
      required_error: "Can Read is required!!",
      invalid_type_error: "Can Read must be either 'true' or 'false'",
    })
    .default("false")
    .optional(),
  canWrite: z
    .enum(["true", "false"], {
      required_error: "Can Write is required!!",
      invalid_type_error: "Can Write must be either 'true' or 'false'",
    })
    .default("false")
    .optional(),
  canDelete: z
    .enum(["true", "false"], {
      required_error: "Can Delete is required!!",
      invalid_type_error: "Can Delete must be either 'true' or 'false'",
    })
    .default("false")
    .optional(),
});

export type EditRolePermissionFormData = z.infer<
  typeof EditRolePermissionSchema
>;

export type RolePermissionFormData = z.infer<typeof RolePermissionSchema>;
