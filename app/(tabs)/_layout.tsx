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

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: colors.pinkRed,
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: t("explore"),
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="wishlists"
        options={{
          title: t("wishlists"),
          tabBarIcon: ({ color }) => <HeartIcon color={color} />,
          header: () => <Header title={t("wishlists")} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: t("trips"),
          headerShown: true,
          header: () => (
            <Header
              title={t("trips")}
              rightIcon={<List color="$black" size="$1" strokeWidth={2.75} />}
            />
          ),
          tabBarIcon: ({ color }) => <TripsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: t("inbox"),
          tabBarIcon: ({ color }) => <MessagesIcon color={color} />,
          header: () => <Header title={t("inbox")} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t("profile"),
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
          header: () => <Header title={t("profile")} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
