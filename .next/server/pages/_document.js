"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/i18n.ts":
/*!*********************!*\
  !*** ./src/i18n.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__]);\n([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst resources = {\n    en: {\n        translation: {\n            \"404\": \"404 Not Found\",\n            \"404Description\": \"The page you are looking for is not found.\",\n            \"addButton\": \"Add\",\n            \"amount\": \"Amount\",\n            \"brand\": \"CYEZOI-YQ\",\n            \"colon\": \": \",\n            \"comma\": \", \",\n            \"databaseError\": \"Database error\",\n            \"delete\": \"Delete\",\n            \"detail\": \"Detail\",\n            \"error\": \"Error\",\n            \"errorDescription\": \"We are sorry, but an error has occurred. Please try again later. If the problem persists, please contact us. Thank you.\",\n            \"female\": \"Female\",\n            \"finance\": \"Finance\",\n            \"footer\": \"Powered by CYEZOI\",\n            \"gain\": \"Gain\",\n            \"gender\": \"Gender\",\n            \"group\": \"Group\",\n            \"home\": \"Home\",\n            \"id\": \"ID\",\n            \"language\": \"Language\",\n            \"login\": \"Login\",\n            \"logout\": \"Logout\",\n            \"lose\": \"Lose\",\n            \"male\": \"Male\",\n            \"max1000\": \"Maximum 1000\",\n            \"maxLen16\": \"Maximum length 16\",\n            \"maxLen64\": \"Maximum length 64\",\n            \"min1000\": \"Minimum -1000\",\n            \"minLen4\": \"Minimum length 4\",\n            \"minLen8\": \"Minimum length 8\",\n            \"money\": \"Money\",\n            \"operation\": \"Operation\",\n            \"password\": \"Password\",\n            \"privilegeRecord\": \"Privilege Record\",\n            \"reason\": \"Reason\",\n            \"required\": \"Required\",\n            \"requireNumber\": \"Number required\",\n            \"requireString\": \"String required\",\n            \"requireStrongPassword\": \"Require at least one uppercase letter, one lowercase letter, one number and one special character.\",\n            \"resource\": \"Resource\",\n            \"RMB\": \"RMB\",\n            \"role\": \"Role\",\n            \"student\": \"Student\",\n            \"studentName\": \"Name\",\n            \"studentNumber\": \"Student Number\",\n            \"time\": \"Time\",\n            \"username\": \"Username\",\n            \"welcomeDescription\": \"Welcome to CYEZOI-YQ, the official website of the YQ class of Cao Yang No.2 Middle School.\"\n        }\n    },\n    zh: {\n        translation: {\n            \"404\": \"404 未找到\",\n            \"404Description\": \"您要查找的页面未找到。\",\n            \"addButton\": \"添加\",\n            \"amount\": \"金额\",\n            \"brand\": \"曹杨二中永强创新班\",\n            \"colon\": \"：\",\n            \"comma\": \"，\",\n            \"databaseError\": \"数据库错误\",\n            \"delete\": \"删除\",\n            \"detail\": \"详情\",\n            \"error\": \"错误\",\n            \"errorDescription\": \"很抱歉，发生了错误。请稍后再试。如果问题仍然存在，请与我们联系。谢谢。\",\n            \"female\": \"女\",\n            \"finance\": \"财务\",\n            \"footer\": \"由曹杨二中信奥开发组提供技术支持\",\n            \"gain\": \"获得\",\n            \"gender\": \"性别\",\n            \"group\": \"组\",\n            \"home\": \"首页\",\n            \"id\": \"编号\",\n            \"language\": \"语言\",\n            \"login\": \"登录\",\n            \"logout\": \"登出\",\n            \"lose\": \"失去\",\n            \"male\": \"男\",\n            \"max1000\": \"最大值 1000\",\n            \"maxLen16\": \"最大长度 16\",\n            \"maxLen64\": \"最大长度 64\",\n            \"min1000\": \"最小值 -1000\",\n            \"minLen4\": \"最小长度 4\",\n            \"minLen8\": \"最小长度 8\",\n            \"money\": \"金额\",\n            \"operation\": \"操作\",\n            \"password\": \"密码\",\n            \"privilegeRecord\": \"陶片放逐\",\n            \"reason\": \"原因\",\n            \"required\": \"必填\",\n            \"requireNumber\": \"需要填写数字\",\n            \"requireString\": \"需要填写字符串\",\n            \"requireStrongPassword\": \"需要至少一个大写字母、一个小写字母、一个数字和一个特殊字符。\",\n            \"resource\": \"资源\",\n            \"RMB\": \"元\",\n            \"role\": \"角色\",\n            \"student\": \"学生\",\n            \"studentName\": \"姓名\",\n            \"studentNumber\": \"学号\",\n            \"time\": \"时间\",\n            \"username\": \"用户名\",\n            \"welcomeDescription\": \"欢迎来到曹杨二中永强创新班的官方网站。\"\n        }\n    }\n};\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({\n    resources,\n    lng: \"en\",\n    fallbackLng: \"en\",\n    interpolation: {\n        escapeValue: false\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaTE4bi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkI7QUFDc0I7QUFFakQsTUFBTUUsWUFBWTtJQUNoQkMsSUFBSTtRQUNGQyxhQUFhO1lBQ1gsT0FBTztZQUNQLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsVUFBVTtZQUNWLFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULGlCQUFpQjtZQUNqQixVQUFVO1lBQ1YsVUFBVTtZQUNWLFNBQVM7WUFDVCxvQkFBb0I7WUFDcEIsVUFBVTtZQUNWLFdBQVc7WUFDWCxVQUFVO1lBQ1YsUUFBUTtZQUNSLFVBQVU7WUFDVixTQUFTO1lBQ1QsUUFBUTtZQUNSLE1BQU07WUFDTixZQUFZO1lBQ1osU0FBUztZQUNULFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUTtZQUNSLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7WUFDWCxXQUFXO1lBQ1gsV0FBVztZQUNYLFNBQVM7WUFDVCxhQUFhO1lBQ2IsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixVQUFVO1lBQ1YsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixPQUFPO1lBQ1AsUUFBUTtZQUNSLFdBQVc7WUFDWCxlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLFFBQVE7WUFDUixZQUFZO1lBQ1osc0JBQXNCO1FBQ3hCO0lBQ0Y7SUFDQUMsSUFBSTtRQUNGRCxhQUFhO1lBQ1gsT0FBTztZQUNQLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsVUFBVTtZQUNWLFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULGlCQUFpQjtZQUNqQixVQUFVO1lBQ1YsVUFBVTtZQUNWLFNBQVM7WUFDVCxvQkFBb0I7WUFDcEIsVUFBVTtZQUNWLFdBQVc7WUFDWCxVQUFVO1lBQ1YsUUFBUTtZQUNSLFVBQVU7WUFDVixTQUFTO1lBQ1QsUUFBUTtZQUNSLE1BQU07WUFDTixZQUFZO1lBQ1osU0FBUztZQUNULFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUTtZQUNSLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7WUFDWCxXQUFXO1lBQ1gsV0FBVztZQUNYLFNBQVM7WUFDVCxhQUFhO1lBQ2IsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixVQUFVO1lBQ1YsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixPQUFPO1lBQ1AsUUFBUTtZQUNSLFdBQVc7WUFDWCxlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLFFBQVE7WUFDUixZQUFZO1lBQ1osc0JBQXNCO1FBQ3hCO0lBQ0Y7QUFDRjtBQUVBSixtREFDTSxDQUFDQywyREFBZ0JBLEVBQ3BCTSxJQUFJLENBQUM7SUFDSkw7SUFDQU0sS0FBSztJQUNMQyxhQUFhO0lBQ2JDLGVBQWU7UUFDYkMsYUFBYTtJQUNmO0FBQ0Y7QUFFRixpRUFBZVgsK0NBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeWV6b2kteXEvLi9zcmMvaTE4bi50cz9iY2Q5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpMThuIGZyb20gXCJpMThuZXh0XCI7XG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcblxuY29uc3QgcmVzb3VyY2VzID0ge1xuICBlbjoge1xuICAgIHRyYW5zbGF0aW9uOiB7XG4gICAgICBcIjQwNFwiOiBcIjQwNCBOb3QgRm91bmRcIixcbiAgICAgIFwiNDA0RGVzY3JpcHRpb25cIjogXCJUaGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGlzIG5vdCBmb3VuZC5cIixcbiAgICAgIFwiYWRkQnV0dG9uXCI6IFwiQWRkXCIsXG4gICAgICBcImFtb3VudFwiOiBcIkFtb3VudFwiLFxuICAgICAgXCJicmFuZFwiOiBcIkNZRVpPSS1ZUVwiLFxuICAgICAgXCJjb2xvblwiOiBcIjogXCIsXG4gICAgICBcImNvbW1hXCI6IFwiLCBcIixcbiAgICAgIFwiZGF0YWJhc2VFcnJvclwiOiBcIkRhdGFiYXNlIGVycm9yXCIsXG4gICAgICBcImRlbGV0ZVwiOiBcIkRlbGV0ZVwiLFxuICAgICAgXCJkZXRhaWxcIjogXCJEZXRhaWxcIixcbiAgICAgIFwiZXJyb3JcIjogXCJFcnJvclwiLFxuICAgICAgXCJlcnJvckRlc2NyaXB0aW9uXCI6IFwiV2UgYXJlIHNvcnJ5LCBidXQgYW4gZXJyb3IgaGFzIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLiBJZiB0aGUgcHJvYmxlbSBwZXJzaXN0cywgcGxlYXNlIGNvbnRhY3QgdXMuIFRoYW5rIHlvdS5cIixcbiAgICAgIFwiZmVtYWxlXCI6IFwiRmVtYWxlXCIsXG4gICAgICBcImZpbmFuY2VcIjogXCJGaW5hbmNlXCIsXG4gICAgICBcImZvb3RlclwiOiBcIlBvd2VyZWQgYnkgQ1lFWk9JXCIsXG4gICAgICBcImdhaW5cIjogXCJHYWluXCIsXG4gICAgICBcImdlbmRlclwiOiBcIkdlbmRlclwiLFxuICAgICAgXCJncm91cFwiOiBcIkdyb3VwXCIsXG4gICAgICBcImhvbWVcIjogXCJIb21lXCIsXG4gICAgICBcImlkXCI6IFwiSURcIixcbiAgICAgIFwibGFuZ3VhZ2VcIjogXCJMYW5ndWFnZVwiLFxuICAgICAgXCJsb2dpblwiOiBcIkxvZ2luXCIsXG4gICAgICBcImxvZ291dFwiOiBcIkxvZ291dFwiLFxuICAgICAgXCJsb3NlXCI6IFwiTG9zZVwiLFxuICAgICAgXCJtYWxlXCI6IFwiTWFsZVwiLFxuICAgICAgXCJtYXgxMDAwXCI6IFwiTWF4aW11bSAxMDAwXCIsXG4gICAgICBcIm1heExlbjE2XCI6IFwiTWF4aW11bSBsZW5ndGggMTZcIixcbiAgICAgIFwibWF4TGVuNjRcIjogXCJNYXhpbXVtIGxlbmd0aCA2NFwiLFxuICAgICAgXCJtaW4xMDAwXCI6IFwiTWluaW11bSAtMTAwMFwiLFxuICAgICAgXCJtaW5MZW40XCI6IFwiTWluaW11bSBsZW5ndGggNFwiLFxuICAgICAgXCJtaW5MZW44XCI6IFwiTWluaW11bSBsZW5ndGggOFwiLFxuICAgICAgXCJtb25leVwiOiBcIk1vbmV5XCIsXG4gICAgICBcIm9wZXJhdGlvblwiOiBcIk9wZXJhdGlvblwiLFxuICAgICAgXCJwYXNzd29yZFwiOiBcIlBhc3N3b3JkXCIsXG4gICAgICBcInByaXZpbGVnZVJlY29yZFwiOiBcIlByaXZpbGVnZSBSZWNvcmRcIixcbiAgICAgIFwicmVhc29uXCI6IFwiUmVhc29uXCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFwiUmVxdWlyZWRcIixcbiAgICAgIFwicmVxdWlyZU51bWJlclwiOiBcIk51bWJlciByZXF1aXJlZFwiLFxuICAgICAgXCJyZXF1aXJlU3RyaW5nXCI6IFwiU3RyaW5nIHJlcXVpcmVkXCIsXG4gICAgICBcInJlcXVpcmVTdHJvbmdQYXNzd29yZFwiOiBcIlJlcXVpcmUgYXQgbGVhc3Qgb25lIHVwcGVyY2FzZSBsZXR0ZXIsIG9uZSBsb3dlcmNhc2UgbGV0dGVyLCBvbmUgbnVtYmVyIGFuZCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXIuXCIsXG4gICAgICBcInJlc291cmNlXCI6IFwiUmVzb3VyY2VcIixcbiAgICAgIFwiUk1CXCI6IFwiUk1CXCIsXG4gICAgICBcInJvbGVcIjogXCJSb2xlXCIsXG4gICAgICBcInN0dWRlbnRcIjogXCJTdHVkZW50XCIsXG4gICAgICBcInN0dWRlbnROYW1lXCI6IFwiTmFtZVwiLFxuICAgICAgXCJzdHVkZW50TnVtYmVyXCI6IFwiU3R1ZGVudCBOdW1iZXJcIixcbiAgICAgIFwidGltZVwiOiBcIlRpbWVcIixcbiAgICAgIFwidXNlcm5hbWVcIjogXCJVc2VybmFtZVwiLFxuICAgICAgXCJ3ZWxjb21lRGVzY3JpcHRpb25cIjogXCJXZWxjb21lIHRvIENZRVpPSS1ZUSwgdGhlIG9mZmljaWFsIHdlYnNpdGUgb2YgdGhlIFlRIGNsYXNzIG9mIENhbyBZYW5nIE5vLjIgTWlkZGxlIFNjaG9vbC5cIixcbiAgICB9LFxuICB9LFxuICB6aDoge1xuICAgIHRyYW5zbGF0aW9uOiB7XG4gICAgICBcIjQwNFwiOiBcIjQwNCDmnKrmib7liLBcIixcbiAgICAgIFwiNDA0RGVzY3JpcHRpb25cIjogXCLmgqjopoHmn6Xmib7nmoTpobXpnaLmnKrmib7liLDjgIJcIixcbiAgICAgIFwiYWRkQnV0dG9uXCI6IFwi5re75YqgXCIsXG4gICAgICBcImFtb3VudFwiOiBcIumHkeminVwiLFxuICAgICAgXCJicmFuZFwiOiBcIuabueadqOS6jOS4reawuOW8uuWIm+aWsOePrVwiLFxuICAgICAgXCJjb2xvblwiOiBcIu+8mlwiLFxuICAgICAgXCJjb21tYVwiOiBcIu+8jFwiLFxuICAgICAgXCJkYXRhYmFzZUVycm9yXCI6IFwi5pWw5o2u5bqT6ZSZ6K+vXCIsXG4gICAgICBcImRlbGV0ZVwiOiBcIuWIoOmZpFwiLFxuICAgICAgXCJkZXRhaWxcIjogXCLor6bmg4VcIixcbiAgICAgIFwiZXJyb3JcIjogXCLplJnor69cIixcbiAgICAgIFwiZXJyb3JEZXNjcmlwdGlvblwiOiBcIuW+iOaKseatie+8jOWPkeeUn+S6humUmeivr+OAguivt+eojeWQjuWGjeivleOAguWmguaenOmXrumimOS7jeeEtuWtmOWcqO+8jOivt+S4juaIkeS7rOiBlOezu+OAguiwouiwouOAglwiLFxuICAgICAgXCJmZW1hbGVcIjogXCLlpbNcIixcbiAgICAgIFwiZmluYW5jZVwiOiBcIui0ouWKoVwiLFxuICAgICAgXCJmb290ZXJcIjogXCLnlLHmm7nmnajkuozkuK3kv6HlpaXlvIDlj5Hnu4Tmj5DkvpvmioDmnK/mlK/mjIFcIixcbiAgICAgIFwiZ2FpblwiOiBcIuiOt+W+l1wiLFxuICAgICAgXCJnZW5kZXJcIjogXCLmgKfliKtcIixcbiAgICAgIFwiZ3JvdXBcIjogXCLnu4RcIixcbiAgICAgIFwiaG9tZVwiOiBcIummlumhtVwiLFxuICAgICAgXCJpZFwiOiBcIue8luWPt1wiLFxuICAgICAgXCJsYW5ndWFnZVwiOiBcIuivreiogFwiLFxuICAgICAgXCJsb2dpblwiOiBcIueZu+W9lVwiLFxuICAgICAgXCJsb2dvdXRcIjogXCLnmbvlh7pcIixcbiAgICAgIFwibG9zZVwiOiBcIuWkseWOu1wiLFxuICAgICAgXCJtYWxlXCI6IFwi55S3XCIsXG4gICAgICBcIm1heDEwMDBcIjogXCLmnIDlpKflgLwgMTAwMFwiLFxuICAgICAgXCJtYXhMZW4xNlwiOiBcIuacgOWkp+mVv+W6piAxNlwiLFxuICAgICAgXCJtYXhMZW42NFwiOiBcIuacgOWkp+mVv+W6piA2NFwiLFxuICAgICAgXCJtaW4xMDAwXCI6IFwi5pyA5bCP5YC8IC0xMDAwXCIsXG4gICAgICBcIm1pbkxlbjRcIjogXCLmnIDlsI/plb/luqYgNFwiLFxuICAgICAgXCJtaW5MZW44XCI6IFwi5pyA5bCP6ZW/5bqmIDhcIixcbiAgICAgIFwibW9uZXlcIjogXCLph5Hpop1cIixcbiAgICAgIFwib3BlcmF0aW9uXCI6IFwi5pON5L2cXCIsXG4gICAgICBcInBhc3N3b3JkXCI6IFwi5a+G56CBXCIsXG4gICAgICBcInByaXZpbGVnZVJlY29yZFwiOiBcIumZtueJh+aUvumAkFwiLFxuICAgICAgXCJyZWFzb25cIjogXCLljp/lm6BcIixcbiAgICAgIFwicmVxdWlyZWRcIjogXCLlv4XloatcIixcbiAgICAgIFwicmVxdWlyZU51bWJlclwiOiBcIumcgOimgeWhq+WGmeaVsOWtl1wiLFxuICAgICAgXCJyZXF1aXJlU3RyaW5nXCI6IFwi6ZyA6KaB5aGr5YaZ5a2X56ym5LiyXCIsXG4gICAgICBcInJlcXVpcmVTdHJvbmdQYXNzd29yZFwiOiBcIumcgOimgeiHs+WwkeS4gOS4quWkp+WGmeWtl+avjeOAgeS4gOS4quWwj+WGmeWtl+avjeOAgeS4gOS4quaVsOWtl+WSjOS4gOS4queJueauiuWtl+espuOAglwiLFxuICAgICAgXCJyZXNvdXJjZVwiOiBcIui1hOa6kFwiLFxuICAgICAgXCJSTUJcIjogXCLlhYNcIixcbiAgICAgIFwicm9sZVwiOiBcIuinkuiJslwiLFxuICAgICAgXCJzdHVkZW50XCI6IFwi5a2m55SfXCIsXG4gICAgICBcInN0dWRlbnROYW1lXCI6IFwi5aeT5ZCNXCIsXG4gICAgICBcInN0dWRlbnROdW1iZXJcIjogXCLlrablj7dcIixcbiAgICAgIFwidGltZVwiOiBcIuaXtumXtFwiLFxuICAgICAgXCJ1c2VybmFtZVwiOiBcIueUqOaIt+WQjVwiLFxuICAgICAgXCJ3ZWxjb21lRGVzY3JpcHRpb25cIjogXCLmrKLov47mnaXliLDmm7nmnajkuozkuK3msLjlvLrliJvmlrDnj63nmoTlrpjmlrnnvZHnq5njgIJcIixcbiAgICB9LFxuICB9LFxufTtcblxuaTE4blxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpXG4gIC5pbml0KHtcbiAgICByZXNvdXJjZXMsXG4gICAgbG5nOiBcImVuXCIsXG4gICAgZmFsbGJhY2tMbmc6IFwiZW5cIixcbiAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICBlc2NhcGVWYWx1ZTogZmFsc2VcbiAgICB9XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBpMThuOyJdLCJuYW1lcyI6WyJpMThuIiwiaW5pdFJlYWN0STE4bmV4dCIsInJlc291cmNlcyIsImVuIiwidHJhbnNsYXRpb24iLCJ6aCIsInVzZSIsImluaXQiLCJsbmciLCJmYWxsYmFja0xuZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/i18n.ts\n");

/***/ }),

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/i18n */ \"./src/i18n.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_i18n__WEBPACK_IMPORTED_MODULE_2__]);\n_i18n__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Document() {\n    const { t } = _i18n__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"/home/langningchen/cyezoi-yq/src/pages/_document.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"/home/langningchen/cyezoi-yq/src/pages/_document.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"/home/langningchen/cyezoi-yq/src/pages/_document.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/langningchen/cyezoi-yq/src/pages/_document.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/langningchen/cyezoi-yq/src/pages/_document.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ25DO0FBR1gsU0FBU0s7SUFDdEIsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0YsNkNBQUlBO0lBQ2xCLHFCQUNFLDhEQUFDSiwrQ0FBSUE7UUFBQ08sTUFBSzs7MEJBQ1QsOERBQUNOLCtDQUFJQTs7Ozs7MEJBQ0wsOERBQUNPOztrQ0FDQyw4REFBQ04sK0NBQUlBOzs7OztrQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQiIsInNvdXJjZXMiOlsid2VicGFjazovL2N5ZXpvaS15cS8uL3NyYy9wYWdlcy9fZG9jdW1lbnQudHN4PzE4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5pbXBvcnQgaTE4biBmcm9tIFwiQC9pMThuXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2N1bWVudCgpIHtcbiAgY29uc3QgeyB0IH0gPSBpMThuO1xuICByZXR1cm4gKFxuICAgIDxIdG1sIGxhbmc9XCJlblwiPlxuICAgICAgPEhlYWQgLz5cbiAgICAgIDxib2R5PlxuICAgICAgICA8TWFpbiAvPlxuICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvSHRtbCA+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImkxOG4iLCJEb2N1bWVudCIsInQiLCJsYW5nIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("react-i18next");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/@swc+helpers@0.5.5"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();