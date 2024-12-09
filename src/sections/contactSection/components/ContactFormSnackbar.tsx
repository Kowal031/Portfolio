import { Alert, Snackbar } from "@mui/material";
import { FC } from "react";

interface ContactFormSnackbarProps {
  openSnackbar: boolean;
  snackbarMessage: string;
  snackbarSeverity: "success" | "error";
  handleCloseSnackbar: () => void;
}

const ContactFormSnackbar: FC<ContactFormSnackbarProps> = ({
  openSnackbar,
  snackbarMessage,
  snackbarSeverity,
  handleCloseSnackbar,
}) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={2000}
      onClose={handleCloseSnackbar}
    >
      <Alert
        onClose={handleCloseSnackbar}
        severity={snackbarSeverity}
        sx={{ width: "100%" }}
        variant="filled"
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default ContactFormSnackbar;
