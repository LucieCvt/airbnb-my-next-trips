import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Image, Separator, Text, YStack, ZStack } from "tamagui";
import type { Trip } from "@/types/trip";
import { formatDateRange } from "@/utils/date";
import Badge from "../Badge";
import { Card } from "../Card";

type TripCardProps = {
  trip: Pick<Trip, "title" | "bookingImage" | "bookingStart" | "bookingEnd" | "hostName">;
  badgeText: string;
  footer?: ReactNode;
};

const TripCard = ({ trip, badgeText, footer }: TripCardProps) => {
  const { t, i18n } = useTranslation("", { keyPrefix: "tripsScreen" });
  const dateRange = formatDateRange(trip.bookingStart, trip.bookingEnd, i18n.language);

  return (
    <Card>
      <YStack paddingHorizontal="$2.5" paddingTop="$2.5">
        <ZStack aspectRatio={16 / 9} borderRadius={16} overflow="hidden">
          <Image
            src={trip.bookingImage}
            width="100%"
            height="100%"
            accessibilityLabel={trip.title}
          />
          <Badge label={badgeText} position="absolute" top="$2.5" left="$2.5" />
        </ZStack>
      </YStack>

      <YStack paddingHorizontal="$4.5">
        <YStack gap="$2" paddingVertical="$4.5">
          <Text fontSize="$6.5" fontWeight="$7">
            {trip.title}
          </Text>
          <Text color="$grayText" fontSize="$2" fontWeight="$6">
            {dateRange} · {t("hostName")} : {trip.hostName}
          </Text>
        </YStack>
        <Separator />
        {footer}
      </YStack>
    </Card>
  );
};

export default TripCard;
