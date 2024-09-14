import { tokenModule, userModule } from "./database";

export class token {
    public static async createToken(userId: number): Promise<string> {
        var token: string = "";
        for (let i = 0; i < 64; i++) {
            token += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        await tokenModule.create({
            userId,
            token,
        });
        return token;
    }
    public static async checkToken(token: string): Promise<number | null> {
        return await tokenModule.findOne({
            where: {
                token: token,
            },
        }).then(async (record) => {
            if (!record) {
                return null;
            }
            const userId = record.getDataValue("userId");
            await userModule.update({
                lastOnline: new Date(),
            }, {
                where: {
                    userId,
                },
            });
            return userId;
        });
    }
    public static async deleteToken(userId: number): Promise<void> {
        await tokenModule.destroy({
            where: {
                userId,
            },
        });
    }
}