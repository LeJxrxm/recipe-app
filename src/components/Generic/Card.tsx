import {Image, Text, View} from "react-native";
import {useTheme} from "@react-navigation/native";

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

    const {card, colors} = useTheme();

    return (
        <View onTouchEndCapture={onClick} style={{...card.generic, width}}>
            <Image style={card.image} source={{uri: image}} resizeMode={"cover"}/>
            <View style={card.contentContainer}>
                <Text style={card.title}>{titre}</Text>
            </View>
        </View>
    );
};

export default Card;
