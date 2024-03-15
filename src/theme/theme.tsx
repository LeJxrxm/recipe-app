import {DefaultTheme} from "@react-navigation/native";

/** C O L O R S **/
const colors: {
    background: string,
    primary: string,
    dark: string,
    success: string,
    danger: string,
    warning: string,
    info: string
} = {
    background: '#fefae0',
    primary: '#bc6c25',
    dark: '#252422',
    success: '#606c38',
    danger: '#ae2012',
    warning: '#ca6702',
    info: '#335c67'
}

const theme: object = {
    // ...DefaultTheme,
    colors,
    dark: false,

    borderRadius: 8,

    /** T E X T S **/
    texts: {
        title: {
            h1: {
                fontSize: 20,
                color: colors.dark
            }
        }
    }
};

export default theme;
