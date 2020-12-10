import { DefaultTheme } from "@react-navigation/native"
import color from "../config/color"


export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: color.red,
        // secondary: color.black,
        background: color.black
    }
}
