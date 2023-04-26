import { extendBaseTheme } from "@chakra-ui/react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from "@chakra-ui/theme";

const { Button, Input, Divider, Table, Tooltip, Slider, Spinner } =
  chakraTheme.components;

export const webAppTheme = extendBaseTheme({
  components: {
    Button,
    Input,
    Divider,
    Table,
    Tooltip,
    Slider,
    Spinner
  },
});
