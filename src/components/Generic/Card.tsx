import {Image, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {useState} from "react";

type props = {
    image: string|null,
    titre: string|null,
    width: string|number,
    onClick: any|null
}

const Card = ({
    image,
    titre,
    width,
    onClick
}: props) => {

    const {card, colors}: any = useTheme();

    return (
        <TouchableOpacity
            style={{...card.generic, width}}
            onPress={onClick}
        >
            <View>
                <Image style={card.image} source={{uri: image}} resizeMode={"cover"}/>
                <View style={card.contentContainer}>
                    <Text style={card.title}>{titre}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Card;
