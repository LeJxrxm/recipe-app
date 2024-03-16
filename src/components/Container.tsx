import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import SearchbarComponent from "./SearchbarComponent";
import Navbar from "./Generic/Navbar";

type ContainerProps = {
    children: any,
    showSearchbar: boolean
};

const Container = ({
   children,
   showSearchbar = true
}: ContainerProps) => {
    const { colors } = useTheme();
    return (
        <View style={{position: 'relative', minHeight: '100%'}}>
            {showSearchbar &&
                <View style={{ ...style.searchbarContainer, backgroundColor: colors.background }}>
                    <SearchbarComponent />
                </View>
            }
            <ScrollView style={{ backgroundColor: colors.background, marginTop: 15, position: 'relative'}} contentContainerStyle={style.scrollViewContent}>
                {children}
            </ScrollView>
            <View style={{position: 'absolute', bottom: 30, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Navbar />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    searchbarContainer: {
        paddingVertical: Platform.OS === 'ios' ? 10 : 10,
        paddingHorizontal: Platform.OS === 'ios' ? 10 : 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: 50,
    },
    scrollViewContent: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 20,
        paddingHorizontal: Platform.OS === 'ios' ? 10 : 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: "column"
    }
});

export default Container;
