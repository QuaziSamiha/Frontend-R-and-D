import { z } from "zod";

export const RoleDesigAdministrationSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters"),
  description: z.string().optional(),
  stakeholderReferenceID: z.string({
    required_error: "Stakeholder Reference ID is required",
    invalid_type_error: "Stakeholder Reference ID must be a string",
  }),
});

export const EditRoleDesigAdministrationSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters")
    .optional(),
  description: z.string().optional(),
  // stakeholderReferenceID: z
  //   .string({
  //     required_error: "Stakeholder Reference ID is required",
  //     invalid_type_error: "Stakeholder Reference ID must be a string",
  //   })
  //   .optional(),
  status: z
    .enum(["active", "inactive"], {
      required_error: "Status is required",
      invalid_type_error: "Status must be either 'Active' or 'Inactive'",
    })
    .default("active")
    .optional(),
});

export type EditRoleDesigAdministrationFormData = z.infer<
  typeof EditRoleDesigAdministrationSchema
>;

export type RoleDesigAdministrationFormData = z.infer<
  typeof RoleDesigAdministrationSchema
>;
