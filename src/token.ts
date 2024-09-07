import { tokenModule, userModule } from "./database";

export class token {
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
        }).catch(() => {
            return null;
        });
    }
}