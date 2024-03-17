import { CustomChat, FacebookProvider } from "react-facebook";

function MessengerComponent() {
    return (
        <FacebookProvider appId="676855677817687" chatSupport>
            <CustomChat pageId="116357744815579" minimized={false} />
        </FacebookProvider>
    );
}

export default MessengerComponent;