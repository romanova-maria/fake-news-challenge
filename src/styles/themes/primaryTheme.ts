/*
 * Theme is an important part of a design system. It should be developed in close collaboration with UI/UX team.
 * Use the same names and structure as designers, so you can speak the same language with them.
 * Bigger schema can be divided into several files, e.g. colors, components, etc
 * Theme should also contain spacing values, typography and a base section with
 * base font-size, font-color, background-color, etc
 * */

const colors = {
  white: "#ffffff",
  lightBlue: "#e8f5fa",
  blue: "#027da8",
  darkBlue: "#0296cb",
  theDarkestBlue: "#0277a1",
  red: "#d73434",
  darkRed: "#b72c2c",
  crazyPink: "#c61dd2",
  theDarkestRed: "#a22929",
  dirtyBlue: "#abccd7",
  green: "#258816",
  orange: "#f5b979",
} as const;

type ColorValue = (typeof colors)[keyof typeof colors];

type Palette = Record<
  "primary" | "danger" | "disabled" | "success" | "focus",
  ColorValue
>;
export const palette: Palette = {
  primary: colors.blue,
  danger: colors.red,
  disabled: colors.dirtyBlue,
  success: colors.green,
  focus: colors.orange,
};

type Color = ColorValue | Palette;

type Components = {
  header: {
    height: string;
    bgColor: Color;
  };
  footer: {
    height: string;
    bgColor: Color;
  };
  button: {
    height: string;
    borderRadius: string;
    colors: Record<"primary" | "danger" | "hover" | "active", ColorValue>;
  };
};

const components: Components = {
  header: {
    height: "6rem",
    bgColor: colors.lightBlue,
  },
  footer: {
    height: "10rem",
    bgColor: colors.lightBlue,
  },
  button: {
    height: "3rem",
    borderRadius: "0.375rem",
    colors: {
      primary: palette.primary,
      danger: palette.danger,
      hover: colors.darkBlue,
      active: colors.theDarkestBlue,
    },
  },
};

export interface PrimaryTheme {
  colors: typeof colors;
  palette: Palette;
  components: Components;
}

const theme: PrimaryTheme = {
  colors,
  palette,
  components,
};

export default theme;
