import React from "react";
import {Text} from "react-native";
import Container from "../components/Container";

const Profile: React.FC = () => {
    return (
        <Container showSearchbar={false}>
            <Text>
                Profile
            </Text>
        </Container>
    );
}

export default Profile;