import { tokenModule } from "./database";

export class token {
    public static async checkToken(token: string): Promise<number | null> {
        return await tokenModule.findOne({
            where: {
                token: token,
            },
        }).then(record => {
            return record ? record.getDataValue("userId") : null;
        }).catch(() => {
            return null;
        });
    }
}