import { Box } from "@mui/material";
import { FC } from "react";
import { CommonSubTextCentered } from "../../../styles/CommonStyles";
import { InfoBoxWrapper } from "./AboutStyledComponents";
import InfoBoxItem from "./InfoBoxItem";

interface InfoBoxProps {
  data: {
    title: string;
    content: Array<{ [key: string]: string }>;
  }[];
}

const InfoBox: FC<InfoBoxProps> = ({ data }) => {
  return (
    <InfoBoxWrapper>
      {data.map((section, index) => (
        <InfoBoxItem key={index} title={section.title}>
          {section.content.map((el, i) => (
            <Box
              key={i}
              display="flex"
              flexWrap={"wrap"}
              justifyContent="center"
            >
              {Object.entries(el).map(([, value], index) => (
                <CommonSubTextCentered key={index}>
                  {value}
                </CommonSubTextCentered>
              ))}
            </Box>
          ))}
        </InfoBoxItem>
      ))}
    </InfoBoxWrapper>
  );
};

export default InfoBox;
