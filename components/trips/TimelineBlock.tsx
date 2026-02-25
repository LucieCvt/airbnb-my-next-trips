import type { Trip } from "@/types/trip";
import { formatDayLabel, formatTime } from "@/utils/date";
import { DoorClosed, DoorOpen } from "@tamagui/lucide-icons";
import { useTranslation } from "react-i18next";
import { XStack, YStack } from "tamagui";
import DayMarker from "./DayMarker";
import InfoCard from "./InfoCard";

type TimelineProps = {
  trip: Pick<Trip, "bookingStart" | "bookingEnd" | "bookingImage">;
};

const TimelineBlock = ({ trip }: TimelineProps) => {
  const { t, i18n } = useTranslation("", { keyPrefix: "tripsScreen" });
  const locale = i18n.language;

  const checkIn = formatDayLabel(trip.bookingStart, locale);
  const checkOut = formatDayLabel(trip.bookingEnd, locale);
  const checkInTime = formatTime(trip.bookingStart, locale);
  const checkOutTime = formatTime(trip.bookingEnd, locale);

  return (
    <XStack gap="$3" marginTop="$2" alignItems="center">
      <YStack alignItems="center" gap="$1.5">
        <DayMarker dayName={checkIn.dayName} dayNumber={checkIn.dayNumber} />
        <YStack height={45} borderWidth={1} borderColor="$grayBackground" />
        <DayMarker dayName={checkOut.dayName} dayNumber={checkOut.dayNumber} />
      </YStack>

      <YStack flex={1} gap="$3" justifyContent="space-between">
        <InfoCard
          image={trip.bookingImage}
          label={`${t("checkIn")} ${checkInTime}`}
          icon={<DoorOpen size={40} />}
        />
        <InfoCard
          image={trip.bookingImage}
          label={`${t("checkOut")} ${checkOutTime}`}
          icon={<DoorClosed size={40} />}
        />
      </YStack>
    </XStack>
  );
};

export default TimelineBlock;
