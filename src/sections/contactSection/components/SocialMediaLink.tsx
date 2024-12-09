import { Link } from "@mui/material";
import { FC, ReactNode } from "react";
import { appColors } from "../../../styles/colors/appColors";

interface SocialMediaLinkProps {
  href: string;
  children: ReactNode;
}

const SocialMediaLink: FC<SocialMediaLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    sx={{
      color: "white",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.2)",
        color: appColors.custom.gloomyPurple,
      },
    }}
  >
    {children}
  </Link>
);

export default SocialMediaLink;
