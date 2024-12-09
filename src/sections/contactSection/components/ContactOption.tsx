import { Box, Link } from "@mui/material";
import { FC } from "react";
import { CommonSubText, CommonText } from "../../../styles/CommonStyles";
import { ContactOptionPaper } from "./ContactStyledComponents";
interface ContactOptionProps {
  icon: JSX.Element;
  label: string;
  value: string;
  link?: string;
}

const ContactOption: FC<ContactOptionProps> = ({
  icon,
  label,
  value,
  link,
}) => (
  <Link href={link} underline="none">
    <ContactOptionPaper elevation={3}>
      <Box> {icon}</Box>
      <CommonText>{label}</CommonText>
      <CommonSubText>{value}</CommonSubText>
    </ContactOptionPaper>
  </Link>
);

export default ContactOption;
