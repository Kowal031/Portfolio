import { useFormik } from "formik";
import { contactFormValidationSchema } from "../helpers/validationSchema";

interface FormValues {
  email: string;
  message: string;
}

export const useContactForm = (onSubmit: (values: FormValues) => void) => {
  return useFormik<FormValues>({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: contactFormValidationSchema,
    onSubmit,
  });
};
