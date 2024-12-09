import { motion, MotionProps } from "framer-motion";
import { FC, ReactNode } from "react";
import { CommonContainer } from "../../styles/CommonStyles";

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  id: string;
}

const MotionWrapper: FC<MotionWrapperProps> = ({ children, id, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    {...props}
  >
    <CommonContainer id={id}>{children}</CommonContainer>
  </motion.div>
);

export default MotionWrapper;
