import { Text, XStack, type XStackProps } from "tamagui";

type BadgeProps = XStackProps & {
  label: string;
};

const Badge = ({ label, ...props }: BadgeProps) => (
  <XStack
    backgroundColor="$white"
    paddingHorizontal="$3"
    paddingVertical="$2"
    borderRadius="$10"
    {...props}
  >
    <Text fontWeight="$7" fontSize="$2">
      {label}
    </Text>
  </XStack>
);

export default Badge;
