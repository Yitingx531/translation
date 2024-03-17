"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function NavContainer() {
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
    return ((0, jsx_runtime_1.jsx)("section", { children: (0, jsx_runtime_1.jsx)("div", { id: "date", children: correctDate }) }));
}
exports.default = NavContainer;
;
