import React, {useEffect, useState} from 'react';

import {FlatList, StyleSheet, View} from "react-native";
import ListItemFlipswitch from '@boneframework/native-components/components/ListItemFlipswitch'
import Icon from '@boneframework/native-components/components/Icon'
import Screen from '@boneframework/native-components/components/Screen'
import colors from '@/config/colors'
import ListItemSeparator from "@boneframework/native-components/components/ListItemSeparator";
import routes from "@/config/routes";
import useAuth from "@boneframework/native-components/hooks/useAuth";
import useApi from "@boneframework/native-components/hooks/useApi";
import useStyle from "@boneframework/native-components/hooks/useStyle";
import userApi from '@boneframework/native-components/api/users'
import ActivityIndicator from "@boneframework/native-components/components/ActivityIndicator";

function Settings({ navigation }) {
    const [toggleEmail, setToggleEmail] = useState(true);
    const style = useStyle();
    const getSettingsApi = useApi(userApi.userSettings);
    const updateSettingsApi = useApi(userApi.updateUserSettings);
    const settings = {
        email: toggleEmail
    }

    useEffect(() => {
        const init = async () => {
            await getSettingsApi.request()
                .then(async result => {
                    if ('email' in result.data) {
                        setToggleEmail(result.data.email)
                    } else {
                        setToggleEmail(settings.email);
                        updateSettings();
                    }
                })

        };
        init();
    }, []);

    const styles = StyleSheet.create({
        screen: {
            backgroundColor: style.backgroundColor
        }
    });

    const updateSettings = () => {
        updateSettingsApi.request(settings);
    }

    return (
        <>
            <ActivityIndicator visible={updateSettingsApi.loading || getSettingsApi.loading}  type={'overlay'}/>
            <Screen style={styles.screen}>
                <ListItemFlipswitch
                    IconComponent={<Icon name={'email'} backgroundColor={colors.primary} />}
                    title={'Receive Email'}
                    onToggle={async () => {
                        setToggleEmail(!toggleEmail);
                        settings.email = !toggleEmail;
                        updateSettings();
                    } }
                    isOn={toggleEmail}
                />
            </Screen>
        </>
    );
}

export default Settings;
