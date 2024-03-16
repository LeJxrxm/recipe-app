import React from "react";
import Container from "../components/Container";
import {Text, View} from "react-native";
import RecipePreview from "../components/RecipePreview";
import {useTheme} from "@react-navigation/native";

const Home: React.FC = () => {

    const recipes: Array<Recipe> = [
        {
            titre: 'Camembert fondu',
            image: 'https://assets.afcdn.com/recipe/20201104/115298_w1024h768c1cx2250cy1502cxt0cyt0cxb4500cyb3004.jpg',
            tps_preparation: 600,
            description: 'Le camembert fondu est une délicieuse préparation où le fromage camembert est chauffé jusqu\'à ce qu\'il devienne fondant et crémeux. Servi généralement chaud, ce plat réconfortant offre une texture onctueuse et un goût riche et prononcé de fromage. Accompagné de pains frais, de pommes de terre rôties ou de légumes croquants, le camembert fondu est un régal irrésistible pour les amateurs de fromage. Sa saveur douce et crémeuse en fait un choix parfait pour les apéritifs, les collations ou même comme plat principal dans une fondue au fromage. Dégustez chaque bouchée de ce mets réconfortant qui réchauffe le cœur et satisfait les papilles gustatives.',
        },
        {
            titre: 'Big mac',
            image: 'https://images.mktw.net/im-70570206?width=700&size=1.4382022471910112',
            tps_preparation: 600,
            description: 'Le Big Mac est l\'un des hamburgers les plus emblématiques de la chaîne de restauration rapide McDonald\'s. Composé de deux steaks hachés de bœuf, de fromage fondu, de laitue croquante, de cornichons, d\'oignons, le tout garni de la célèbre sauce spéciale, le Big Mac est un symbole de la cuisine rapide et savoureuse. Avec ses étages de garnitures entre deux pains à hamburger moelleux et dorés, le Big Mac offre une expérience de dégustation satisfaisante et pleine de saveurs. Que ce soit pour une pause déjeuner rapide ou pour satisfaire une envie de fast-food, le Big Mac est une option populaire et appréciée par de nombreux amateurs de hamburgers à travers le monde.'
        },
        {
            titre: 'Pizza 4 fromages',
            image: 'http://www.pate-a-pizza.org/wp-content/uploads/recette-pizza-4-fromages.jpg',
            tps_preparation: 600,
            description: 'La pizza 4 fromages est une délicieuse création qui marie parfaitement les saveurs de quatre types de fromages différents. Sur une base de pâte à pizza moelleuse et croustillante, cette pizza est généreusement garnie d\'un mélange de fromages variés tels que la mozzarella, le gorgonzola, le cheddar et le parmesan. Chaque bouchée offre une explosion de saveurs riches et crémeuses, avec des nuances allant du doux au corsé selon le type de fromage utilisé. La combinaison de ces quatre fromages crée une harmonie parfaite de textures et de goûts, faisant de la pizza 4 fromages un choix irrésistible pour les amateurs de fromage. Accompagnée d\'une sauce tomate maison et d\'herbes fraîches, cette pizza est un véritable délice pour les papilles gustatives, idéale à partager entre amis ou en famille lors d\'un repas convivial.'
        }
    ];


    const {row} = useTheme();

    return (
        <Container showSearchbar={true}>
            <View style={row}>
                {recipes.map((recipe: Recipe) => {
                    return (
                        <RecipePreview recipe={recipe}/>
                    )
                })}
            </View>
        </Container>
    );
}

export default Home;
