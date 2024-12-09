import * as Yup from "yup";
import { CONTACTS_CONSTANTS } from "../constants/contactConstants";

export const contactFormValidationSchema = Yup.object({
  email: Yup.string()
    .email(CONTACTS_CONSTANTS.VALIDATION.EMAIL_INVALID)
    .required(CONTACTS_CONSTANTS.VALIDATION.EMAIL_REQUIRED),
  message: Yup.string()
    .required(CONTACTS_CONSTANTS.VALIDATION.MESSAGE_REQUIRED)
    .min(10, CONTACTS_CONSTANTS.VALIDATION.MESSAGE_MIN_LENGTH),
});
