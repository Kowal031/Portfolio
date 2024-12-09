import { CircularProgress } from "@mui/material";
import { FC, useState } from "react";
import { CONTACTS_CONSTANTS } from "../constants/contactConstants";
import { handleSendEmail } from "../utils/handleSendEmail";
import { useContactForm } from "../utils/useContactForm";
import ContactFormSnackbar from "./ContactFormSnackbar";
import {
  ContactFormBox,
  ContactSubmitButton,
  WhiteBorderTextField,
} from "./ContactStyledComponents";

const ContactForm: FC = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const [isLoading, setIsLoading] = useState(false);

  const formik = useContactForm((values) => {
    handleSendEmail({
      email: values.email,
      message: values.message,
      setIsLoading,
      setSnackbarMessage,
      setSnackbarSeverity,
      setOpenSnackbar,
    });
  });

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <>
      <ContactFormBox elevation={3}>
        <form onSubmit={formik.handleSubmit}>
          <WhiteBorderTextField
            label={CONTACTS_CONSTANTS.FORM.EMAIL_LABEL}
            variant="outlined"
            fullWidth
            required
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            isError={formik.touched.email && Boolean(formik.errors.email)}
            InputLabelProps={{ style: { color: "text.primary" } }}
          />
          <WhiteBorderTextField
            label={CONTACTS_CONSTANTS.FORM.MESSAGE_LABEL}
            variant="outlined"
            fullWidth
            multiline
            rows={8}
            required
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            isError={formik.touched.message && Boolean(formik.errors.message)}
            InputLabelProps={{ style: { color: "text.primary" } }}
          />
          <ContactSubmitButton
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={24} /> : null}
          >
            {isLoading ? "Sending..." : CONTACTS_CONSTANTS.FORM.BUTTON_TEXT}
          </ContactSubmitButton>
        </form>
      </ContactFormBox>

      <ContactFormSnackbar
        openSnackbar={openSnackbar}
        snackbarMessage={snackbarMessage}
        snackbarSeverity={snackbarSeverity}
        handleCloseSnackbar={handleCloseSnackbar}
      />
    </>
  );
};

export default ContactForm;
