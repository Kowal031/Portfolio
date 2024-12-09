import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from "@mui/lab";
import { Box, useMediaQuery } from "@mui/material";
import { FC } from "react";
import { appColors } from "../../../styles/colors/appColors";
import { CommonSubTextCentered } from "../../../styles/CommonStyles";
import { ExperienceType } from "../types/experienceTypes";
import ExperienceCard from "./ExperienceCard";
import { CustomDescription } from "./ExperienceStyledComponents";

interface TimelineItemWrapperProps {
  experience: ExperienceType;
  index: number;
  totalLength: number;
}

const TimelineItemWrapper: FC<TimelineItemWrapperProps> = ({
  experience,
  index,
  totalLength,
}) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <TimelineItem>
      {!isMobile && (
        <TimelineOppositeContent>
          <CommonSubTextCentered>{experience.date}</CommonSubTextCentered>
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="secondary" />
        {index !== totalLength - 1 && (
          <TimelineConnector
            style={{ background: appColors.custom.gloomyPurple }}
          />
        )}
      </TimelineSeparator>
      <Box display="flex" flexDirection="column">
        {isMobile && (
          <TimelineContent>
            <CustomDescription>{experience.date}</CustomDescription>
          </TimelineContent>
        )}
        <TimelineContent>
          <ExperienceCard experience={experience} />
        </TimelineContent>
      </Box>
    </TimelineItem>
  );
};

export default TimelineItemWrapper;
