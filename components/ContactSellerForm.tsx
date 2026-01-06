import React from "react";
import {Alert, Keyboard} from "react-native";
// import * as Notifications from "expo-notifications";
import * as Yup from "yup";
import Form from "@boneframework/native-components/components/forms/Form";
import FormField from "@boneframework/native-components/components/forms/FormField";
import SubmitButton from "@boneframework/native-components/components/forms/SubmitButton";
import notificationsApi from "@boneframework/native-components/api/notifications";

// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: true,
//         shouldSetBadge: true,
//     }),
// });

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(2).label('Message seller')
});

function ContactSellerForm({listing}) {
    const handleSubmit = async ({message}, { resetForm }) => {
        Alert.alert('notifications no longer work in expo go, use a custom build')

        // Keyboard.dismiss();
        // const result = await notificationsApi.send(message, [listing.id]);
        //
        // if (!result.ok) {
        //     console.error('Error', result);
        //     return Alert.alert('Error', 'Could not send message to seller.');
        // }
        //
        // resetForm();

        // Notifications.scheduleNotificationAsync({
        //     content: {
        //         title: "Boom! New notification 😎",
        //         body: message,
        //         data: { data: 'goes here' },
        //     },
        //     trigger: { seconds: 2 },
        // });
    }

    return (<Form
        initialValues={{
            message: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
    >
        <FormField
            name="message"
            maxLength={255}
            placeholder="Message"
        />
        <SubmitButton color="primary" title="Contact Seller" />
    </Form>)
}

export default ContactSellerForm;
