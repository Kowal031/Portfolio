import portfolio from "../../../assets/projects/portfolio_project.png";
import todo from "../../../assets/projects/todo.png";

export const getProjectImg = (key: string): string | undefined => {
  switch (key) {
    case "portfolio":
      return portfolio;
    case "todo":
      return todo;

    default:
      return undefined;
  }
};
