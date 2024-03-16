import React, {useEffect, useState} from "react";
import Container from "../components/Container";
import {ActivityIndicator, View} from "react-native";
import RecipePreview from "../components/RecipePreview";
import {useTheme} from "@react-navigation/native";
// @ts-ignore
import {API_URL} from "@env";
import axios, {AxiosError, AxiosResponse} from "axios";

const Home: React.FC = () => {

    const [recipes, setRecipes] = useState<Array<Recipe>>([])
    const [isLoading, setIsLoading] = useState(true);

    /**
     * Asynchronous function to fetch recipes from the API.
     * It makes a GET request to the API endpoint and updates the state variables `recipes` and `isLoading`.
     *
     * @async
     * @function
     * @returns {Promise<void>} Nothing
     */
    const getRecipes = async () => {
        console.log(`${API_URL}/recipes`);
        const response = axios.get(`${API_URL}/recipes`)
            .then((data: AxiosResponse) => {
                setRecipes(data.data);
                setIsLoading(false);
            })
            .catch((err: AxiosError) => {
                console.log(err.toJSON());
                setIsLoading(false);

            })
        ;
    };

    useEffect(() => {
        getRecipes();
    }, []);

    const {row, colors}: any = useTheme();

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
