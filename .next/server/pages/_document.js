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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__]);\n([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst resources = {\n    en: {\n        translation: {\n            \"404\": \"404 Not Found\",\n            \"404Description\": \"The page you are looking for is not found.\",\n            \"addButton\": \"Add\",\n            \"amount\": \"Amount\",\n            \"brand\": \"CYEZOI-YQ\",\n            \"colon\": \": \",\n            \"comma\": \", \",\n            \"databaseError\": \"Database error\",\n            \"delete\": \"Delete\",\n            \"detail\": \"Detail\",\n            \"error\": \"Error\",\n            \"errorDescription\": \"We are sorry, but an error has occurred. Please try again later. If the problem persists, please contact us. Thank you.\",\n            \"female\": \"Female\",\n            \"finance\": \"Finance\",\n            \"footer\": \"Powered by CYEZOI\",\n            \"gain\": \"Gain\",\n            \"gender\": \"Gender\",\n            \"group\": \"Group\",\n            \"home\": \"Home\",\n            \"id\": \"ID\",\n            \"language\": \"Language\",\n            \"login\": \"Login\",\n            \"logout\": \"Logout\",\n            \"lose\": \"Lose\",\n            \"male\": \"Male\",\n            \"max1000\": \"Maximum 1000\",\n            \"maxLen16\": \"Maximum length 16\",\n            \"maxLen64\": \"Maximum length 64\",\n            \"min1000\": \"Minimum -1000\",\n            \"minLen4\": \"Minimum length 4\",\n            \"minLen8\": \"Minimum length 8\",\n            \"money\": \"Money\",\n            \"operation\": \"Operation\",\n            \"password\": \"Password\",\n            \"privilegeRecord\": \"Privilege Record\",\n            \"reason\": \"Reason\",\n            \"required\": \"Required\",\n            \"requireNumber\": \"Number required\",\n            \"requireString\": \"String required\",\n            \"requireStrongPassword\": \"Require at least one uppercase letter, one lowercase letter, one number and one special character.\",\n            \"resource\": \"Resource\",\n            \"RMB\": \"RMB\",\n            \"role\": \"Role\",\n            \"student\": \"Student\",\n            \"studentName\": \"Name\",\n            \"studentNumber\": \"Student Number\",\n            \"time\": \"Time\",\n            \"username\": \"Username\",\n            \"userNotFound\": \"User not found\",\n            \"welcomeDescription\": \"Welcome to CYEZOI-YQ, the official website of the YQ class of Cao Yang No.2 Middle School.\"\n        }\n    },\n    zh: {\n        translation: {\n            \"404\": \"404 未找到\",\n            \"404Description\": \"您要查找的页面未找到。\",\n            \"addButton\": \"添加\",\n            \"amount\": \"金额\",\n            \"brand\": \"曹杨二中永强创新班\",\n            \"colon\": \"：\",\n            \"comma\": \"，\",\n            \"databaseError\": \"数据库错误\",\n            \"delete\": \"删除\",\n            \"detail\": \"详情\",\n            \"error\": \"错误\",\n            \"errorDescription\": \"很抱歉，发生了错误。请稍后再试。如果问题仍然存在，请与我们联系。谢谢。\",\n            \"female\": \"女\",\n            \"finance\": \"财务\",\n            \"footer\": \"由曹杨二中信奥开发组提供技术支持\",\n            \"gain\": \"获得\",\n            \"gender\": \"性别\",\n            \"group\": \"组\",\n            \"home\": \"首页\",\n            \"id\": \"编号\",\n            \"language\": \"语言\",\n            \"login\": \"登录\",\n            \"logout\": \"登出\",\n            \"lose\": \"失去\",\n            \"male\": \"男\",\n            \"max1000\": \"最大值 1000\",\n            \"maxLen16\": \"最大长度 16\",\n            \"maxLen64\": \"最大长度 64\",\n            \"min1000\": \"最小值 -1000\",\n            \"minLen4\": \"最小长度 4\",\n            \"minLen8\": \"最小长度 8\",\n            \"money\": \"金额\",\n            \"operation\": \"操作\",\n            \"password\": \"密码\",\n            \"privilegeRecord\": \"陶片放逐\",\n            \"reason\": \"原因\",\n            \"required\": \"必填\",\n            \"requireNumber\": \"需要填写数字\",\n            \"requireString\": \"需要填写字符串\",\n            \"requireStrongPassword\": \"需要至少一个大写字母、一个小写字母、一个数字和一个特殊字符。\",\n            \"resource\": \"资源\",\n            \"RMB\": \"元\",\n            \"role\": \"角色\",\n            \"student\": \"学生\",\n            \"studentName\": \"姓名\",\n            \"studentNumber\": \"学号\",\n            \"time\": \"时间\",\n            \"username\": \"用户名\",\n            \"userNotFound\": \"用户未找到\",\n            \"welcomeDescription\": \"欢迎来到曹杨二中永强创新班的官方网站。\"\n        }\n    }\n};\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({\n    resources,\n    lng: \"en\",\n    fallbackLng: \"en\",\n    interpolation: {\n        escapeValue: false\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaTE4bi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkI7QUFDc0I7QUFFakQsTUFBTUUsWUFBWTtJQUNoQkMsSUFBSTtRQUNGQyxhQUFhO1lBQ1gsT0FBTztZQUNQLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsVUFBVTtZQUNWLFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULGlCQUFpQjtZQUNqQixVQUFVO1lBQ1YsVUFBVTtZQUNWLFNBQVM7WUFDVCxvQkFBb0I7WUFDcEIsVUFBVTtZQUNWLFdBQVc7WUFDWCxVQUFVO1lBQ1YsUUFBUTtZQUNSLFVBQVU7WUFDVixTQUFTO1lBQ1QsUUFBUTtZQUNSLE1BQU07WUFDTixZQUFZO1lBQ1osU0FBUztZQUNULFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUTtZQUNSLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7WUFDWCxXQUFXO1lBQ1gsV0FBVztZQUNYLFNBQVM7WUFDVCxhQUFhO1lBQ2IsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixVQUFVO1lBQ1YsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixPQUFPO1lBQ1AsUUFBUTtZQUNSLFdBQVc7WUFDWCxlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLFFBQVE7WUFDUixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLHNCQUFzQjtRQUN4QjtJQUNGO0lBQ0FDLElBQUk7UUFDRkQsYUFBYTtZQUNYLE9BQU87WUFDUCxrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLFVBQVU7WUFDVixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxpQkFBaUI7WUFDakIsVUFBVTtZQUNWLFVBQVU7WUFDVixTQUFTO1lBQ1Qsb0JBQW9CO1lBQ3BCLFVBQVU7WUFDVixXQUFXO1lBQ1gsVUFBVTtZQUNWLFFBQVE7WUFDUixVQUFVO1lBQ1YsU0FBUztZQUNULFFBQVE7WUFDUixNQUFNO1lBQ04sWUFBWTtZQUNaLFNBQVM7WUFDVCxVQUFVO1lBQ1YsUUFBUTtZQUNSLFFBQVE7WUFDUixXQUFXO1lBQ1gsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsV0FBVztZQUNYLFdBQVc7WUFDWCxTQUFTO1lBQ1QsYUFBYTtZQUNiLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsVUFBVTtZQUNWLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLHlCQUF5QjtZQUN6QixZQUFZO1lBQ1osT0FBTztZQUNQLFFBQVE7WUFDUixXQUFXO1lBQ1gsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixRQUFRO1lBQ1IsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixzQkFBc0I7UUFDeEI7SUFDRjtBQUNGO0FBRUFKLG1EQUNNLENBQUNDLDJEQUFnQkEsRUFDcEJNLElBQUksQ0FBQztJQUNKTDtJQUNBTSxLQUFLO0lBQ0xDLGFBQWE7SUFDYkMsZUFBZTtRQUNiQyxhQUFhO0lBQ2Y7QUFDRjtBQUVGLGlFQUFlWCwrQ0FBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N5ZXpvaS15cS8uL3NyYy9pMThuLnRzP2JjZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG4gZnJvbSBcImkxOG5leHRcIjtcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuXG5jb25zdCByZXNvdXJjZXMgPSB7XG4gIGVuOiB7XG4gICAgdHJhbnNsYXRpb246IHtcbiAgICAgIFwiNDA0XCI6IFwiNDA0IE5vdCBGb3VuZFwiLFxuICAgICAgXCI0MDREZXNjcmlwdGlvblwiOiBcIlRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgaXMgbm90IGZvdW5kLlwiLFxuICAgICAgXCJhZGRCdXR0b25cIjogXCJBZGRcIixcbiAgICAgIFwiYW1vdW50XCI6IFwiQW1vdW50XCIsXG4gICAgICBcImJyYW5kXCI6IFwiQ1lFWk9JLVlRXCIsXG4gICAgICBcImNvbG9uXCI6IFwiOiBcIixcbiAgICAgIFwiY29tbWFcIjogXCIsIFwiLFxuICAgICAgXCJkYXRhYmFzZUVycm9yXCI6IFwiRGF0YWJhc2UgZXJyb3JcIixcbiAgICAgIFwiZGVsZXRlXCI6IFwiRGVsZXRlXCIsXG4gICAgICBcImRldGFpbFwiOiBcIkRldGFpbFwiLFxuICAgICAgXCJlcnJvclwiOiBcIkVycm9yXCIsXG4gICAgICBcImVycm9yRGVzY3JpcHRpb25cIjogXCJXZSBhcmUgc29ycnksIGJ1dCBhbiBlcnJvciBoYXMgb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuIElmIHRoZSBwcm9ibGVtIHBlcnNpc3RzLCBwbGVhc2UgY29udGFjdCB1cy4gVGhhbmsgeW91LlwiLFxuICAgICAgXCJmZW1hbGVcIjogXCJGZW1hbGVcIixcbiAgICAgIFwiZmluYW5jZVwiOiBcIkZpbmFuY2VcIixcbiAgICAgIFwiZm9vdGVyXCI6IFwiUG93ZXJlZCBieSBDWUVaT0lcIixcbiAgICAgIFwiZ2FpblwiOiBcIkdhaW5cIixcbiAgICAgIFwiZ2VuZGVyXCI6IFwiR2VuZGVyXCIsXG4gICAgICBcImdyb3VwXCI6IFwiR3JvdXBcIixcbiAgICAgIFwiaG9tZVwiOiBcIkhvbWVcIixcbiAgICAgIFwiaWRcIjogXCJJRFwiLFxuICAgICAgXCJsYW5ndWFnZVwiOiBcIkxhbmd1YWdlXCIsXG4gICAgICBcImxvZ2luXCI6IFwiTG9naW5cIixcbiAgICAgIFwibG9nb3V0XCI6IFwiTG9nb3V0XCIsXG4gICAgICBcImxvc2VcIjogXCJMb3NlXCIsXG4gICAgICBcIm1hbGVcIjogXCJNYWxlXCIsXG4gICAgICBcIm1heDEwMDBcIjogXCJNYXhpbXVtIDEwMDBcIixcbiAgICAgIFwibWF4TGVuMTZcIjogXCJNYXhpbXVtIGxlbmd0aCAxNlwiLFxuICAgICAgXCJtYXhMZW42NFwiOiBcIk1heGltdW0gbGVuZ3RoIDY0XCIsXG4gICAgICBcIm1pbjEwMDBcIjogXCJNaW5pbXVtIC0xMDAwXCIsXG4gICAgICBcIm1pbkxlbjRcIjogXCJNaW5pbXVtIGxlbmd0aCA0XCIsXG4gICAgICBcIm1pbkxlbjhcIjogXCJNaW5pbXVtIGxlbmd0aCA4XCIsXG4gICAgICBcIm1vbmV5XCI6IFwiTW9uZXlcIixcbiAgICAgIFwib3BlcmF0aW9uXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgICBcInBhc3N3b3JkXCI6IFwiUGFzc3dvcmRcIixcbiAgICAgIFwicHJpdmlsZWdlUmVjb3JkXCI6IFwiUHJpdmlsZWdlIFJlY29yZFwiLFxuICAgICAgXCJyZWFzb25cIjogXCJSZWFzb25cIixcbiAgICAgIFwicmVxdWlyZWRcIjogXCJSZXF1aXJlZFwiLFxuICAgICAgXCJyZXF1aXJlTnVtYmVyXCI6IFwiTnVtYmVyIHJlcXVpcmVkXCIsXG4gICAgICBcInJlcXVpcmVTdHJpbmdcIjogXCJTdHJpbmcgcmVxdWlyZWRcIixcbiAgICAgIFwicmVxdWlyZVN0cm9uZ1Bhc3N3b3JkXCI6IFwiUmVxdWlyZSBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZSBsZXR0ZXIsIG9uZSBudW1iZXIgYW5kIG9uZSBzcGVjaWFsIGNoYXJhY3Rlci5cIixcbiAgICAgIFwicmVzb3VyY2VcIjogXCJSZXNvdXJjZVwiLFxuICAgICAgXCJSTUJcIjogXCJSTUJcIixcbiAgICAgIFwicm9sZVwiOiBcIlJvbGVcIixcbiAgICAgIFwic3R1ZGVudFwiOiBcIlN0dWRlbnRcIixcbiAgICAgIFwic3R1ZGVudE5hbWVcIjogXCJOYW1lXCIsXG4gICAgICBcInN0dWRlbnROdW1iZXJcIjogXCJTdHVkZW50IE51bWJlclwiLFxuICAgICAgXCJ0aW1lXCI6IFwiVGltZVwiLFxuICAgICAgXCJ1c2VybmFtZVwiOiBcIlVzZXJuYW1lXCIsXG4gICAgICBcInVzZXJOb3RGb3VuZFwiOiBcIlVzZXIgbm90IGZvdW5kXCIsXG4gICAgICBcIndlbGNvbWVEZXNjcmlwdGlvblwiOiBcIldlbGNvbWUgdG8gQ1lFWk9JLVlRLCB0aGUgb2ZmaWNpYWwgd2Vic2l0ZSBvZiB0aGUgWVEgY2xhc3Mgb2YgQ2FvIFlhbmcgTm8uMiBNaWRkbGUgU2Nob29sLlwiLFxuICAgIH0sXG4gIH0sXG4gIHpoOiB7XG4gICAgdHJhbnNsYXRpb246IHtcbiAgICAgIFwiNDA0XCI6IFwiNDA0IOacquaJvuWIsFwiLFxuICAgICAgXCI0MDREZXNjcmlwdGlvblwiOiBcIuaCqOimgeafpeaJvueahOmhtemdouacquaJvuWIsOOAglwiLFxuICAgICAgXCJhZGRCdXR0b25cIjogXCLmt7vliqBcIixcbiAgICAgIFwiYW1vdW50XCI6IFwi6YeR6aKdXCIsXG4gICAgICBcImJyYW5kXCI6IFwi5pu55p2o5LqM5Lit5rC45by65Yib5paw54+tXCIsXG4gICAgICBcImNvbG9uXCI6IFwi77yaXCIsXG4gICAgICBcImNvbW1hXCI6IFwi77yMXCIsXG4gICAgICBcImRhdGFiYXNlRXJyb3JcIjogXCLmlbDmja7lupPplJnor69cIixcbiAgICAgIFwiZGVsZXRlXCI6IFwi5Yig6ZmkXCIsXG4gICAgICBcImRldGFpbFwiOiBcIuivpuaDhVwiLFxuICAgICAgXCJlcnJvclwiOiBcIumUmeivr1wiLFxuICAgICAgXCJlcnJvckRlc2NyaXB0aW9uXCI6IFwi5b6I5oqx5q2J77yM5Y+R55Sf5LqG6ZSZ6K+v44CC6K+356iN5ZCO5YaN6K+V44CC5aaC5p6c6Zeu6aKY5LuN54S25a2Y5Zyo77yM6K+35LiO5oiR5Lus6IGU57O744CC6LCi6LCi44CCXCIsXG4gICAgICBcImZlbWFsZVwiOiBcIuWls1wiLFxuICAgICAgXCJmaW5hbmNlXCI6IFwi6LSi5YqhXCIsXG4gICAgICBcImZvb3RlclwiOiBcIueUseabueadqOS6jOS4reS/oeWlpeW8gOWPkee7hOaPkOS+m+aKgOacr+aUr+aMgVwiLFxuICAgICAgXCJnYWluXCI6IFwi6I635b6XXCIsXG4gICAgICBcImdlbmRlclwiOiBcIuaAp+WIq1wiLFxuICAgICAgXCJncm91cFwiOiBcIue7hFwiLFxuICAgICAgXCJob21lXCI6IFwi6aaW6aG1XCIsXG4gICAgICBcImlkXCI6IFwi57yW5Y+3XCIsXG4gICAgICBcImxhbmd1YWdlXCI6IFwi6K+t6KiAXCIsXG4gICAgICBcImxvZ2luXCI6IFwi55m75b2VXCIsXG4gICAgICBcImxvZ291dFwiOiBcIueZu+WHulwiLFxuICAgICAgXCJsb3NlXCI6IFwi5aSx5Y67XCIsXG4gICAgICBcIm1hbGVcIjogXCLnlLdcIixcbiAgICAgIFwibWF4MTAwMFwiOiBcIuacgOWkp+WAvCAxMDAwXCIsXG4gICAgICBcIm1heExlbjE2XCI6IFwi5pyA5aSn6ZW/5bqmIDE2XCIsXG4gICAgICBcIm1heExlbjY0XCI6IFwi5pyA5aSn6ZW/5bqmIDY0XCIsXG4gICAgICBcIm1pbjEwMDBcIjogXCLmnIDlsI/lgLwgLTEwMDBcIixcbiAgICAgIFwibWluTGVuNFwiOiBcIuacgOWwj+mVv+W6piA0XCIsXG4gICAgICBcIm1pbkxlbjhcIjogXCLmnIDlsI/plb/luqYgOFwiLFxuICAgICAgXCJtb25leVwiOiBcIumHkeminVwiLFxuICAgICAgXCJvcGVyYXRpb25cIjogXCLmk43kvZxcIixcbiAgICAgIFwicGFzc3dvcmRcIjogXCLlr4bnoIFcIixcbiAgICAgIFwicHJpdmlsZWdlUmVjb3JkXCI6IFwi6Zm254mH5pS+6YCQXCIsXG4gICAgICBcInJlYXNvblwiOiBcIuWOn+WboFwiLFxuICAgICAgXCJyZXF1aXJlZFwiOiBcIuW/heWhq1wiLFxuICAgICAgXCJyZXF1aXJlTnVtYmVyXCI6IFwi6ZyA6KaB5aGr5YaZ5pWw5a2XXCIsXG4gICAgICBcInJlcXVpcmVTdHJpbmdcIjogXCLpnIDopoHloavlhpnlrZfnrKbkuLJcIixcbiAgICAgIFwicmVxdWlyZVN0cm9uZ1Bhc3N3b3JkXCI6IFwi6ZyA6KaB6Iez5bCR5LiA5Liq5aSn5YaZ5a2X5q+N44CB5LiA5Liq5bCP5YaZ5a2X5q+N44CB5LiA5Liq5pWw5a2X5ZKM5LiA5Liq54m55q6K5a2X56ym44CCXCIsXG4gICAgICBcInJlc291cmNlXCI6IFwi6LWE5rqQXCIsXG4gICAgICBcIlJNQlwiOiBcIuWFg1wiLFxuICAgICAgXCJyb2xlXCI6IFwi6KeS6ImyXCIsXG4gICAgICBcInN0dWRlbnRcIjogXCLlrabnlJ9cIixcbiAgICAgIFwic3R1ZGVudE5hbWVcIjogXCLlp5PlkI1cIixcbiAgICAgIFwic3R1ZGVudE51bWJlclwiOiBcIuWtpuWPt1wiLFxuICAgICAgXCJ0aW1lXCI6IFwi5pe26Ze0XCIsXG4gICAgICBcInVzZXJuYW1lXCI6IFwi55So5oi35ZCNXCIsXG4gICAgICBcInVzZXJOb3RGb3VuZFwiOiBcIueUqOaIt+acquaJvuWIsFwiLFxuICAgICAgXCJ3ZWxjb21lRGVzY3JpcHRpb25cIjogXCLmrKLov47mnaXliLDmm7nmnajkuozkuK3msLjlvLrliJvmlrDnj63nmoTlrpjmlrnnvZHnq5njgIJcIixcbiAgICB9LFxuICB9LFxufTtcblxuaTE4blxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpXG4gIC5pbml0KHtcbiAgICByZXNvdXJjZXMsXG4gICAgbG5nOiBcImVuXCIsXG4gICAgZmFsbGJhY2tMbmc6IFwiZW5cIixcbiAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICBlc2NhcGVWYWx1ZTogZmFsc2VcbiAgICB9XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBpMThuOyJdLCJuYW1lcyI6WyJpMThuIiwiaW5pdFJlYWN0STE4bmV4dCIsInJlc291cmNlcyIsImVuIiwidHJhbnNsYXRpb24iLCJ6aCIsInVzZSIsImluaXQiLCJsbmciLCJmYWxsYmFja0xuZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/i18n.ts\n");

/***/ }),

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/i18n */ \"./src/i18n.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_i18n__WEBPACK_IMPORTED_MODULE_2__]);\n_i18n__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Document() {\n    const { t } = _i18n__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"/home/langningchen/cyezoi-yq/src/pages/_document.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"/home/langningchen/cyezoi-yq/src/pages/_document.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"/home/langningchen/cyezoi-yq/src/pages/_document.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/langningchen/cyezoi-yq/src/pages/_document.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/langningchen/cyezoi-yq/src/pages/_document.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ25DO0FBRVgsU0FBU0s7SUFDdEIsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0YsNkNBQUlBO0lBQ2xCLHFCQUNFLDhEQUFDSiwrQ0FBSUE7UUFBQ08sTUFBSzs7MEJBQ1QsOERBQUNOLCtDQUFJQTs7Ozs7MEJBQ0wsOERBQUNPOztrQ0FDQyw4REFBQ04sK0NBQUlBOzs7OztrQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQiIsInNvdXJjZXMiOlsid2VicGFjazovL2N5ZXpvaS15cS8uL3NyYy9wYWdlcy9fZG9jdW1lbnQudHN4PzE4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5pbXBvcnQgaTE4biBmcm9tIFwiQC9pMThuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KCkge1xuICBjb25zdCB7IHQgfSA9IGkxOG47XG4gIHJldHVybiAoXG4gICAgPEh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8SGVhZCAvPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxNYWluIC8+XG4gICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9IdG1sID5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiaTE4biIsIkRvY3VtZW50IiwidCIsImxhbmciLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

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