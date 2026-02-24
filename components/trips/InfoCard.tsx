import { Image, Text, XStack } from "tamagui";
import { Card, type CardProps } from "../Card";

type InfoCardProps = Omit<CardProps, "children"> & {
  image: string;
  label: string;
};

const InfoCard = ({ image, label, ...props }: InfoCardProps) => (
  <Card {...props}>
    <XStack padding="$2" alignItems="center" gap="$3">
      <Image src={image} width={68} height={68} borderRadius={8} />
      <Text fontWeight="$7" fontSize="$2" flexShrink={1}>
        {label}
      </Text>
    </XStack>
  </Card>
);

export default InfoCard;
