import React from "react";

import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
    return (
        <>
            <View>
                <Text>Home.</Text>
                <Button title="Go to Home" onPress={() => navigation.navigate('Splash')} />
            </View>
        </>
    );
}

export default Home;