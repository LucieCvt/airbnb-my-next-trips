import React from "react";
import { XStack, Text, Button } from "tamagui";
import { List } from "@tamagui/lucide-icons";

type TripsHeaderProps = {
  title: string;
};

const TripsHeader = ({ title }: TripsHeaderProps) => {
  return (
    <XStack
      justifyContent="space-between"
      paddingHorizontal="$4"
      alignItems="center"
    >
      <Text fontSize="$8" fontWeight="$5">
        {title}
      </Text>

      <Button
        circular
        icon={<List color="$black" size="$1.5" />}
        backgroundColor="$grayBackground"
      />
    </XStack>
  );
};

export default TripsHeader;
