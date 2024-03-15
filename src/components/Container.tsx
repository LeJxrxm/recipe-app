import {Platform, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useTheme} from "@react-navigation/native";
import SearchbarComponent from "./SearchbarComponent";

const Container: React.FC = (props: any) => {
    const {colors} = useTheme();
    return (
        <ScrollView style={{backgroundColor: colors.background}} contentContainerStyle={style.container}>
            <SearchbarComponent/>
            <View style={{marginTop: 35}}>
                {props.children}
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        paddingVertical: Platform.OS === 'ios' ? 50 : 50,
        paddingHorizontal: Platform.OS === 'ios' ? 10 : 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '95%'
    }
});

export default Container;
