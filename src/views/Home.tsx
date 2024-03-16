import React, {useEffect, useState} from "react";
import Container from "../components/Container";
import {ActivityIndicator, View} from "react-native";
import RecipePreview from "../components/RecipePreview";
import {useTheme} from "@react-navigation/native";
import {API_URL} from "@env";
import axios, {AxiosError, AxiosResponse} from "axios";

const Home: React.FC = () => {

    const [recipes, setRecipes] = useState<Array<Recipe>>([])
    const [isLoading, setIsLoading] = useState(true);

    const getRecipes = async () => {
        console.log(`${API_URL}/recipes`);
        const response = axios.get(`http://192.168.1.69:8765/api/recipes`)
            .then((data: AxiosResponse) => {
                setRecipes(data.data);
                setIsLoading(false);
            })
            .catch((err: AxiosError) => {
                console.log(err.toJSON());
            })
        ;
    };

    useEffect(() => {
        getRecipes();
    }, []);

    const {row, colors} = useTheme();

    return (
        <Container showSearchbar={true}>
            {}
            <View style={row}>
                {
                    isLoading ?
                        (
                            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                                <ActivityIndicator size={"large"} color={colors.primary} />
                            </View>
                        ) : (
                            recipes.map((recipe: Recipe) => {
                            return (
                                <RecipePreview key={recipe.id} recipe={recipe} />
                            )})
                        )
                }
            </View>
        </Container>
    );
}

export default Home;
