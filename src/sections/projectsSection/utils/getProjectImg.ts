import portfolio from "../../../assets/projects/portfolio_project.png";

export const getProjectImg = (key: string): string | undefined => {
  switch (key) {
    case "portfolio":
      return portfolio;

    default:
      return undefined;
  }
};
