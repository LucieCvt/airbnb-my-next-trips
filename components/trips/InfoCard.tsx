import { ReactNode } from "react";
import { Text, View, XStack } from "tamagui";
import { Card, type CardProps } from "../Card";

type InfoCardProps = Omit<CardProps, "children"> & {
  image: string;
  label: string;
  icon?: ReactNode;
};

const InfoCard = ({ image, label, icon, ...props }: InfoCardProps) => (
  <Card height={90} {...props}>
    <XStack padding="$2" alignItems="center" gap="$3" flex={1}>
      <View
        backgroundColor="$grayBackground"
        alignItems="center"
        justifyContent="center"
        aspectRatio={1}
        height="100%"
        borderRadius={20}
      >
        {icon}
      </View>
      <Text fontWeight="$7" fontSize="$2" flexShrink={1}>
        {label}
      </Text>
    </XStack>
  </Card>
);

export default InfoCard;
