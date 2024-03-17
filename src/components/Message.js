import { FacebookProvider, MessageUs } from "react-facebook";

function MessengerComponent() {
    return (
        <FacebookProvider appId="676855677817687">
            <MessageUs messengerAppId="myluu44" pageId="Psahy2g8noslh" />
        </FacebookProvider>
    );
}

export default MessengerComponent;