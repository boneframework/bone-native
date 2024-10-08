import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MapView from "react-native-maps";

function Map(props) {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default Map;
