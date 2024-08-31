import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "brand": "CYEZOI-YQ",
      "home": "Home",
      "finance": "Finance",
      "addButton": "Add",
      "language": "Language",
      "unknown": "Unknown",
      "time": "Time",
      "amount": "Amount",
      "money": "Money",
      "RMB": "RMB",
      "reason": "Reason",
      "detail": "Detail",
      "operation": "Operation",
      "delete": "Delete",
      "footer": "Powered by CYEZOI-YQ",
      "databaseError": "Database error",
    },
  },
  zh: {
    translation: {
      "brand": "曹杨二中永强创新班",
      "home": "首页",
      "finance": "财务",
      "addButton": "添加",
      "language": "语言",
      "unknown": "未知",
      "time": "时间",
      "amount": "金额",
      "money": "金额",
      "RMB": "元",
      "reason": "原因",
      "detail": "详情",
      "operation": "操作",
      "delete": "删除",
      "footer": "由曹杨二中永强创新班提供技术支持",
      "databaseError": "数据库错误",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;