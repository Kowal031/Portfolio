import { FC, ReactNode } from "react";
import { CommonTextCentered } from "../../../styles/CommonStyles";
import { ContactOptionPaper } from "./AboutStyledComponents";

interface InfoBoxItemProps {
  title: string;
  children: ReactNode;
}

const InfoBoxItem: FC<InfoBoxItemProps> = ({ title, children }) => {
  return (
    <ContactOptionPaper elevation={3}>
      <CommonTextCentered>{title}</CommonTextCentered>
      {children}
    </ContactOptionPaper>
  );
};

export default InfoBoxItem;
