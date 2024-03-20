"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const App_1 = __importDefault(require("./components/App"));
const client_1 = require("react-dom/client");
require("./static/styles.scss");
const d = new Date();
const date = d.toDateString();
const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
};
const dateArr = date.split(' ');
dateArr.splice(0, 1);
for (let i = 0; i < dateArr.length; i++) {
    if (months.hasOwnProperty(dateArr[i])) {
    }
}
let correctDate = dateArr[2] + '-' + dateArr[0] + '-' + dateArr[1];
const root = (0, client_1.createRoot)(document.getElementById('root'));
root.render((0, jsx_runtime_1.jsx)(App_1.default, { correctDate: correctDate, proofreader: '', filename: '', wordcount: 0, proofreaderPay: 0, profit: 0 }));
