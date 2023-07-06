import { ContainerProps } from "./interface";
import { Containment } from "./style";

export const Container = ({ children, ...rest }: ContainerProps) => {
  return <Containment {...rest}>{children}</Containment>;
};
