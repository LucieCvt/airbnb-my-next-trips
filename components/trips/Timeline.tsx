import type { Trip } from "@/types/trip";
import { formatDayLabel, formatTime } from "@/utils/date";
import { useTranslation } from "react-i18next";
import { Separator, XStack, YStack } from "tamagui";
import DayMarker from "./DayMarker";
import InfoCard from "./InfoCard";

type TimelineProps = {
  trip: Pick<Trip, "bookingStart" | "bookingEnd" | "bookingImage">;
};

const Timeline = ({ trip }: TimelineProps) => {
  const { t, i18n } = useTranslation("", { keyPrefix: "tripsScreen" });
  const locale = i18n.language;

  const checkIn = formatDayLabel(trip.bookingStart, locale);
  const checkOut = formatDayLabel(trip.bookingEnd, locale);
  const checkInTime = formatTime(trip.bookingStart, locale);
  const checkOutTime = formatTime(trip.bookingEnd, locale);

  return (
    <XStack gap="$3" marginTop="$2" alignItems="center">
      <YStack alignItems="center" gap="$1.5">
        <DayMarker
          dayName={checkIn.dayName}
          dayNumber={checkIn.dayNumber}
        />

        <Separator
          vertical
          height={40}
          borderColor="$grayBackground"
        />

        <DayMarker
          dayName={checkOut.dayName}
          dayNumber={checkOut.dayNumber}
        />
      </YStack>

      <YStack flex={1} gap="$3" justifyContent="space-between">
        <InfoCard
          image={trip.bookingImage}
          label={`${t("checkIn")} ${checkInTime}`}
        />
        <InfoCard
          image={trip.bookingImage}
          label={`${t("checkOut")} ${checkOutTime}`}
        />
      </YStack>
    </XStack>
  );
};

export default Timeline;
