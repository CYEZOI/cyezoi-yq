"use strict";exports.id=840,exports.ids=[840],exports.modules={6130:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4570:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{b:()=>l});var a=r(9169),n=r(2021),o=e([n]);n=(o.then?(await o)():o)[0];class l{static async request_url(e,t,r,s){let o=new URLSearchParams(r);return o.append("lang",localStorage.getItem("language")||"en"),o.append("token",localStorage.getItem("token")||""),t+=(t.includes("?")?"&":"?")+o.toString(),fetch("/api/"+t,{method:e,headers:{Accept:"application/json","Content-Type":"application/json"}}).then(e=>e.json()).then(e=>(e.success?(s.showSuccess&&a.X.emit("newAlert",{message:e.message,variant:"success"}),s.success&&s.success(e.result)):(s.hideFailure||a.X.emit("newAlert",{message:e.message,variant:"danger"}),s.failure&&s.failure(e.result)),e.result)).catch(e=>{s.hideError||a.X.emit("newAlert",{message:(0,n.t)("networkError"),variant:"danger"}),s.error&&s.error(e)})}static async request_body(e,t,r,s){let o={params:r.params||{},lang:localStorage.getItem("language")||"en",token:localStorage.getItem("token")||""};fetch("/api/"+t,{method:e,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)}).then(e=>e.json()).then(e=>{e.success?(s.showSuccess&&a.X.emit("newAlert",{message:e.message,variant:"success"}),s.success&&s.success(e.result)):(s.hideFailure||a.X.emit("newAlert",{message:e.message,variant:"danger"}),s.failure&&s.failure(e.result))}).catch(e=>{s.hideError||a.X.emit("newAlert",{message:(0,n.t)("networkError"),variant:"danger"}),s.error&&s.error(e)})}static async Get(e,t={},r={}){return l.request_url("GET",e,t,r)}static async Post(e,t={},r={}){return l.request_body("POST",e,t,r)}static async Put(e,t={},r={}){return l.request_body("PUT",e,t,r)}static async Delete(e,t={},r={}){return l.request_url("DELETE",e,t,r)}static async SWRGet(e,t={}){return new Promise((r,s)=>{l.Get(e,t,{success:e=>r(e),failure:e=>s(e),error:e=>s(e)})})}static success(e,t="",r={}){e.writableEnded||(e.status(200).json({success:!0,message:t,result:r}),e.end())}static failure(e,t=""){e.writableEnded||(e.status(200).json({success:!1,message:t,result:{}}),e.end())}}s()}catch(e){s(e)}})},4229:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Bw:()=>m,CI:()=>u,Qw:()=>g,VK:()=>y,gk:()=>o,h5:()=>p,io:()=>d,mt:()=>i,sJ:()=>c,yr:()=>l});var a=r(8210),n=e([a]);let o=new(a=(n.then?(await n)():n)[0]).Sequelize({dialect:"sqlite",storage:"db/yq.sqlite"}),l=o.define("finance",{financeId:{type:a.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},date:{type:a.DataTypes.DATEONLY,allowNull:!1},money:{type:a.DataTypes.INTEGER,allowNull:!1},detail:{type:a.DataTypes.STRING,allowNull:!0}}),u=o.define("student",{studentId:{type:a.DataTypes.INTEGER,primaryKey:!0},studentName:{type:a.DataTypes.STRING,allowNull:!1},gender:{type:a.DataTypes.BOOLEAN,allowNull:!1}}),c=o.define("group",{groupId:{type:a.DataTypes.INTEGER,primaryKey:!0},groupName:{type:a.DataTypes.STRING,allowNull:!1}}),i=o.define("groupMember",{group:{type:a.DataTypes.INTEGER},student:{type:a.DataTypes.INTEGER},leader:{type:a.DataTypes.BOOLEAN,allowNull:!1}}),d=o.define("role",{roleId:{type:a.DataTypes.INTEGER,primaryKey:!0},roleName:{type:a.DataTypes.STRING,allowNull:!1}}),p=o.define("roleMember",{role:{type:a.DataTypes.INTEGER},student:{type:a.DataTypes.INTEGER}}),m=o.define("privilegeRecord",{privilegeRecordId:{type:a.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},date:{type:a.DataTypes.DATEONLY,allowNull:!1},student:{type:a.DataTypes.INTEGER,allowNull:!1},io:{type:a.DataTypes.BOOLEAN,allowNull:!1},type:{type:a.DataTypes.STRING,allowNull:!1},value:{type:a.DataTypes.INTEGER,allowNull:!1},reason:{type:a.DataTypes.STRING,allowNull:!0}}),y=o.define("user",{userId:{type:a.DataTypes.INTEGER,primaryKey:!0,autoIncrement:!0},username:{type:a.DataTypes.STRING,allowNull:!1,unique:!0},password:{type:a.DataTypes.STRING,allowNull:!1},studentId:{type:a.DataTypes.INTEGER,allowNull:!0},permission:{type:a.DataTypes.INTEGER,allowNull:!1,defaultValue:0},lastOnline:{type:a.DataTypes.DATE,allowNull:!0}}),g=o.define("token",{token:{type:a.DataTypes.STRING,primaryKey:!0},userId:{type:a.DataTypes.INTEGER,allowNull:!1}});s()}catch(e){s(e)}})},5076:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>l});var a=r(2021),n=r(7987),o=e([a,n]);[a,n]=o.then?(await o)():o,a.default.use(n.initReactI18next).init({resources:{en:{translation:{404:"404 Not Found","404Description":"The page you are looking for is not found.",action:"Action",addButton:"Add",allGroups:"All groups",amount:"Amount",back:"Back",balance:"Balance",brand:"CYEZOI-YQ",changePassword:"Change password",colon:": ",comma:", ",confirmPassword:"Confirm password",create:"Create",createUser:"Create user",dark:"Dark",databaseError:"Database error",date:"Date",delete:"Delete",detail:"Detail",disabled:"Disabled",enabled:"Enabled",enter:"Enter",error:"Error",errorDescription:"We are sorry, but an error has occurred. Please try again later. If the problem persists, please contact us. Thank you.",expenditure:"Expenditure",feedback:"Feedback",female:"Female",finance:"Finance",financeCreateSuccess:"Create finance record successfully",financeDeleteSuccess:"Delete finance record successfully",financeGetSuccess:"Get finance records successfully",financeStaticsGetSuccess:"Get finance statistics successfully",financeUpdateSuccess:"Update finance record successfully",financeWrite:"Finance write",footer:"Powered by CYEZOI, open source on ",gain:"Gain",gender:"Biological gender",group:"Group",groupGetSuccess:"Get group records successfully",groupId:"Group ID",groupMemberCreateSuccess:"Create group member record successfully",groupMemberGetSuccess:"Get group member records successfully",groupName:"Group Name",home:"Home",id:"ID",income:"Income",invalidMethod:"Invalid request method",invalidParameter:"Invalid parameter",language:"Language",lastOnline:"Last Online",light:"Light",listUser:"List user",login:"Login",loginSuccess:"Login successfully",logout:"Logout",lose:"Lose",male:"Male",max1000:"Maximum 1000",max38:"Maximum 38",maxLen16:"Maximum length 16",maxLen64:"Maximum length 64",min0:"Minimum 0",min1:"Minimum 1",minLen4:"Minimum length 4",minLen8:"Minimum length 8",mode:"Mode",money:"Money",networkError:"Network Error",operation:"Operation",password:"Password",passwordNotMatch:"Password not match",permission:"Permission",permissionDenied:"Permission denied",personal:"Personal",privilegeRecord:"Privilege Record",privilegeRecordGetSuccess:"Get privilege record successfully",reason:"Reason",required:"Required",requireDate:"Date required",requireNumber:"Number required",requireString:"String required",requireStrongPassword:"Require at least one uppercase letter, one lowercase letter, one number and one special character.",resource:"Resource",RMB:"RMB",role:"Role",roleGetSuccess:"Get role records successfully",roleId:"Role ID",roleMemberCreateSuccess:"Create role member record successfully",roleMemberDeleteSuccess:"Delete role member record successfully",roleMemberGetSuccess:"Get role member records successfully",roleName:"Role Name",status:"Status",student:"Student",studentGetSuccess:"Get student records successfully",studentId:"Student Number",studentName:"Name",time:"Time",unauthorized:"Unauthorized",update:"Update",updateOtherPassword:"Update other password",updatePermission:"Update permission",user:"User",userCreateSuccess:"Create user successfully",userDeleteSuccess:"Delete user successfully",userExists:"User exists",userGetSuccess:"Get user successfully",username:"Username",userNotFound:"User not found",userUpdateSuccess:"Update user successfully",welcomeDescription:"Welcome to CYEZOI-YQ, the official website of the YQ class of Cao Yang No.2 Middle School. We are sorry to inform you that the resource content needs to provide an email to the developer and log in to the Microsoft account to view due to copyright."}},zh:{translation:{404:"404 未找到","404Description":"您要查找的页面未找到。",action:"操作",addButton:"添加",allGroups:"所有组",amount:"金额",back:"返回",balance:"余额",brand:"曹杨二中永强创新班",changePassword:"修改密码",colon:"：",comma:"，",confirmPassword:"确认密码",create:"创建",createUser:"创建用户",dark:"黑暗",databaseError:"数据库错误",date:"日期",delete:"删除",detail:"详情",disabled:"禁用",enabled:"启用",enter:"查看",error:"错误",errorDescription:"很抱歉，发生了错误。请稍后再试。如果问题仍然存在，请与我们联系。谢谢。",expenditure:"支出",feedback:"反馈",female:"女",finance:"财务",financeCreateSuccess:"创建财务记录成功",financeDeleteSuccess:"删除财务记录成功",financeGetSuccess:"获取财务记录成功",financeStaticsGetSuccess:"获取财务统计成功",financeUpdateSuccess:"更新财务记录成功",financeWrite:"财务写入",footer:"由曹杨二中信奥开发组提供技术支持，开源于 ",gain:"获得",gender:"生理性别",group:"组",groupGetSuccess:"获取组记录成功",groupId:"组编号",groupMemberCreateSuccess:"创建组成员记录成功",groupMemberGetSuccess:"获取组成员记录成功",groupName:"组名",home:"首页",id:"编号",income:"收入",invalidMethod:"无效的请求方法",invalidParameter:"参数错误",language:"语言",lastOnline:"最后在线",light:"明亮",listUser:"列出用户",login:"登录",loginSuccess:"登录成功",logout:"登出",lose:"失去",male:"男",max1000:"最大值 1000",max38:"最大值 38",maxLen16:"最大长度 16",maxLen64:"最大长度 64",min0:"最小值 0",min1:"最小值 1",minLen4:"最小长度 4",minLen8:"最小长度 8",mode:"模式",money:"金额",networkError:"网络请求错误",operation:"操作",password:"密码",passwordNotMatch:"密码不匹配",permission:"权限",permissionDenied:"权限不足",personal:"个人",privilegeRecord:"陶片放逐",privilegeRecordGetSuccess:"获取陶片放逐记录成功",reason:"原因",required:"必填",requireDate:"需要填写日期",requireNumber:"需要填写数字",requireString:"需要填写字符串",requireStrongPassword:"需要至少一个大写字母、一个小写字母、一个数字和一个特殊字符。",resource:"资源",RMB:"元",role:"角色",roleGetSuccess:"获取角色记录成功",roleId:"角色编号",roleMemberCreateSuccess:"创建角色成员记录成功",roleMemberDeleteSuccess:"删除角色成员记录成功",roleMemberGetSuccess:"获取角色成员记录成功",roleName:"角色名",status:"状态",student:"学生",studentGetSuccess:"获取学生记录成功",studentId:"学号",studentName:"姓名",time:"时间",unauthorized:"未授权",update:"更新",updateOtherPassword:"修改他人密码",updatePermission:"更新权限",user:"用户",userCreateSuccess:"创建用户成功",userDeleteSuccess:"删除用户成功",userExists:"用户已存在",userGetSuccess:"获取用户成功",username:"用户名",userNotFound:"用户未找到",userUpdateSuccess:"更新用户成功",welcomeDescription:"欢迎来到曹杨二中永强创新班的官方网站。很抱歉地通知您，资源内容因为版权问题，需要联系开发者提供邮箱并登录微软账号才能查看。"}}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});let l=a.default;s()}catch(e){s(e)}})},9169:(e,t,r)=>{r.d(t,{X:()=>a});class s{listen(e,t){this.pipes[e]=t}emit(e,t=null){this.pipes[e]&&this.pipes[e](t)}constructor(){this.pipes={}}}let a=new s},7933:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},808:(e,t,r)=>{e.exports=r(145)}};