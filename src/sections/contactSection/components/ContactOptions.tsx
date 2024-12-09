import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { FC } from "react";
import { CONTACTS_CONSTANTS } from "../constants/contactConstants";
import ContactOption from "./ContactOption";
import { ContactOptionsWrapper } from "./ContactStyledComponents";

const ContactOptions: FC = () => {
  return (
    <ContactOptionsWrapper>
      <ContactOption
        icon={<EmailIcon sx={{ fontSize: 40, mb: 1 }} />}
        label={CONTACTS_CONSTANTS.CONTACT_OPTION.EMAIL_LABEL}
        value={CONTACTS_CONSTANTS.CONTACT_INFO.EMAIL}
        link={`mailto:${CONTACTS_CONSTANTS.CONTACT_INFO.EMAIL}`}
      />
      <ContactOption
        icon={<PhoneIcon sx={{ fontSize: 40, mb: 1 }} />}
        label={CONTACTS_CONSTANTS.CONTACT_OPTION.PHONE_LABEL}
        value={CONTACTS_CONSTANTS.CONTACT_INFO.PHONE}
        link={`tel:${CONTACTS_CONSTANTS.CONTACT_INFO.PHONE}`}
      />
    </ContactOptionsWrapper>
  );
};

export default ContactOptions;
