/**
 * Detects the user's OS and redirects to the appropriate app store.
 * Mac/iOS -> Apple App Store
 * Others (Windows/Android/etc) -> Google Play Store
 */
export const handleAppDownload = () => {
    if (typeof window === "undefined") return;

    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // Detection for Apple Ecosystem (Mac, iPhone, iPad, iPod)
    const isApple = /Macintosh|MacIntel|MacPPC|Mac68K|iPhone|iPad|iPod/.test(userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isApple) {
        window.open("https://apps.apple.com/in/app/acadally-learning-companion/id6447542429", "_blank");
    } else {
        // Default to Play Store for Android, Windows, and others
        window.open("https://play.google.com/store/apps/details?id=com.rap.acadally&hl=en_IN", "_blank");
    }
};
