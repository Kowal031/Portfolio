import { FC } from "react";
import {
  GlobalStyle,
  Star,
  StarsWrapper,
} from "./components/StarsBackgroundStyledComponents";

const generateStars = (num: number) => {
  return Array.from({ length: num }, (_, i) => {
    const size = Math.random() * 2 + 0.5;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const animationDuration = Math.random() * 10 + 5;
    const animationDelay = Math.random() * 10 + "s";
    const opacity = Math.random() * 0.5 + 0.3;
    const direction = Math.random() < 0.5 ? "normal" : "reverse";

    return (
      <Star
        key={i}
        size={size}
        top={`${top}%`}
        left={`${left}%`}
        opacity={opacity}
        animationDuration={animationDuration}
        animationDelay={animationDelay}
        direction={direction}
      />
    );
  });
};

const StarsBackground: FC = () => {
  const stars = generateStars(300);

  return (
    <>
      <StarsWrapper>{stars}</StarsWrapper>
      <GlobalStyle />
    </>
  );
};

export default StarsBackground;
