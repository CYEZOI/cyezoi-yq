import { userModule } from "./database";

export class permission {
    public static PERMISSION_LOGIN = 1;
    public static PERMISSION_FINANCE_WRITE = 2;
    public static PERMISSION_CREATE_USER = 3;

    private permissionNumber: number;
    constructor(permissionNumber: number) { this.permissionNumber = permissionNumber; }
    public static async getPermission(userId: number): Promise<permission> {
        let permissionNumber = 0;
        await userModule.findOne({
            where: {
                userId,
            },
        }).then(user => {
            if (user) {
                permissionNumber = user.getDataValue("permission");
            }
        }).catch(() => {
            permissionNumber = 0;
        });
        return new permission(permissionNumber);
    }
    public checkPermission(permission: number): boolean { return (this.permissionNumber & (1 << permission)) != 0; }
    public addPermission(permission: number): void { this.permissionNumber |= 1 << permission; }
    public removePermission(permission: number): void { this.permissionNumber &= ~(1 << permission); }
}