import { createInput, defaultConfig } from "@formkit/vue";
import { classes } from "./formkit.theme";
import ComboBox from "~/components/form/ComboBox.vue";

export default defaultConfig({
  config: {
    classes,
  },
  inputs: {
    combobox: createInput(ComboBox, {
      props: ["options", "multiple"],
    }),
  },
});
