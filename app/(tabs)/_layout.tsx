import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

import Header from "@/components/Header";
import {
  HeartIcon,
  MessagesIcon,
  ProfileIcon,
  SearchIcon,
  TripsIcon,
} from "@/components/icons/tabBar";
import { colors } from "@/core/tamagui.config";
import { List } from "@tamagui/lucide-icons";

const TabLayout = () => {
  const { t } = useTranslation("", { keyPrefix: "tabs" });
  const { t: tTrips } = useTranslation("", { keyPrefix: "tripsScreen" });

  return (
    <Tabs
      initialRouteName="trips"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("explore"),
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
          tabBarActiveTintColor: colors.pinkRed,
        }}
      />
      <Tabs.Screen
        name="wishlists"
        options={{
          title: t("wishlists"),
          tabBarIcon: ({ color }) => <HeartIcon color={color} />,
          tabBarActiveTintColor: colors.pinkRed,
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: t("trips"),
          headerShown: true,
          header: () => (
            <Header
              title={tTrips("title")}
              rightIcon={<List color="$black" size="$1.5" />}
            />
          ),
          tabBarIcon: ({ color }) => <TripsIcon color={color} />,
          tabBarActiveTintColor: colors.pinkRed,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: t("inbox"),
          tabBarIcon: ({ color }) => <MessagesIcon color={color} />,
          tabBarActiveTintColor: colors.pinkRed,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t("profile"),
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
          tabBarActiveTintColor: colors.pinkRed,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
