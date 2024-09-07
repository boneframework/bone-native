import React from 'react';
import ActivateUserScreen from "@boneframework/native-components/screens/ActivateUserScreen";

import settings from "@/config/settings";
import routes from "@/config/routes";

function Activate(props) {
    return(
        <ActivateUserScreen settings={settings} loginRedirect={routes.HOME}></ActivateUserScreen>
    );
}

export default Activate;
