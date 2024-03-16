import {DefaultTheme} from "@react-navigation/native";

const BORDER_RADIUS: number = 8;

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

    borderRadius: BORDER_RADIUS,

    /** T E X T S **/
    texts: {
        title: {
            h1: {
                fontSize: 20,
                color: colors.dark
            }
        }
    },

    card: {
        generic: {
            position: 'relative',
            borderRadius: BORDER_RADIUS,
            backgroundColor: '#fff',
            overflow: 'hidden',
            elevation: 2, // Shadow android
            shadowColor: '#000', // iOS shadow
            shadowOpacity: 0.2, // iOS shadow
            shadowOffset: { width: 0, height: 5 }, // iOS shadow
            shadowRadius: 5, // iOS shadow
            marginBottom: 10

        },
        image: {
            width: '100%',
            height: 150, // or any fixed height you want
            position: 'absolute',
            top: 0,
            left: 0,
        },
        contentContainer: {
          padding: 15,
          paddingTop: 150
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
        },
        content: {
            fontSize: 16,
        },
    },

    row: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'space-between'
    }
};

export default theme;
