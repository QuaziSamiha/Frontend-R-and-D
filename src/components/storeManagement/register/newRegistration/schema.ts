import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  registerName: Yup.string().required("Register name is required"),
  store: Yup.string().required("Store is required"),
  posCode: Yup.string().required("POS code is required"),
  header: Yup.string().required("Header is required"),
  subHeader: Yup
    .array()
    .of(
      Yup.object().shape({
        line: Yup
          .string()
          .required("Line  is required")
          .min(2, "Line Info must be at least 2 characters long"),
      })
    )
    .min(1, "At least one line is required")
    .required("Lines are required"),
});
