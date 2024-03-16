import Container from "../components/Container";
import {Image, Text, View} from "react-native";
import {ParamListBase} from "@react-navigation/native";

const Recipe: React.FC = ({route}) => {
    const params: object = route.params;
    const {recipe: recipe} = params
    console.log(recipe);
    return (
        <>
            <Container showSearchbar={false}>
                <View style={{padding: 0, margin: 0}}>
                    <Image style={{width: '100%', height: 250, zIndex: 10, position: 'absolute'}} source={{uri: recipe.image}} resizeMode={'cover'} />
                    <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 20, marginTop: 260}}>{recipe.titre}</Text>
                    <Text style={{fontSize: 18, textAlign: 'justify'}}>{recipe.description}</Text>
                </View>
            </Container>
        </>
    );
}

export default Recipe;
