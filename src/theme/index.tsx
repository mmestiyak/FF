import { extendTheme } from "native-base";

const theme = extendTheme({
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark"
  }
});

export type ITheme = typeof theme;

export default theme;
