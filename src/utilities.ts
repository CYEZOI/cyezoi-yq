export class utilities {
    static isValidNumber(n: string, allowNegative: boolean = false): boolean {
        const number = parseInt(n);
        return !isNaN(number) && (allowNegative || number >= 0) && number != -Infinity && number != Infinity;
    }
}