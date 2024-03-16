import {Text} from "react-native";
import Card from "./Generic/Card";
import {useNavigation} from "@react-navigation/native";

type props = {
    recipe: Recipe
}

const RecipePreview = ({
  recipe
}: props) => {

    const navigation = useNavigation();
    const clicked = () => {
        navigation.navigate('Recette', {
            recipe: recipe
        });
    }

    return (
        <Card onClick={clicked} width={"49%"} image={recipe.image} titre={recipe.titre} />
    )
};

export default RecipePreview;
