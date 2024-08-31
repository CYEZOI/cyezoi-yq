import * as database from "./_database";

const Data = {
    "roles": [{
        "id": 1,
        "name": "班长",
    }, {
        "id": 2,
        "name": "副班长",
    }, {
        "id": 3,
        "name": "团支书",
    }],
    "groups": [{
        "id": 10,
        "name": "宣传策划组"
    }, {
        "id": 11,
        "name": "生活"
    }, {
        "id": 12,
        "name": "心灵加油组"
    }, {
        "id": 13,
        "name": "纪律守护组"
    }, {
        "id": 14,
        "name": "学习促进组"
    }, {
        "id": 15,
        "name": "环境卫生组"
    }, {
        "id": 16,
        "name": "体育"
    }, {
        "id": 17,
        "name": "技术保障组"
    }],
    "people": [
        { "name": "韩诗琪", "id": 1, "gender": false, "roles": [], "groups": [{ "id": 10, "leader": true }] },
        { "name": "牛钰淇", "id": 2, "gender": false, "roles": [], "groups": [{ "id": 10, "leader": false }] },
        { "name": "吴若歆", "id": 3, "gender": false, "roles": [], "groups": [{ "id": 10, "leader": false }] },
        { "name": "艾泽信", "id": 4, "gender": true, "roles": [], "groups": [{ "id": 11, "leader": true }] },
        { "name": "蔡弈凡", "id": 5, "gender": true, "roles": [], "groups": [{ "id": 12, "leader": false }] },
        { "name": "陈朗宁", "id": 6, "gender": true, "roles": [2], "groups": [{ "id": 13, "leader": true }] },
        { "name": "丁子轩", "id": 7, "gender": true, "roles": [], "groups": [{ "id": 14, "leader": false }] },
        { "name": "韩明砡", "id": 8, "gender": true, "roles": [], "groups": [{ "id": 15, "leader": true }] },
        { "name": "侯宇彤", "id": 9, "gender": true, "roles": [], "groups": [{ "id": 16, "leader": false }] },
        { "name": "胡东昊", "id": 10, "gender": true, "roles": [], "groups": [{ "id": 11, "leader": false }] },
        { "name": "惠雨辰", "id": 11, "gender": true, "roles": [], "groups": [{ "id": 13, "leader": false }] },
        { "name": "姜子米", "id": 12, "gender": true, "roles": [], "groups": [] },
        { "name": "乐思源", "id": 13, "gender": true, "roles": [], "groups": [{ "id": 14, "leader": false }] },
        { "name": "李昊童", "id": 14, "gender": true, "roles": [3], "groups": [{ "id": 10, "leader": false }] },
        { "name": "李思汗", "id": 15, "gender": true, "roles": [], "groups": [{ "id": 11, "leader": false }] },
        { "name": "李彦灿", "id": 16, "gender": true, "roles": [2], "groups": [{ "id": 14, "leader": true }] },
        { "name": "林天辰", "id": 17, "gender": true, "roles": [], "groups": [{ "id": 17, "leader": false }] },
        { "name": "刘云徽", "id": 18, "gender": true, "roles": [], "groups": [{ "id": 16, "leader": false }] },
        { "name": "刘子毅", "id": 19, "gender": true, "roles": [], "groups": [{ "id": 16, "leader": false }] },
        { "name": "陆一凡", "id": 20, "gender": true, "roles": [], "groups": [{ "id": 13, "leader": false }] },
        { "name": "罗沐原", "id": 21, "gender": true, "roles": [], "groups": [{ "id": 17, "leader": false }] },
        { "name": "罗启宸", "id": 22, "gender": true, "roles": [], "groups": [{ "id": 11, "leader": false }] },
        { "name": "庞钧语", "id": 23, "gender": true, "roles": [], "groups": [{ "id": 13, "leader": false }] },
        { "name": "钱骏", "id": 24, "gender": true, "roles": [], "groups": [{ "id": 12, "leader": false }] },
        { "name": "王劭", "id": 25, "gender": true, "roles": [], "groups": [{ "id": 16, "leader": true }] },
        { "name": "王翊临", "id": 26, "gender": true, "roles": [], "groups": [] },
        { "name": "吴悦舟", "id": 27, "gender": true, "roles": [], "groups": [{ "id": 14, "leader": false }] },
        { "name": "徐宥一", "id": 28, "gender": true, "roles": [], "groups": [{ "id": 17, "leader": false }] },
        { "name": "许育嘉", "id": 29, "gender": true, "roles": [], "groups": [{ "id": 14, "leader": false }] },
        { "name": "燕子何", "id": 30, "gender": true, "roles": [], "groups": [{ "id": 15, "leader": false }] },
        { "name": "杨其乐", "id": 31, "gender": true, "roles": [], "groups": [{ "id": 16, "leader": false }] },
        { "name": "杨亦凡", "id": 32, "gender": true, "roles": [], "groups": [{ "id": 15, "leader": false }] },
        { "name": "应昊廷", "id": 33, "gender": true, "roles": [], "groups": [{ "id": 15, "leader": false }] },
        { "name": "张宸麟", "id": 34, "gender": true, "roles": [], "groups": [{ "id": 17, "leader": false }] },
        { "name": "张珈梁", "id": 35, "gender": true, "roles": [1], "groups": [] },
        { "name": "章一凡", "id": 36, "gender": true, "roles": [], "groups": [{ "id": 12, "leader": true }] },
        { "name": "周逸宸", "id": 37, "gender": true, "roles": [], "groups": [{ "id": 16, "leader": false }] },
        { "name": "朱菁轩", "id": 38, "gender": true, "roles": [], "groups": [{ "id": 12, "leader": false }] },
    ]
};

export default async function handler(req, res) {
    for (const role of Data.roles) {
        await database.roleModule.create({ id: role.id, name: role.name });
    }
    for (const group of Data.groups) {
        await database.groupModule.create({ id: group.id, name: group.name });
    }
    for (const person of Data.people) {
        await database.studentModule.create({ id: person.id, name: person.name, gender: person.gender });
        for (const role of person.roles) {
            await database.roleMemberModule.create({ role: role, student: person.id });
            await database.privilegeRecordModule.create({ date: "20240829", student: person.id, io: true, type: "role", value: role, reason: "班主任评选" });
        }
        for (const group of person.groups) {
            await database.groupMemberModule.create({ group: group.id, student: person.id, leader: group.leader });
            await database.privilegeRecordModule.create({ date: "20240829", student: person.id, io: true, type: "group", value: group.id, reason: "选择加入组" });
        }
    }
    res.status(200).json({ message: "Imported successfully" });
}