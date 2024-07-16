import RegisterScreen from "@boneframework/native-components/screens/RegisterScreen";

export default function Register() {
    return (
        <RegisterScreen
            postRegisterUrl={'/user/check-your-email'}
        ></RegisterScreen>
    );
}
