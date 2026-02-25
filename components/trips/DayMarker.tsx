import { Text, YStack, type YStackProps } from "tamagui";

type DayMarkerProps = YStackProps & {
  dayName: string;
  dayNumber: string | number;
};

const MARKER_SIZE = 36;

const DayMarker = ({ dayName, dayNumber, ...props }: DayMarkerProps) => (
  <YStack alignItems="center" {...props}>
    <Text fontSize="$2" fontWeight="$6" color="$blackText">
      {dayName}
    </Text>
    <YStack
      width={MARKER_SIZE}
      height={MARKER_SIZE}
      borderRadius={MARKER_SIZE / 2}
      backgroundColor="$grayBackground"
      justifyContent="center"
      alignItems="center"
      marginTop="$1"
    >
      <Text color="$grayText" fontWeight="$7" fontSize="$3">
        {dayNumber}
      </Text>
    </YStack>
  </YStack>
);

export default DayMarker;
