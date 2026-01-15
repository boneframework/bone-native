import RegisterScreen from "@boneframework/native-components/screens/RegisterScreen";

export default function Register() {
    return (
        <RegisterScreen
            backgroundSource={require('../../../assets/background.png')}
            logoSource={require('../../../assets/logo.png')}
            postRegisterUrl={'/user/check-your-email'}
        ></RegisterScreen>
    );
}
