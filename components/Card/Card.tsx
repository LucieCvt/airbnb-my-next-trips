import type { ReactNode } from "react";
import { YStack, type YStackProps } from "tamagui";

export type CardProps = YStackProps & {
  children: ReactNode;
};

const Card = ({ children, ...props }: CardProps) => (
  <YStack
    backgroundColor="$white"
    borderRadius="$7"
    shadowColor="$black"
    shadowOffset={{ width: 0, height: 4 }}
    shadowOpacity={0.12}
    shadowRadius={16}
    elevation={8}
    {...props}
  >
    {children}
  </YStack>
);

export default Card;
