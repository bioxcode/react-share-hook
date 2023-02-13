import { useCallback } from 'react';
import { SHARE_PREFIXES } from '../enums/SHARE_PREFIXES';
import createShareURL from '../utils/createShareURL';
import { isMobileDevice } from '../utils/isMobileDevice';
export const useReactShare = ({ url, message, facebookAppID }) => {
    const shareTwitter = useCallback(() => {
        const shareURL = createShareURL(SHARE_PREFIXES.TWITTER, { url: url, text: message });
        window.open(shareURL);
    }, [url]);
    const shareFacebook = useCallback(() => {
        const shareURL = createShareURL(SHARE_PREFIXES.FACEBOOK, { u: url, redirect_uri: url, app_id: facebookAppID });
        window.open(shareURL);
    }, [url]);
    const shareFacebookMessenger = useCallback(() => {
        const shareURL = createShareURL(SHARE_PREFIXES.FACEBOOK_MESSENGER, { link: url, app_id: facebookAppID });
        window.open(shareURL);
    }, [url]);
    const shareReddit = useCallback(() => {
        const shareURL = createShareURL(SHARE_PREFIXES.REDDIT, { url: url, title: message });
        window.open(shareURL);
    }, [url]);
    const shareWhatsApp = useCallback(() => {
        const shareURL = createShareURL(isMobileDevice() ? SHARE_PREFIXES.WHATSAPP_MOBILE : SHARE_PREFIXES.WHATSAPP_WEB, { url: url });
        window.open(shareURL);
    }, [url]);
    // 'https://www.facebook.com/dialog/send' +
    // objectToGetParams({
    //     link: url,
    //     redirect_uri: redirectUri || url,
    //     app_id: appId,
    //     to,
    // })
    // 'https://www.reddit.com/submit' +
    // objectToGetParams({
    //     url,
    //     title,
    // })
    //
    return {
        shareTwitter,
        shareFacebook,
        shareFacebookMessenger,
        shareReddit,
        shareWhatsApp,
        // Telegram: '',
        // LinkedIn: '',
        // Tumblr: '',
        // Pinterest: '',
        // VK: '',
        // Odnoklassniki: '',
        // MailRu: '',
        // LiveJournal: '',
        // Viber: '',
        // Workplace: '',
        // Line: '',
        // Weibo: '',
        // Pocket: '',
        // Instapaper: '',
        // Hatena: '',
        // email: '',
    };
};
