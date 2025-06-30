import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
export function isAxiosError(error) {
    return axios.isAxiosError(error);
}
export function isAxiosUnprocessableEntityError(error) {
    var _a;
    return isAxiosError(error) && ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === StatusCodes.UNPROCESSABLE_ENTITY;
}
// vd: 1000000 => 1.000.000
export function formatCurrency(currency) {
    return new Intl.NumberFormat('de-DE').format(currency);
}
// vd: 1000000 => 1,000,000
export function formatNumberToSocialStyle(value) {
    return new Intl.NumberFormat('en', {
        notation: 'compact',
        maximumFractionDigits: 1
    })
        .format(value)
        .replace('.', ',')
        .toLowerCase();
}
export const rateSale = (original, sale) => Math.round(((original - sale) / original) * 100) + '%';
const removeSpecialCharacter = (str) => 
// eslint-disable-next-line no-useless-escape
str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '');
export const generateNameId = ({ name, id }) => {
    return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i-${id}`;
};
export const getIdFromNameId = (nameId) => {
    const arr = nameId.split('-i-');
    return arr[arr.length - 1];
};
