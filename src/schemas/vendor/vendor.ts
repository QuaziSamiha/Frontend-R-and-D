import { z } from "zod";

export const VendorSchema = z.object({
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
  address: z.string({ message: "Address is required" }),
  bin: z.string().min(9, { message: "BIN must be at least 9 characters long" }),
  tin: z.string().min(9, { message: "TIN must be at least 9 characters long" }),
  acNo: z.string({ message: "Account number is required" }),
  ownerName: z.string({ message: "Owner name is required" }),
  typeOfBusiness: z.string({ message: "Type of Business is required" }),
});

export const EditVendorSchema = z.object({
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
  address: z.string({ message: "Address is required" }).optional(),
  bin: z
    .string()
    .min(9, { message: "BIN must be at least 9 characters long" })
    .optional(),
  tin: z
    .string()
    .min(9, { message: "TIN must be at least 9 characters long" })
    .optional(),
  acNo: z.string({ message: "Account number is required" }).optional(),
  ownerName: z.string({ message: "Owner name is required" }).optional(),
  typeOfBusiness: z
    .string({ message: "Type of Business is required" })
    .optional(),
  status: z
    .enum(["active", "inactive"], {
      required_error: "Status is required",
      invalid_type_error: "Status must be either 'Active' or 'Inactive'",
    })
    .default("active")
    .optional(),
});

export type EditVendorFormData = z.infer<typeof EditVendorSchema>;

export type VendorFormData = z.infer<typeof VendorSchema>;
