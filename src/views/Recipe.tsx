import Container from "../components/Container";
import {Image, Text, View} from "react-native";
import {ParamListBase, useTheme} from "@react-navigation/native";

const Recipe: React.FC = ({route}: any) => {
    console.log('here');
    const params: object = route.params;
    const {recipe}: any = params
    console.log(recipe);
    const {colors, borderRadius} = useTheme();
    return (
        <>
            <Container showSearchbar={false}>
                <View style={{padding: 0, margin: 0}}>
                    <Image style={{width: '100%', height: 250, zIndex: 10, position: 'absolute', borderColor: colors.primary, borderWidth: 4, borderRadius: borderRadius * 2, }} source={{uri: recipe.image}} resizeMode={'cover'} />
                    <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 20, marginTop: 260, color: colors.primary}}>{recipe.titre}</Text>
                    <Text style={{fontSize: 18, textAlign: 'justify'}}>{recipe.description}</Text>

                    <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 10, color: colors.primary, paddingTop: 20}}>Ingrédients</Text>

                    {
                        recipe.recipe_ingredients.map((ingredient: RecipeIngredient) => {
                            return (
                                <Text key={ingredient.id} style={{fontSize: 16, textAlign: 'left'}}>{ingredient.ingredient}</Text>
                            )
                        })
                    }

                    <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 10, color: colors.primary, paddingTop: 20}}>Réalisation</Text>
                    {
                        recipe.recipe_steps.map((step: RecipeStep) => {
                            return (
                                <Text key={step.id} style={{fontSize: 16, textAlign: 'left'}}>{step.step}</Text>
                            )
                        })
                    }
                </View>
            </Container>
        </>
    );
}

export default Recipe;
