import {StyleSheet, Text, View} from "react-native";
import {useNavigation, useRoute, useTheme} from "@react-navigation/native";

import {HomeIcon} from "react-native-heroicons/solid";
import {PlusIcon, UserIcon} from "react-native-heroicons/mini";
import React, {useEffect, useState} from "react";

const Navbar: React.FC = () => {

    const navigation = useNavigation();
    const route = useRoute(); // Get the current route

    const {colors, borderRadius}: any = useTheme();
    return (
        <View style={{...style.shadow, backgroundColor: '#fff', width: '90%', height: 50, borderRadius}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <PlusIcon color={route.name === 'CreerRecette' ? colors.navbarActive : colors.primary} size={30} onPress={() => navigation.navigate('CreerRecette')} />
                <HomeIcon color={route.name === 'Accueil' ? colors.navbarActive : colors.primary} size={30} onPress={() => navigation.navigate('Accueil')} />
                <UserIcon color={route.name === 'Profile' ? colors.navbarActive : colors.primary} size={30} onPress={() => navigation.navigate('Profile')} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: .2,
        shadowRadius: 8,
        elevation: 6, // Pour iOS, même s'il est ignoré, il est souvent utilisé pour garder la cohérence entre les plateformes
    }
});

export default Navbar;