import { z } from "zod";

export const ClientUnitSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters"),
  description: z.string().optional(),
  clientID: z.string({
    required_error: "Client is required!!",
    invalid_type_error: "Client must be a string",
  }),
});

export const EditClientUnitSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters")
    .optional(),
  clientName: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be at most 100 characters")
    .optional(),
  description: z.string().optional(),
  clientID: z
    .string({
      required_error: "Client is required!!",
      invalid_type_error: "Client must be a string",
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

export type EditClientUnitFormData = z.infer<typeof EditClientUnitSchema>;

export type ClientUnitFormData = z.infer<typeof ClientUnitSchema>;
