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
    "people": [
        { "name": "陈洛炜", "id": 1, "gender": false, "roles": [], },
        { "name": "方怡恬", "id": 2, "gender": false, "roles": [], },
        { "name": "刘家宇", "id": 3, "gender": false, "roles": [], },
        { "name": "郁子非", "id": 4, "gender": false, "roles": [], },
        { "name": "包丞泽", "id": 5, "gender": true, "roles": [], },
        { "name": "陈泽聪", "id": 6, "gender": true, "roles": [], },
        { "name": "程嘉同", "id": 7, "gender": true, "roles": [], },
        { "name": "范苇林", "id": 8, "gender": true, "roles": [], },
        { "name": "冯智凡", "id": 9, "gender": true, "roles": [], },
        { "name": "高彦淳", "id": 10, "gender": true, "roles": [], },
        { "name": "何高颉", "id": 11, "gender": true, "roles": [], },
        { "name": "贺一晨", "id": 12, "gender": true, "roles": [], },
        { "name": "黄跃霖", "id": 13, "gender": true, "roles": [], },
        { "name": "蒋周运", "id": 14, "gender": true, "roles": [], },
        { "name": "金乐宸", "id": 15, "gender": true, "roles": [], },
        { "name": "金世祯", "id": 16, "gender": true, "roles": [], },
        { "name": "李博言", "id": 17, "gender": true, "roles": [], },
        { "name": "李鸣谦", "id": 18, "gender": true, "roles": [], },
        { "name": "李烨霖", "id": 19, "gender": true, "roles": [], },
        { "name": "刘乘烨", "id": 20, "gender": true, "roles": [], },
        { "name": "陆奕铭", "id": 21, "gender": true, "roles": [], },
        { "name": "罗明奕", "id": 22, "gender": true, "roles": [], },
        { "name": "闵熠宸", "id": 23, "gender": true, "roles": [], },
        { "name": "乔子腾", "id": 24, "gender": true, "roles": [], },
        { "name": "沈博扬", "id": 25, "gender": true, "roles": [], },
        { "name": "宋元昊", "id": 26, "gender": true, "roles": [], },
        { "name": "孙晨皓", "id": 27, "gender": true, "roles": [], },
        { "name": "孙鹤起", "id": 28, "gender": true, "roles": [], },
        { "name": "谈逸凡", "id": 29, "gender": true, "roles": [], },
        { "name": "王韬淳", "id": 30, "gender": true, "roles": [], },
        { "name": "王一川", "id": 31, "gender": true, "roles": [], },
        { "name": "叶彦哲", "id": 32, "gender": true, "roles": [], },
        { "name": "张嘉铖", "id": 33, "gender": true, "roles": [], },
        { "name": "张峻源", "id": 34, "gender": true, "roles": [], },
        { "name": "张泽欣", "id": 35, "gender": true, "roles": [], },
        { "name": "周子涵", "id": 36, "gender": true, "roles": [], },
        { "name": "朱函纬", "id": 37, "gender": true, "roles": [], },
        { "name": "朱修齐", "id": 38, "gender": true, "roles": [], },
        { "name": "朱泽坤", "id": 39, "gender": true, "roles": [], },
        { "name": "卓成杰", "id": 40, "gender": true, "roles": [], },
    ],
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse>,
) {
    console.log(Data);
    await database.roleModule.truncate();
    await database.studentModule.truncate();
    await database.userModule.truncate();
    await database.roleMemberModule.truncate();
    await database.privilegeRecordModule.truncate();

    await database.userModule.create({ username: "admin", password: "1!qQ091106", studentId: 9, permission: 255 });

    for (const _ of Data.roles) {
        await database.roleModule.create({ roleId: _.id, roleName: _.name });
    }
    
    for (const _ of Data.people) {
        await database.studentModule.create({ studentId: _.id, studentName: _.name, gender: _.gender });
        for (const __ of _.roles) {
            await database.roleMemberModule.create({ role: __, student: _.id });
            await database.privilegeRecordModule.create({ date: "20240829", student: _.id, io: true, type: "role", value: __, reason: "班主任评选" });
        }

    }
    API.success(res, "Imported successfully");
}