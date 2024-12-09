import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ListItem, ListItemIcon } from "@mui/material";
import { FC } from "react";
import { appColors } from "../../../styles/colors/appColors";
import { SubDescriptionType } from "../types/experienceTypes";
import { CustomDescription } from "./ExperienceStyledComponents";

interface ExperienceCardListItemProps {
  project: SubDescriptionType;
  index: number;
}

const ExperienceCardListItem: FC<ExperienceCardListItemProps> = ({
  project,
  index,
}) => {
  return (
    <ListItem disablePadding key={index}>
      <ListItemIcon>
        <FiberManualRecordIcon
          sx={{ color: appColors.custom.white, fontSize: "12px" }}
        />
      </ListItemIcon>
      <CustomDescription>
        <>{project.description}</> <b>({project.mainProjectSkill})</b>
      </CustomDescription>
    </ListItem>
  );
};

export default ExperienceCardListItem;
