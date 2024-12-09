import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { appColors } from "../../../styles/colors/appColors";

export const StarsWrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${appColors.background.default},
    ${appColors.background.paper}
  );
`;

export const Star = styled(Box)<{
  size: number;
  top: string;
  left: string;
  opacity: number;
  animationDuration: number;
  animationDelay: string;
  direction: string;
}>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: ${appColors.custom.star};
  border-radius: 50%;
  opacity: ${({ opacity }) => opacity};
  animation: moveStar ${({ animationDuration }) => animationDuration}s
    ease-in-out infinite;
  animation-delay: ${({ animationDelay }) => animationDelay};
  animation-direction: ${({ direction }) => direction};
`;

export const GlobalStyle = styled("style")`
  @keyframes moveStar {
    0% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;
