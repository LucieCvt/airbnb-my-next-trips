import tripsData from "@/api/tripsData.json";
import { CardFooter } from "@/components/Card";
import Timeline from "@/components/trips/Timeline";
import TripCard from "@/components/trips/TripCard";
import { getMonthsUntil } from "@/utils/date";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, YStack } from "tamagui";

const TripsScreen = () => {
  const { t } = useTranslation("", { keyPrefix: "tripsScreen" });
  const trip = tripsData.data[0];
  const monthsUntil = getMonthsUntil(trip.bookingStart);

  return (
    <ScrollView backgroundColor="$background">
      <YStack flex={1} gap="$2" paddingHorizontal="$4">
        <Text fontSize="$6" fontWeight="$7" paddingVertical="$2">
          {trip.city}
        </Text>
        <TripCard
          trip={trip}
          badgeText={t("inMonths", { count: monthsUntil })}
          footer={
            <CardFooter
              guestImage={trip.guestImage}
              buttonLabel={t("displayAd")}
            />
          }
        />
        <Timeline trip={trip} />
      </YStack>
    </ScrollView>
  );
};

export default TripsScreen;
