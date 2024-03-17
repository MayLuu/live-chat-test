import { useTranslation } from "react-i18next";

function MyGreetingComponent() {
    const { t, i18n } = useTranslation();
    return <div>{t('Welcome to React')}</div>;
}

export default MyGreetingComponent;