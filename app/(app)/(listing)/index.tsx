import React, {useEffect, useState} from 'react';
import Card from '@boneframework/native-components/components/Card'
import Screen from '@boneframework/native-components/components/Screen'
import {FlatList, StyleSheet, View} from "react-native";
import useApi from '@boneframework/native-components/hooks/useApi'
import useStyle from '@boneframework/native-components/hooks/useStyle'
import ActivityIndicator from '@boneframework/native-components/components/ActivityIndicator'
import Button from '@boneframework/native-components/components/Button'
import Text from '@boneframework/native-components/components/Text'
import {router} from 'expo-router';

import listingsApi from '@/api/listings'
import routes from '../../../config/routes'

function Index() {

    const getListingsApi = useApi(listingsApi.getListings);
    const [refreshing, setRefreshing] = useState(false);
    const style = useStyle();

    useEffect(() => {
        getListingsApi.request();
    }, []);

    const styles = StyleSheet.create({
        screen: {
            paddingHorizontal: 10,
            backgroundColor: style.backgroundColor
        }
    })

    return (
        <>
            <ActivityIndicator visible={getListingsApi.loading}  type={'overlay'}/>
            <Screen style={styles.screen}>
                { getListingsApi.error &&
                    <View>
                        <Text>Could not retrieve the listings</Text>
                        <Button textColor={'white'} color={'primary'} title={'retry'} onPress={ () => getListingsApi.request() }/>
                    </View>
                }
                <FlatList
                    data={getListingsApi.data}
                    keyExtractor={listing => listing.id}
                    onRefresh={() => getListingsApi.request()}
                    refreshing={refreshing}
                    renderItem={ ({item}) => {
                        return <Card
                            title={item.title}
                            subtitle={"€" + item.price}
                            imageUrl={item.images[0].url}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                            onPress={() => {
                                router.navigate({pathname: routes.LISTING_DETAILS, params: {item: JSON.stringify(item)}});
                            }}
                        />
                    }
                    }
                />
            </Screen>
        </>
    );
}

export default Index;
