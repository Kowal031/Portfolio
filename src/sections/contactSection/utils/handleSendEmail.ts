import emailjs from "emailjs-com";
import { CONTACTS_CONSTANTS } from "../constants/contactConstants";

interface HandleSendEmailParams {
  email: string;
  message: string;
  setIsLoading: (loading: boolean) => void;
  setSnackbarMessage: (message: string) => void;
  setSnackbarSeverity: (severity: "success" | "error") => void;
  setOpenSnackbar: (open: boolean) => void;
}

export const handleSendEmail = ({
  email,
  message,
  setIsLoading,
  setSnackbarMessage,
  setSnackbarSeverity,
  setOpenSnackbar,
}: HandleSendEmailParams) => {
  setIsLoading(true);

  emailjs
    .send(
      import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID!,
      {
        from_name: email,
        message: message,
      },
      import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID!
    )
    .then(
      () => {
        setSnackbarMessage(CONTACTS_CONSTANTS.FORM.SMACKBAR.SUCCESS_MESSAGE);
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
      },
      () => {
        setSnackbarMessage(CONTACTS_CONSTANTS.FORM.SMACKBAR.ERROR_MESSAGE);
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    )
    .finally(() => {
      setIsLoading(false);
    });
};
