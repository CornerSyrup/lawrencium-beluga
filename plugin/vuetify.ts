import { createVuetify, ThemeDefinition } from "vuetify";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#95A3B3",
    primary: "#4B4E6D",
    secondary: "#84DCC6",
  },
};

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#222222",
    surface: "#95A3B3",
    primary: "#4B4E6D",
    secondary: "#84DCC6",
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    themes: { light, dark },
  },
});
