# Airbnb — My Next Trips

> A pixel-perfect reproduction of Airbnb's **"My Trips"** screen, built as a technical assessment.

<p align="center">
  <img src="https://img.shields.io/badge/Expo-54-000020?logo=expo" alt="Expo" />
  <img src="https://img.shields.io/badge/React_Native-0.81-61DAFB?logo=react" alt="React Native" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tamagui-2.0_rc-FF69B4" alt="Tamagui" />
  <img src="https://img.shields.io/badge/React-19.1-61DAFB?logo=react" alt="React 19" />
</p>

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Technical Decisions](#technical-decisions)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Internationalization](#internationalization)
- [Testing](#testing)

---

## Features

- **TripCard** — Trip card with image, badge, city name and host information
- **TimelineBlock** — Visual timeline showing check-in / check-out dates and times
- **DayMarker & InfoCard** — Granular components for displaying day details
- **Tab Navigation** — 5 tabs (Explore, Wishlists, Trips, Inbox, Profile) with custom SVG icons
- **Locale-aware Date Formatting** — Date/time utilities with full locale support (fr-FR / en-US)
- **Design System** — Tamagui design tokens (colors, typography, spacing) aligned with Airbnb's visual identity

---

## Tech Stack

| Category                 | Technology                                                                     |
| ------------------------ | ------------------------------------------------------------------------------ |
| **Framework**            | [Expo](https://expo.dev) 54 (New Architecture)                                 |
| **UI**                   | [React Native](https://reactnative.dev) 0.81 + [React](https://react.dev) 19   |
| **Design System**        | [Tamagui](https://tamagui.dev) 2.0                                             |
| **Navigation**           | [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing) |
| **Typography**           | Montserrat (4 weights: 400, 500, 600, 700)                                     |
| **Internationalization** | [i18next](https://www.i18next.com) + react-i18next                             |
| **Language**             | TypeScript 5.9 (strict mode)                                                   |
| **Testing**              | Jest + jest-expo                                                               |
| **Linting**              | ESLint (Expo config)                                                           |

---

## Technical Decisions

### Tamagui as Design System

Tamagui was chosen for its ability to provide a comprehensive **design token** system (colors, spacing, sizes, radii) while delivering optimal performance on React Native through its **static compiler**. This ensures visual consistency across the entire application while staying true to Airbnb's brand identity.

### Expo Router (file-based routing)

File-based routing simplifies navigation and aligns with modern framework conventions (Next.js, Remix). The `app/(tabs)/` directory directly describes the navigation structure.

### React Compiler & New Architecture

The project enables Expo's experimental features (`reactCompiler`, `newArchEnabled`) to leverage React 19 optimizations and React Native's new architecture (Fabric + TurboModules).

### Separation of Concerns

- **`components/`** — Reusable UI components, broken down atomically (`Card`, `Badge`, `DayMarker`…)
- **`core/`** — Centralized configuration (i18n, Tamagui tokens)
- **`utils/`** — Pure, tested utility functions
- **`types/`** — Shared TypeScript types
- **`api/`** — Mock data (ready for API integration)

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **yarn**
- [Expo Go](https://expo.dev/go) on your device, or an iOS / Android emulator

### Installation

```bash
# Clone the repo
git clone <repo-url>
cd airbnb-my-next-trips

# Install dependencies
yarn install

# Start the development server
yarn start
```

Scan the QR code with **Expo Go** (Android) or the **Camera** app (iOS) to open the application.

---

## Available Scripts

| Command        | Description                       |
| -------------- | --------------------------------- |
| `yarn start`   | Start the Expo development server |
| `yarn ios`     | Run on iOS simulator              |
| `yarn android` | Run on Android emulator           |
| `yarn web`     | Run in the browser                |
| `yarn lint`    | Lint code with ESLint             |
| `yarn test`    | Run Jest tests                    |

---

## Project Structure

```
airbnb-my-next-trips/
├── app/                          # Routing (Expo Router)
│   ├── _layout.tsx              #   Root layout (TamaguiProvider, fonts)
│   └── (tabs)/
│       ├── _layout.tsx          #   Tab bar configuration
│       ├── index.tsx            #   Explore
│       ├── trips.tsx            #   Trips (main screen)
│       ├── wishlists.tsx        #   Wishlists
│       ├── inbox.tsx            #   Inbox
│       └── profile.tsx          #   Profile
│
├── components/                   # Reusable UI components
│   ├── Card/                    #   Card, CardFooter
│   ├── trips/                   #   TripCard, TimelineBlock, DayMarker, InfoCard
│   ├── icons/tabBar/            #   Tab bar SVG icons
│   ├── Header.tsx               #   Generic header
│   └── Badge.tsx                #   Badge component
│
├── core/                         # Configuration
│   ├── i18n.ts                  #   i18next setup
│   └── tamagui.config.ts        #   Tokens & Tamagui theme
│
├── utils/                        # Utilities
│   ├── date.ts                  #   Date formatting (locale-aware)
│   └── __tests__/               #   Unit tests
│
├── types/                        # TypeScript types
│   └── trip.ts                  #   Trip type definition
│
├── api/                          # Mock data
│   └── tripsData.json           #   Sample trip data
│
└── assets/                       # Static assets
    ├── fonts/                   #   (empty — fonts via @expo-google-fonts/montserrat)
    └── translation/
        └── fr.json              #   French translations
```

---

## Design System

The design system is built on **Tamagui tokens** configured in [core/tamagui.config.ts](core/tamagui.config.ts).

### Color Palette

| Token              | Value     | Usage               |
| ------------------ | --------- | ------------------- |
| `$pinkRed`         | `#E31C5D` | Airbnb accent color |
| `$blackBackground` | `#222222` | Primary text        |
| `$grayText`        | `#6A6A6A` | Secondary text      |
| `$grayBackground`  | `#F2F2F2` | Section backgrounds |

### Typography

**Montserrat** is used with 4 weights:

| Weight | Token | Usage       |
| ------ | ----- | ----------- |
| 400    | `$4`  | Body text   |
| 500    | `$5`  | Medium text |
| 600    | `$6`  | Subtitles   |
| 700    | `$7`  | Headings    |

### Spacing

Tamagui provides a spacing scale (`$1` to `$16`) used consistently across all components for padding, margin and gap.

> See [TOKENS.md](TOKENS.md) for the complete token reference.

---

## Internationalization

The app uses **i18next** with French as the default language. Translation keys are organized by domain:

```
tabs.explore        → "Explorer"
tabs.trips          → "Voyages"
tripsScreen.title   → "Voyages"
tripsScreen.checkIn → "Arrivée à partir de"
```

Translation files are located in [assets/translation/](assets/translation/).

---

## Testing

Unit tests cover date formatting utilities with multi-locale support:

```bash
yarn test
```

```
 PASS  utils/__tests__/date.test.ts
  ✓ formatDateRange — localized date ranges (fr/en)
  ✓ formatDayLabel  — day label with locale
  ✓ formatTime      — time formatting
  ✓ getMonthsUntil  — months remaining calculation
```

---

## License

Project built as a technical assessment — non-commercial use only.
