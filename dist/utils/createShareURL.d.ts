import { SHARE_PREFIXES } from '../enums/SHARE_PREFIXES';
/**
 *
 * @param prefix
 * @param params
 */
export default function createShareURL(prefix: SHARE_PREFIXES, params: {
    [key: string]: string | number | undefined | null;
}): string;
