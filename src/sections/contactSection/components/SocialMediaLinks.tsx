import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FC } from "react";
import { CONTACTS_CONSTANTS } from "../constants/contactConstants";
import { SocialMediaLinksContainer } from "./ContactStyledComponents";
import SocialMediaLink from "./SocialMediaLink";

const SocialMediaLinks: FC = () => {
  return (
    <SocialMediaLinksContainer>
      <SocialMediaLink href={CONTACTS_CONSTANTS.CONTACT_INFO.LINKEDIN}>
        <LinkedInIcon sx={{ fontSize: 40 }} />
      </SocialMediaLink>
      <SocialMediaLink href={CONTACTS_CONSTANTS.CONTACT_INFO.GITHUB}>
        <GitHubIcon sx={{ fontSize: 40 }} />
      </SocialMediaLink>
    </SocialMediaLinksContainer>
  );
};

export default SocialMediaLinks;
