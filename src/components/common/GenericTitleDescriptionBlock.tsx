import { FC } from "react";
import { CommonDescription, CommonTitle } from "../../styles/CommonStyles";

interface GenericTitleDescriptionBlockProps {
  title: string;
  description: string;
  useDangerouslySetHTML?: boolean;
}

const GenericTitleDescriptionBlock: FC<GenericTitleDescriptionBlockProps> = ({
  title,
  description,
  useDangerouslySetHTML,
}) => (
  <>
    <CommonTitle>{title}</CommonTitle>
    {useDangerouslySetHTML ? (
      <CommonDescription dangerouslySetInnerHTML={{ __html: description }} />
    ) : (
      <CommonDescription>{description}</CommonDescription>
    )}
  </>
);

export default GenericTitleDescriptionBlock;
