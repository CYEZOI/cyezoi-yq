import { NextApiRequest, NextApiResponse } from "next";
import * as database from "@/database";
import { API, APIResponse } from "@/api";
import { permission } from "process";

const Data = {
    "roles": [
        { "id": 1, "name": "班长", },
        { "id": 2, "name": "副班长", },
        { "id": 3, "name": "团支书", },
    ],
    "groups": [
        { "id": 11, "name": "技术保障组", },
        { "id": 12, "name": "宣传策划组", },
        { "id": 13, "name": "环境卫士组", },
        { "id": 14, "name": "纪律守护组", },
        { "id": 15, "name": "生活管家组", },
        { "id": 16, "name": "运动领航组", },
        { "id": 17, "name": "心灵加油组", },
        { "id": 18, "name": "学习促进组", },
    ],
    "people": [
        { "name": "韩诗琪", "id": 1, "gender": false, "roles": [], "groups": [{ "id": 12, "leader": true, },], },
        { "name": "牛钰淇", "id": 2, "gender": false, "roles": [], "groups": [{ "id": 12, "leader": false, },], },
        { "name": "吴若歆", "id": 3, "gender": false, "roles": [], "groups": [{ "id": 12, "leader": false, },], },
        { "name": "艾泽信", "id": 4, "gender": true, "roles": [], "groups": [{ "id": 15, "leader": true, },], },
        { "name": "蔡弈凡", "id": 5, "gender": true, "roles": [], "groups": [{ "id": 17, "leader": false, },], },
        { "name": "陈朗宁", "id": 6, "gender": true, "roles": [2,], "groups": [{ "id": 14, "leader": true, },], },
        { "name": "丁子轩", "id": 7, "gender": true, "roles": [], "groups": [{ "id": 18, "leader": false, },], },
        { "name": "韩明砡", "id": 8, "gender": true, "roles": [], "groups": [{ "id": 13, "leader": true, },], },
        { "name": "侯宇彤", "id": 9, "gender": true, "roles": [], "groups": [{ "id": 16, "leader": false, },], },
        { "name": "胡东昊", "id": 10, "gender": true, "roles": [], "groups": [{ "id": 15, "leader": false, },], },
        { "name": "惠雨辰", "id": 11, "gender": true, "roles": [], "groups": [{ "id": 14, "leader": false, },], },
        { "name": "姜子米", "id": 12, "gender": true, "roles": [], "groups": [], },
        { "name": "乐思源", "id": 13, "gender": true, "roles": [], "groups": [{ "id": 18, "leader": false, },], },
        { "name": "李昊童", "id": 14, "gender": true, "roles": [3,], "groups": [{ "id": 12, "leader": false, },], },
        { "name": "李思汗", "id": 15, "gender": true, "roles": [], "groups": [{ "id": 15, "leader": false, },], },
        { "name": "李彦灿", "id": 16, "gender": true, "roles": [2,], "groups": [{ "id": 18, "leader": true, },], },
        { "name": "林天辰", "id": 17, "gender": true, "roles": [], "groups": [{ "id": 11, "leader": false, },], },
        { "name": "刘云徽", "id": 18, "gender": true, "roles": [], "groups": [{ "id": 16, "leader": false, },], },
        { "name": "刘子毅", "id": 19, "gender": true, "roles": [], "groups": [{ "id": 16, "leader": false, },], },
        { "name": "陆一凡", "id": 20, "gender": true, "roles": [], "groups": [{ "id": 14, "leader": false, },], },
        { "name": "罗沐原", "id": 21, "gender": true, "roles": [], "groups": [{ "id": 11, "leader": false, },], },
        { "name": "罗启宸", "id": 22, "gender": true, "roles": [], "groups": [{ "id": 15, "leader": false, },], },
        { "name": "庞钧语", "id": 23, "gender": true, "roles": [], "groups": [{ "id": 14, "leader": false, },], },
        { "name": "钱骏", "id": 24, "gender": true, "roles": [], "groups": [{ "id": 17, "leader": false, },], },
        { "name": "王劭", "id": 25, "gender": true, "roles": [], "groups": [{ "id": 16, "leader": true, },], },
        { "name": "王翊临", "id": 26, "gender": true, "roles": [], "groups": [], },
        { "name": "吴悦舟", "id": 27, "gender": true, "roles": [], "groups": [{ "id": 18, "leader": false, },], },
        { "name": "徐宥一", "id": 28, "gender": true, "roles": [], "groups": [{ "id": 11, "leader": false, },], },
        { "name": "许育嘉", "id": 29, "gender": true, "roles": [], "groups": [{ "id": 18, "leader": false, },], },
        { "name": "燕子何", "id": 30, "gender": true, "roles": [], "groups": [{ "id": 13, "leader": false, },], },
        { "name": "杨其乐", "id": 31, "gender": true, "roles": [], "groups": [{ "id": 16, "leader": false, },], },
        { "name": "杨亦凡", "id": 32, "gender": true, "roles": [], "groups": [{ "id": 13, "leader": false, },], },
        { "name": "应昊廷", "id": 33, "gender": true, "roles": [], "groups": [{ "id": 13, "leader": false, },], },
        { "name": "张宸麟", "id": 34, "gender": true, "roles": [], "groups": [{ "id": 11, "leader": false, },], },
        { "name": "张珈梁", "id": 35, "gender": true, "roles": [1,], "groups": [], },
        { "name": "章一凡", "id": 36, "gender": true, "roles": [], "groups": [{ "id": 17, "leader": true, },], },
        { "name": "周逸宸", "id": 37, "gender": true, "roles": [], "groups": [{ "id": 16, "leader": false, },], },
        { "name": "朱菁轩", "id": 38, "gender": true, "roles": [], "groups": [{ "id": 17, "leader": false, },], },
    ],
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse>,
) {
    await database.roleModule.truncate();
    await database.groupModule.truncate();
    await database.studentModule.truncate();
    await database.userModule.truncate();
    await database.roleMemberModule.truncate();
    await database.groupMemberModule.truncate();
    await database.privilegeRecordModule.truncate();

    await database.userModule.create({ username: "langningchen", password: "1!2@3#qQwWeE", studentId: 6, permission: 5 });

    for (const _ of Data.roles) {
        await database.roleModule.create({ roleId: _.id, roleName: _.name });
    }
    for (const _ of Data.groups) {
        await database.groupModule.create({ groupId: _.id, groupName: _.name });
    }
    for (const _ of Data.people) {
        await database.studentModule.create({ studentId: _.id, studentName: _.name, gender: _.gender });
        for (const __ of _.roles) {
            await database.roleMemberModule.create({ role: __, student: _.id });
            await database.privilegeRecordModule.create({ date: "20240829", student: _.id, io: true, type: "role", value: __, reason: "班主任评选" });
        }
        for (const __ of _.groups) {
            await database.groupMemberModule.create({ group: __.id, student: _.id, leader: __.leader });
            await database.privilegeRecordModule.create({ date: "20240829", student: _.id, io: true, type: "group", value: __.id, reason: "选择加入组" });
        }
    }
    API.success(res, "Imported successfully");
}