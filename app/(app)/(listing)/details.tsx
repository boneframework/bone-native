import React from 'react';
import ListItemSwipable from '@boneframework/native-components/components/ListItemSwipable';
import Text from '@boneframework/native-components/components/Text'
import useStyle from "@boneframework/native-components/hooks/useStyle";
import {KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";
import Image from '@boneframework/native-components/components/Image';
import {useLocalSearchParams} from 'expo-router';
import {GestureHandlerRootView} from "react-native-gesture-handler";

import colors from '../../../config/colors'
import ContactSellerForm from '@/components/ContactSellerForm';

function Details() {
    const payload = useLocalSearchParams();
    const listing = JSON.parse(payload.item);
    const style = useStyle();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: style.backgroundColor
        },
        image: {
            width: '100%',
            height: 200
        },
        detailsContainer: {
        },
        userContainer: {
            marginVertical: 10,
        },
        title: {
            paddingHorizontal: 20,
            paddingTop: 20,
            fontSize: 24,
            fontWeight: '500',
            color: style.text.color
        },
        price: {
            paddingHorizontal: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.secondary,
            marginVertical: 10
        }
    });

    return (
        <GestureHandlerRootView>
            <KeyboardAvoidingView
                behavior="position"
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
                style={styles.container}
            >
                <Image style={styles.image} preview={{uri: listing.images[0].thumbnailUrl}} uri={listing.images[0].url } />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{listing.title}</Text>
                    <Text style={styles.price}>${listing.price}</Text>
                    <View style={styles.userContainer}>
                        <ListItemSwipable
                            image={require('@/assets/images/avatars/rabbit.png')}
                            title="Bunny Bee"
                            subtitle="5 listings"
                        />
                    </View>
                </View>
                <ContactSellerForm listing={listing} />
            </KeyboardAvoidingView>
        </GestureHandlerRootView>
    );
}

export default Details;
