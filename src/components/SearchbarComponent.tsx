import {StyleSheet, TextInput} from "react-native";
import {useTheme} from "@react-navigation/native";
import {useState} from "react";

const SearchbarComponent: React.FC = (props: any) => {

    const theme = useTheme();

    const [search, setSearch] = useState('');

    const processSearch = (): void => {
        console.log('Recherche: ' + search);
    };

    const style = StyleSheet.create({
        searchbar: {
            paddingVertical: 10,
            paddingHorizontal: 10,
            width: '80%',
            backgroundColor: '#ffffff',
            borderRadius: theme.borderRadius,
            opacity: 1,
            marginTop: 35
        }
    });

    return (
        <TextInput
            placeholder={"Qu'est-ce qu'on mange aujourd'hui ?"}
            style={style.searchbar}
            onChangeText={(v: string) => setSearch(v)}
            onSubmitEditing={processSearch}
        />
    );
}

export default SearchbarComponent;
