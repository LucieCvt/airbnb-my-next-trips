import { Button, Image, Text, XStack } from "tamagui";

const AVATAR_SIZE = 40;

type CardFooterProps = {
  guestImage: string;
  buttonLabel: string;
};

const CardFooter = ({ guestImage, buttonLabel }: CardFooterProps) => {
  return (
    <XStack alignItems="center" justifyContent="space-between">
      <Image src={guestImage} width={AVATAR_SIZE} height={AVATAR_SIZE} borderRadius={AVATAR_SIZE / 2} />
      <Button
        unstyled
        accessibilityRole="button"
        accessibilityLabel={buttonLabel}
        backgroundColor="$grayBackground"
        borderRadius="$5"
        paddingVertical="$3"
        paddingHorizontal="$6"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontWeight="$6" fontSize="$2" textAlign="center">
          {buttonLabel}
        </Text>
      </Button>
    </XStack>
  );
};

export default CardFooter;
