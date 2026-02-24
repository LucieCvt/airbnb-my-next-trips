import React, { type ComponentProps } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Separator, Text, XStack, YStack } from "tamagui";

type HeaderProps = {
  title: string;
  rightIcon?: ComponentProps<typeof Button>["icon"];
};

const Header = ({ title, rightIcon }: HeaderProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <YStack backgroundColor="white" paddingTop={top}>
      <XStack
        justifyContent="space-between"
        paddingHorizontal="$4"
        paddingVertical="$2.5"
        alignItems="center"
      >
        <Text fontSize="$8" fontWeight="$5">
          {title}
        </Text>
        {rightIcon && (
          <Button circular icon={rightIcon} backgroundColor="$grayBackground" />
        )}
      </XStack>
      <Separator />
    </YStack>
  );
};

export default Header;
