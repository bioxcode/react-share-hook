/**
 *
 * @param prefix
 * @param params
 */
export default function createShareURL(prefix, params) {
    const encodedParams = Object.entries(params)
        .filter(([, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    return prefix + (encodedParams.length > 0 ? `?${encodedParams.join('&')}` : '');
}
