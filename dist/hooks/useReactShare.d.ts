type ReactSharePropsT = {
    url: string;
    message?: string;
    facebookAppID?: string;
};
export declare const useReactShare: ({ url, message, facebookAppID }: ReactSharePropsT) => {
    shareTwitter: () => void;
    shareFacebook: () => void;
    shareFacebookMessenger: () => void;
    shareReddit: () => void;
    shareWhatsApp: () => void;
};
export {};
