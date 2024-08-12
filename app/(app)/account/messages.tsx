import React from 'react';
import {StyleSheet, View} from "react-native";
import Text from "@boneframework/native-components/components/Text";

function Messages(props) {
    return(
        <View style={styles.container}>
            <Text>Messages</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default Messages;
