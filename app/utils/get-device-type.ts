export const getDeviceType = (userAgent: string): string => {
    if (/win|mac|linux/i.test(userAgent)) {
        return "desktop";
    }
    if (/android|iphone|ipad|ipod/i.test(userAgent)) {
        return "mobile";
    }

    return "unknown";
};
