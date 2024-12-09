import { Timeline } from "@mui/lab";
import { FC } from "react";
import { ExperienceType } from "../types/experienceTypes";
import TimelineItemWrapper from "./TimelineItemWrapper";

interface TimelineContentBlockProps {
  experiences: ExperienceType[];
}

const TimelineContentBlock: FC<TimelineContentBlockProps> = ({
  experiences,
}) => (
  <Timeline>
    {experiences.map((experience, index) => (
      <TimelineItemWrapper
        key={index}
        experience={experience}
        index={index}
        totalLength={experiences.length}
      />
    ))}
  </Timeline>
);

export default TimelineContentBlock;
