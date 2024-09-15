export class utilities {
    static isValidNumber(n: string, allowNegative: boolean = false): boolean {
        const number = parseInt(n);
        return !isNaN(number) && (allowNegative || number >= 0) && number != -Infinity && number != Infinity;
    }
    static generateRandomString(length: number = 64): string {
        var result = "";
        for (let i = 0; i < length; i++) {
            result += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        return result;
    }
}