"use strict";(()=>{var e={};e.id=482,e.ids=[482],e.modules={20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},22021:e=>{e.exports=import("i18next")},58210:e=>{e.exports=import("sequelize")},56130:(e,a)=>{Object.defineProperty(a,"l",{enumerable:!0,get:function(){return function e(a,r){return r in a?a[r]:"then"in a&&"function"==typeof a.then?a.then(a=>e(a,r)):"function"==typeof a&&"default"===r?a:void 0}}})},56409:(e,a,r)=>{r.a(e,async(e,t)=>{try{r.r(a),r.d(a,{config:()=>u,default:()=>o,routeModule:()=>p});var s=r(90808),n=r(27933),l=r(56130),d=r(9029),i=e([d]);d=(i.then?(await i)():i)[0];let o=(0,l.l)(d,"default"),u=(0,l.l)(d,"config"),p=new s.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/database/import",pathname:"/api/database/import",bundlePath:"",filename:""},userland:d});t()}catch(e){t(e)}})},64570:(e,a,r)=>{r.a(e,async(e,t)=>{try{r.d(a,{b:()=>d});var s=r(69169),n=r(22021),l=e([n]);n=(l.then?(await l)():l)[0];class d{static async request_url(e,a,r,t){let l=new URLSearchParams(r);return l.append("lang",localStorage.getItem("language")||"en"),l.append("token",localStorage.getItem("token")||""),a+=(a.includes("?")?"&":"?")+l.toString(),fetch("/api/"+a,{method:e,headers:{Accept:"application/json","Content-Type":"application/json"},redirect:"manual"}).then(e=>e.json()).then(e=>(e.success?(t.showSuccess&&s.X.emit("newAlert",{message:e.message,variant:"success"}),t.success&&t.success(e.result)):(t.hideFailure||s.X.emit("newAlert",{message:e.message,variant:"danger"}),t.failure&&t.failure(e.result)),e.result)).catch(e=>{t.hideError||s.X.emit("newAlert",{message:(0,n.t)("networkError"),variant:"danger"}),t.error&&t.error(e)})}static async request_body(e,a,r,t){let l={params:r.params||{},lang:localStorage.getItem("language")||"en",token:localStorage.getItem("token")||""};fetch("/api/"+a,{method:e,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(l),redirect:"manual"}).then(e=>e.json()).then(e=>{e.success?(t.showSuccess&&s.X.emit("newAlert",{message:e.message,variant:"success"}),t.success&&t.success(e.result)):(t.hideFailure||s.X.emit("newAlert",{message:e.message,variant:"danger"}),t.failure&&t.failure(e.result))}).catch(e=>{t.hideError||s.X.emit("newAlert",{message:(0,n.t)("networkError"),variant:"danger"}),t.error&&t.error(e)})}static async Get(e,a={},r={}){return d.request_url("GET",e,a,r)}static async Post(e,a={},r={}){return d.request_body("POST",e,a,r)}static async Put(e,a={},r={}){return d.request_body("PUT",e,a,r)}static async Delete(e,a={},r={}){return d.request_url("DELETE",e,a,r)}static async SWRGet(e,a={}){return new Promise((r,t)=>{d.Get(e,a,{success:e=>r(e),failure:e=>t(e),error:e=>t(e)})})}static success(e,a="",r={}){e.writableEnded||(e.status(200).json({success:!0,message:a,result:r}),e.end())}static failure(e,a=""){e.writableEnded||(e.status(200).json({success:!1,message:a,result:{}}),e.end())}}t()}catch(e){t(e)}})},74229:(e,a,r)=>{r.a(e,async(e,t)=>{try{r.d(a,{Bw:()=>c,CI:()=>i,Qw:()=>y,VK:()=>m,gk:()=>l,h5:()=>g,io:()=>p,jm:()=>T,mt:()=>u,sJ:()=>o,yr:()=>d});var s=r(58210),n=e([s]);let l=new(s=(n.then?(await n)():n)[0]).Sequelize({dialect:"sqlite",storage:"db/yq.sqlite"}),d=l.define("finance",{financeId:{type:s.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},date:{type:s.DataTypes.DATEONLY,allowNull:!1},money:{type:s.DataTypes.INTEGER,allowNull:!1},detail:{type:s.DataTypes.STRING,allowNull:!1},image:{type:s.DataTypes.STRING}}),i=l.define("student",{studentId:{type:s.DataTypes.INTEGER,primaryKey:!0},studentName:{type:s.DataTypes.STRING,allowNull:!1},gender:{type:s.DataTypes.BOOLEAN,allowNull:!1},psychologicalGender:{type:s.DataTypes.STRING,allowNull:!0}}),o=l.define("group",{groupId:{type:s.DataTypes.INTEGER,primaryKey:!0},groupName:{type:s.DataTypes.STRING,allowNull:!1}}),u=l.define("groupMember",{group:{type:s.DataTypes.INTEGER},student:{type:s.DataTypes.INTEGER},leader:{type:s.DataTypes.BOOLEAN,allowNull:!1}}),p=l.define("role",{roleId:{type:s.DataTypes.INTEGER,primaryKey:!0},roleName:{type:s.DataTypes.STRING,allowNull:!1}}),g=l.define("roleMember",{role:{type:s.DataTypes.INTEGER},student:{type:s.DataTypes.INTEGER}}),c=l.define("privilegeRecord",{privilegeRecordId:{type:s.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},date:{type:s.DataTypes.DATEONLY,allowNull:!1},student:{type:s.DataTypes.INTEGER,allowNull:!1},io:{type:s.DataTypes.BOOLEAN,allowNull:!1},type:{type:s.DataTypes.STRING,allowNull:!1},value:{type:s.DataTypes.INTEGER,allowNull:!1},reason:{type:s.DataTypes.STRING,allowNull:!0}}),m=l.define("user",{userId:{type:s.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},username:{type:s.DataTypes.STRING,allowNull:!1,unique:!0},password:{type:s.DataTypes.STRING,allowNull:!1},studentId:{type:s.DataTypes.INTEGER,allowNull:!0},permission:{type:s.DataTypes.INTEGER,allowNull:!1,defaultValue:0},lastOnline:{type:s.DataTypes.DATE,allowNull:!0}}),y=l.define("token",{token:{type:s.DataTypes.STRING,primaryKey:!0},userId:{type:s.DataTypes.INTEGER,allowNull:!1}}),T=l.define("image",{imageId:{type:s.DataTypes.STRING,primaryKey:!0},userId:{type:s.DataTypes.INTEGER,allowNull:!1},image:{type:s.DataTypes.STRING,allowNull:!1}});t()}catch(e){t(e)}})},9029:(e,a,r)=>{r.a(e,async(e,t)=>{try{r.r(a),r.d(a,{default:()=>d});var s=r(74229),n=r(64570),l=e([s,n]);[s,n]=l.then?(await l)():l;let i={roles:[{id:1,name:"班长"},{id:2,name:"副班长"},{id:3,name:"团支书"}],groups:[{id:11,name:"技术保障组"},{id:12,name:"宣传策划组"},{id:13,name:"环境卫士组"},{id:14,name:"纪律守护组"},{id:15,name:"生活管家组"},{id:16,name:"运动领航组"},{id:17,name:"心灵加油组"},{id:18,name:"学习促进组"}],people:[{name:"韩诗琪",id:1,gender:!1,roles:[],groups:[{id:12,leader:!0}]},{name:"牛钰淇",id:2,gender:!1,roles:[],groups:[{id:12,leader:!1}]},{name:"吴若歆",id:3,gender:!1,roles:[],groups:[{id:12,leader:!1}]},{name:"艾泽信",id:4,gender:!0,roles:[],groups:[{id:15,leader:!0}]},{name:"蔡弈凡",id:5,gender:!0,roles:[],groups:[{id:17,leader:!1}]},{name:"陈朗宁",id:6,gender:!0,roles:[2],groups:[{id:14,leader:!0}]},{name:"丁子轩",id:7,gender:!0,roles:[],groups:[{id:18,leader:!1}]},{name:"韩明砡",id:8,gender:!0,roles:[],groups:[{id:13,leader:!0}]},{name:"侯宇彤",id:9,gender:!0,roles:[],groups:[{id:16,leader:!1}]},{name:"胡东昊",id:10,gender:!0,roles:[],groups:[{id:15,leader:!1}]},{name:"惠雨辰",id:11,gender:!0,roles:[],groups:[{id:14,leader:!1}]},{name:"姜子米",id:12,gender:!0,roles:[],groups:[]},{name:"乐思源",id:13,gender:!0,roles:[],groups:[{id:18,leader:!1}]},{name:"李昊童",id:14,gender:!0,roles:[3],groups:[{id:12,leader:!1}]},{name:"李思汗",id:15,gender:!0,roles:[],groups:[{id:15,leader:!1}]},{name:"李彦灿",id:16,gender:!0,roles:[2],groups:[{id:18,leader:!0}]},{name:"林天辰",id:17,gender:!0,roles:[],groups:[{id:11,leader:!1}]},{name:"刘云徽",id:18,gender:!0,roles:[],groups:[{id:16,leader:!1}]},{name:"刘子毅",id:19,gender:!0,roles:[],groups:[{id:16,leader:!1}]},{name:"陆一凡",id:20,gender:!0,roles:[],groups:[{id:14,leader:!1}]},{name:"罗沐原",id:21,gender:!0,roles:[],groups:[{id:11,leader:!1}]},{name:"罗启宸",id:22,gender:!0,roles:[],groups:[{id:15,leader:!1}]},{name:"庞钧语",id:23,gender:!0,roles:[],groups:[{id:14,leader:!1}]},{name:"钱骏",id:24,gender:!0,roles:[],groups:[{id:17,leader:!1}]},{name:"王劭",id:25,gender:!0,roles:[],groups:[{id:16,leader:!0}]},{name:"王翊临",id:26,gender:!0,roles:[],groups:[]},{name:"吴悦舟",id:27,gender:!0,roles:[],groups:[{id:18,leader:!1}]},{name:"徐宥一",id:28,gender:!0,roles:[],groups:[{id:11,leader:!1}]},{name:"许育嘉",id:29,gender:!0,roles:[],groups:[{id:18,leader:!1}]},{name:"燕子何",id:30,gender:!0,roles:[],groups:[{id:13,leader:!1}]},{name:"杨其乐",id:31,gender:!0,roles:[],groups:[{id:16,leader:!1}]},{name:"杨亦凡",id:32,gender:!0,roles:[],groups:[{id:13,leader:!1}]},{name:"应昊廷",id:33,gender:!0,roles:[],groups:[{id:13,leader:!1}]},{name:"张宸麟",id:34,gender:!0,roles:[],groups:[{id:11,leader:!1}]},{name:"张珈梁",id:35,gender:!0,roles:[1],groups:[]},{name:"章一凡",id:36,gender:!0,roles:[],groups:[{id:17,leader:!0}]},{name:"周逸宸",id:37,gender:!0,roles:[],groups:[{id:16,leader:!1}]},{name:"朱菁轩",id:38,gender:!0,roles:[],groups:[{id:17,leader:!1}]}]};async function d(e,a){for(let e of(await s.io.truncate(),await s.sJ.truncate(),await s.CI.truncate(),await s.VK.truncate(),await s.h5.truncate(),await s.mt.truncate(),await s.Bw.truncate(),await s.VK.create({username:"langningchen",password:"1!2@3#qQwWeE",studentId:6,permission:255}),i.roles))await s.io.create({roleId:e.id,roleName:e.name});for(let e of i.groups)await s.sJ.create({groupId:e.id,groupName:e.name});for(let e of i.people){for(let a of(await s.CI.create({studentId:e.id,studentName:e.name,gender:e.gender}),e.roles))await s.h5.create({role:a,student:e.id}),await s.Bw.create({date:"20240829",student:e.id,io:!0,type:"role",value:a,reason:"班主任评选"});for(let a of e.groups)await s.mt.create({group:a.id,student:e.id,leader:a.leader}),await s.Bw.create({date:"20240829",student:e.id,io:!0,type:"group",value:a.id,reason:"选择加入组"})}n.b.success(a,"Imported successfully")}t()}catch(e){t(e)}})},69169:(e,a,r)=>{r.d(a,{X:()=>s});class t{listen(e,a){this.pipes[e]=a}emit(e,a=null){this.pipes[e]&&this.pipes[e](a)}constructor(){this.pipes={}}}let s=new t},27933:(e,a)=>{var r;Object.defineProperty(a,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},90808:(e,a,r)=>{e.exports=r(20145)}};var a=require("../../../webpack-api-runtime.js");a.C(e);var r=a(a.s=56409);module.exports=r})();