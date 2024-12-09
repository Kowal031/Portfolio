import { Box } from "@mui/material";
import { FC } from "react";
import GenericTitleDescriptionBlock from "../../components/common/GenericTitleDescriptionBlock";
import MotionWrapper from "../../components/common/MotinWrapper";
import { COMMON_IDS } from "../../constants/commonConstants";
import ContactForm from "./components/ContactForm";
import ContactOptions from "./components/ContactOptions";
import SocialMediaLinks from "./components/SocialMediaLinks";
import { CONTACTS_CONSTANTS } from "./constants/contactConstants";

const ContactSection: FC = () => {
  return (
    <MotionWrapper id={COMMON_IDS.CONTACT}>
      <Box>
        <GenericTitleDescriptionBlock
          title={CONTACTS_CONSTANTS.SECTION.TITLE}
          description={CONTACTS_CONSTANTS.SECTION.DESCRIPTION}
        />
        <ContactForm />
        <ContactOptions />
        <SocialMediaLinks />
      </Box>
    </MotionWrapper>
  );
};

export default ContactSection;
