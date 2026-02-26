import { defaultConfig } from "@tamagui/config/v5";
import { createFont, createTamagui } from "tamagui";

export const colors = {
  white: "#FFFFFF",
  grayBackground: "#F2F2F2",
  mediumGrayBackground: "#E9E9E9",
  otherGrayBackground: "#F3F2EC",
  grayText: "#6A6A6A",
  blackText: "#222222",
  pinkRed: "#E31C5D",
};

const montserratFont = createFont({
  family: "Montserrat",

  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 22,
    6.5: 26,
    7: 28,
    8: 32,
    9: 42,
    10: 52,
  },

  weight: {
    4: "400", // Regular
    5: "500", // Medium
    6: "600", // SemiBold
    7: "700", // Bold
  },

  face: {
    400: { normal: "Montserrat" },
    500: { normal: "MontserratMedium" },
    600: { normal: "MontserratSemiBold" },
    700: { normal: "MontserratBold" },
  },
});

const config = createTamagui({
  ...defaultConfig,
  fonts: {
    heading: montserratFont,
    body: montserratFont,
  },
  themes: {
    ...defaultConfig.themes,
    light: {
      ...defaultConfig.themes.light,
      white: colors.white,
      grayBackground: colors.grayBackground,
      mediumGrayBackground: colors.mediumGrayBackground,
      otherGrayBackground: colors.otherGrayBackground,
      blackBackground: colors.blackText,
      grayText: colors.grayText,
      pinkRed: colors.pinkRed,
    },
  },
});

export default config;
