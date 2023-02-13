import { SHARE_PREFIXES } from '../enums/SHARE_PREFIXES';
/**
 *
 * @param prefix
 * @param params
 */
export default function createShareURL(prefix: SHARE_PREFIXES, params: { [key: string]: string | number | undefined | null }) {

    const encodedParams: string[] = Object.entries(params)
        .filter(([, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);

    return prefix + (encodedParams.length > 0 ? `?${encodedParams.join('&')}` : '');
}