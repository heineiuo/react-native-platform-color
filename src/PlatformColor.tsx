import {
  Appearance,
  PlatformColor as NativePlatformColor,
  Platform,
  OpaqueColorValue,
} from "react-native";

/**
 * 
 * https://noahgilmore.com/blog/dark-mode-uicolor-compatibility/
 * 
function getData() {
  const elements = document.querySelectorAll(
    ".IOS13SystemColorTable__Row-sc-13mkhdn-3.hSCxtd"
  );

  const results = {
    light: {},
    dark: {},
  };
  let index = 0;
  for (const el of elements) {
    const colorScheme = index < 36 ? "light" : "dark";
    const item = {};
    item.name = el.childNodes[0].innerText;
    item.hex = el.childNodes[2].innerText;
    item.rgba = el.childNodes[3].innerText;
    results[colorScheme][item.name] = item;
    index++;
  }

  return results;
}

 */

const iosColors = {
  light: {
    label: {
      name: "label",
      hex: "#000000ff",
      rgba: "rgba(0.0, 0.0, 0.0, 1.0)",
    },
    secondaryLabel: {
      name: "secondaryLabel",
      hex: "#3c3c4399",
      rgba: "rgba(60.0, 60.0, 67.0, 0.6)",
    },
    tertiaryLabel: {
      name: "tertiaryLabel",
      hex: "#3c3c434c",
      rgba: "rgba(60.0, 60.0, 67.0, 0.3)",
    },
    quaternaryLabel: {
      name: "quaternaryLabel",
      hex: "#3c3c432d",
      rgba: "rgba(60.0, 60.0, 67.0, 0.18)",
    },
    systemFill: {
      name: "systemFill",
      hex: "#78788033",
      rgba: "rgba(120.0, 120.0, 128.0, 0.2)",
    },
    secondarySystemFill: {
      name: "secondarySystemFill",
      hex: "#78788028",
      rgba: "rgba(120.0, 120.0, 128.0, 0.16)",
    },
    tertiarySystemFill: {
      name: "tertiarySystemFill",
      hex: "#7676801e",
      rgba: "rgba(118.0, 118.0, 128.0, 0.12)",
    },
    quaternarySystemFill: {
      name: "quaternarySystemFill",
      hex: "#74748014",
      rgba: "rgba(116.0, 116.0, 128.0, 0.08)",
    },
    placeholderText: {
      name: "placeholderText",
      hex: "#3c3c434c",
      rgba: "rgba(60.0, 60.0, 67.0, 0.3)",
    },
    systemBackground: {
      name: "systemBackground",
      hex: "#ffffffff",
      rgba: "rgba(255.0, 255.0, 255.0, 1.0)",
    },
    secondarySystemBackground: {
      name: "secondarySystemBackground",
      hex: "#f2f2f7ff",
      rgba: "rgba(242.0, 242.0, 247.0, 1.0)",
    },
    tertiarySystemBackground: {
      name: "tertiarySystemBackground",
      hex: "#ffffffff",
      rgba: "rgba(255.0, 255.0, 255.0, 1.0)",
    },
    systemGroupedBackground: {
      name: "systemGroupedBackground",
      hex: "#f2f2f7ff",
      rgba: "rgba(242.0, 242.0, 247.0, 1.0)",
    },
    secondarySystemGroupedBackground: {
      name: "secondarySystemGroupedBackground",
      hex: "#ffffffff",
      rgba: "rgba(255.0, 255.0, 255.0, 1.0)",
    },
    tertiarySystemGroupedBackground: {
      name: "tertiarySystemGroupedBackground",
      hex: "#f2f2f7ff",
      rgba: "rgba(242.0, 242.0, 247.0, 1.0)",
    },
    separator: {
      name: "separator",
      hex: "#3c3c4349",
      rgba: "rgba(60.0, 60.0, 67.0, 0.29)",
    },
    opaqueSeparator: {
      name: "opaqueSeparator",
      hex: "#c6c6c8ff",
      rgba: "rgba(198.0, 198.0, 200.0, 1.0)",
    },
    link: {
      name: "link",
      hex: "#007affff",
      rgba: "rgba(0.0, 122.0, 255.0, 1.0)",
    },
    darkText: {
      name: "darkText",
      hex: "#000000ff",
      rgba: "rgba(0.0, 0.0, 0.0, 1.0)",
    },
    lightText: {
      name: "lightText",
      hex: "#ffffff99",
      rgba: "rgba(255.0, 255.0, 255.0, 0.6)",
    },
    systemBlue: {
      name: "systemBlue",
      hex: "#007affff",
      rgba: "rgba(0.0, 122.0, 255.0, 1.0)",
    },
    systemGreen: {
      name: "systemGreen",
      hex: "#34c759ff",
      rgba: "rgba(52.0, 199.0, 89.0, 1.0)",
    },
    systemIndigo: {
      name: "systemIndigo",
      hex: "#5856d6ff",
      rgba: "rgba(88.0, 86.0, 214.0, 1.0)",
    },
    systemOrange: {
      name: "systemOrange",
      hex: "#ff9500ff",
      rgba: "rgba(255.0, 149.0, 0.0, 1.0)",
    },
    systemPink: {
      name: "systemPink",
      hex: "#ff2d55ff",
      rgba: "rgba(255.0, 45.0, 85.0, 1.0)",
    },
    systemPurple: {
      name: "systemPurple",
      hex: "#af52deff",
      rgba: "rgba(175.0, 82.0, 222.0, 1.0)",
    },
    systemRed: {
      name: "systemRed",
      hex: "#ff3b30ff",
      rgba: "rgba(255.0, 59.0, 48.0, 1.0)",
    },
    systemTeal: {
      name: "systemTeal",
      hex: "#5ac8faff",
      rgba: "rgba(90.0, 200.0, 250.0, 1.0)",
    },
    systemYellow: {
      name: "systemYellow",
      hex: "#ffcc00ff",
      rgba: "rgba(255.0, 204.0, 0.0, 1.0)",
    },
    systemGray: {
      name: "systemGray",
      hex: "#8e8e93ff",
      rgba: "rgba(142.0, 142.0, 147.0, 1.0)",
    },
    systemGray2: {
      name: "systemGray2",
      hex: "#aeaeb2ff",
      rgba: "rgba(174.0, 174.0, 178.0, 1.0)",
    },
    systemGray3: {
      name: "systemGray3",
      hex: "#c7c7ccff",
      rgba: "rgba(199.0, 199.0, 204.0, 1.0)",
    },
    systemGray4: {
      name: "systemGray4",
      hex: "#d1d1d6ff",
      rgba: "rgba(209.0, 209.0, 214.0, 1.0)",
    },
    systemGray5: {
      name: "systemGray5",
      hex: "#e5e5eaff",
      rgba: "rgba(229.0, 229.0, 234.0, 1.0)",
    },
    systemGray6: {
      name: "systemGray6",
      hex: "#f2f2f7ff",
      rgba: "rgba(242.0, 242.0, 247.0, 1.0)",
    },
  },
  dark: {
    label: {
      name: "label",
      hex: "#ffffffff",
      rgba: "rgba(255.0, 255.0, 255.0, 1.0)",
    },
    secondaryLabel: {
      name: "secondaryLabel",
      hex: "#ebebf599",
      rgba: "rgba(235.0, 235.0, 245.0, 0.6)",
    },
    tertiaryLabel: {
      name: "tertiaryLabel",
      hex: "#ebebf54c",
      rgba: "rgba(235.0, 235.0, 245.0, 0.3)",
    },
    quaternaryLabel: {
      name: "quaternaryLabel",
      hex: "#ebebf52d",
      rgba: "rgba(235.0, 235.0, 245.0, 0.18)",
    },
    systemFill: {
      name: "systemFill",
      hex: "#7878805b",
      rgba: "rgba(120.0, 120.0, 128.0, 0.36)",
    },
    secondarySystemFill: {
      name: "secondarySystemFill",
      hex: "#78788051",
      rgba: "rgba(120.0, 120.0, 128.0, 0.32)",
    },
    tertiarySystemFill: {
      name: "tertiarySystemFill",
      hex: "#7676803d",
      rgba: "rgba(118.0, 118.0, 128.0, 0.24)",
    },
    quaternarySystemFill: {
      name: "quaternarySystemFill",
      hex: "#7676802d",
      rgba: "rgba(118.0, 118.0, 128.0, 0.18)",
    },
    placeholderText: {
      name: "placeholderText",
      hex: "#ebebf54c",
      rgba: "rgba(235.0, 235.0, 245.0, 0.3)",
    },
    systemBackground: {
      name: "systemBackground",
      hex: "#000000ff",
      rgba: "rgba(0.0, 0.0, 0.0, 1.0)",
    },
    secondarySystemBackground: {
      name: "secondarySystemBackground",
      hex: "#1c1c1eff",
      rgba: "rgba(28.0, 28.0, 30.0, 1.0)",
    },
    tertiarySystemBackground: {
      name: "tertiarySystemBackground",
      hex: "#2c2c2eff",
      rgba: "rgba(44.0, 44.0, 46.0, 1.0)",
    },
    systemGroupedBackground: {
      name: "systemGroupedBackground",
      hex: "#000000ff",
      rgba: "rgba(0.0, 0.0, 0.0, 1.0)",
    },
    secondarySystemGroupedBackground: {
      name: "secondarySystemGroupedBackground",
      hex: "#1c1c1eff",
      rgba: "rgba(28.0, 28.0, 30.0, 1.0)",
    },
    tertiarySystemGroupedBackground: {
      name: "tertiarySystemGroupedBackground",
      hex: "#2c2c2eff",
      rgba: "rgba(44.0, 44.0, 46.0, 1.0)",
    },
    separator: {
      name: "separator",
      hex: "#54545899",
      rgba: "rgba(84.0, 84.0, 88.0, 0.6)",
    },
    opaqueSeparator: {
      name: "opaqueSeparator",
      hex: "#38383aff",
      rgba: "rgba(56.0, 56.0, 58.0, 1.0)",
    },
    link: {
      name: "link",
      hex: "#0984ffff",
      rgba: "rgba(9.0, 132.0, 255.0, 1.0)",
    },
    darkText: {
      name: "darkText",
      hex: "#000000ff",
      rgba: "rgba(0.0, 0.0, 0.0, 1.0)",
    },
    lightText: {
      name: "lightText",
      hex: "#ffffff99",
      rgba: "rgba(255.0, 255.0, 255.0, 0.6)",
    },
    systemBlue: {
      name: "systemBlue",
      hex: "#0a84ffff",
      rgba: "rgba(10.0, 132.0, 255.0, 1.0)",
    },
    systemGreen: {
      name: "systemGreen",
      hex: "#30d158ff",
      rgba: "rgba(48.0, 209.0, 88.0, 1.0)",
    },
    systemIndigo: {
      name: "systemIndigo",
      hex: "#5e5ce6ff",
      rgba: "rgba(94.0, 92.0, 230.0, 1.0)",
    },
    systemOrange: {
      name: "systemOrange",
      hex: "#ff9f0aff",
      rgba: "rgba(255.0, 159.0, 10.0, 1.0)",
    },
    systemPink: {
      name: "systemPink",
      hex: "#ff375fff",
      rgba: "rgba(255.0, 55.0, 95.0, 1.0)",
    },
    systemPurple: {
      name: "systemPurple",
      hex: "#bf5af2ff",
      rgba: "rgba(191.0, 90.0, 242.0, 1.0)",
    },
    systemRed: {
      name: "systemRed",
      hex: "#ff453aff",
      rgba: "rgba(255.0, 69.0, 58.0, 1.0)",
    },
    systemTeal: {
      name: "systemTeal",
      hex: "#64d2ffff",
      rgba: "rgba(100.0, 210.0, 255.0, 1.0)",
    },
    systemYellow: {
      name: "systemYellow",
      hex: "#ffd60aff",
      rgba: "rgba(255.0, 214.0, 10.0, 1.0)",
    },
    systemGray: {
      name: "systemGray",
      hex: "#8e8e93ff",
      rgba: "rgba(142.0, 142.0, 147.0, 1.0)",
    },
    systemGray2: {
      name: "systemGray2",
      hex: "#636366ff",
      rgba: "rgba(99.0, 99.0, 102.0, 1.0)",
    },
    systemGray3: {
      name: "systemGray3",
      hex: "#48484aff",
      rgba: "rgba(72.0, 72.0, 74.0, 1.0)",
    },
    systemGray4: {
      name: "systemGray4",
      hex: "#3a3a3cff",
      rgba: "rgba(58.0, 58.0, 60.0, 1.0)",
    },
    systemGray5: {
      name: "systemGray5",
      hex: "#2c2c2eff",
      rgba: "rgba(44.0, 44.0, 46.0, 1.0)",
    },
    systemGray6: {
      name: "systemGray6",
      hex: "#1c1c1eff",
      rgba: "rgba(28.0, 28.0, 30.0, 1.0)",
    },
  },
};

export function PlatformColor(...colors: string[]): OpaqueColorValue {
  if (Platform.OS !== "web") {
    return NativePlatformColor(...colors);
  }
  const colorScheme: "dark" | "light" = Appearance.getColorScheme() || "light";
  let index = 0;
  const max = colors.length;
  const defaultColorItem = { rgba: "rgba(125,125,125,1)" };
  let colorItem = defaultColorItem;
  while (index < max) {
    let colorGroup = iosColors[colorScheme];
    let colorName = colors[index] as keyof typeof colorGroup;
    colorItem = colorGroup[colorName];
    if (colorItem) {
      break;
    }
    index++;
  }
  // @ts-ignore
  return (colorItem || defaultColorItem).rgba as OpaqueColorValue;
}
