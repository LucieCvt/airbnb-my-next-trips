import { Tabs } from "expo-router";
import React from "react";

import SearchIcon from "@/components/icons/tabBar/SearchIcon";
import HeartIcon from "@/components/icons/tabBar/HeartIcon";
import TripsIcon from "@/components/icons/tabBar/TripsIcon";
import MessagesIcon from "@/components/icons/tabBar/MessagesIcon";
import ProfileIcon from "@/components/icons/tabBar/ProfileIcon";

export default function TabLayout() {
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
          tabBarIcon: ({ color }) => <TripsIcon color={color} />,
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
}
