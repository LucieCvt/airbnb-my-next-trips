import { Tabs } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";

import Header from "@/components/Header";
import HeartIcon from "@/components/icons/tabBar/HeartIcon";
import MessagesIcon from "@/components/icons/tabBar/MessagesIcon";
import ProfileIcon from "@/components/icons/tabBar/ProfileIcon";
import SearchIcon from "@/components/icons/tabBar/SearchIcon";
import TripsIcon from "@/components/icons/tabBar/TripsIcon";
import { colors } from "@/core/tamagui.config";
import { List } from "@tamagui/lucide-icons";

const TabLayout = () => {
  const { t } = useTranslation("", { keyPrefix: "tripsScreen" });

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explorer", // TODO: use i18n with translation key
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="wishlists"
        options={{
          title: "Favoris", // TODO: use i18n with translation key
          tabBarIcon: ({ color }) => <HeartIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "Voyages", // TODO: use i18n with translation key
          headerShown: true,
          header: () => (
            <Header
              title={t("title")}
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
          title: "Messages", // TODO: use i18n with translation key
          tabBarIcon: ({ color }) => <MessagesIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil", // TODO: use i18n with translation key
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
