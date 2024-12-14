import portfolio from "../../../assets/projects/portfolio_project.png";
import todo from "../../../assets/projects/todo.png";
import comingSoon from "../../../assets/projects/comingSoon.png";
import { PROJECT_IMAGES_NAME } from "../../../constants/commonConstants";

export const getProjectImg = (key: string): string | undefined => {
  switch (key) {
    case PROJECT_IMAGES_NAME.PORTFOLIO:
      return portfolio;
    case PROJECT_IMAGES_NAME.TODO:
      return todo;
    case PROJECT_IMAGES_NAME.COMING_SOON:
      return comingSoon;

    default:
      return undefined;
  }
};
