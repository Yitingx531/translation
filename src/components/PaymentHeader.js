"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function PaymentHeader() {
    return ((0, jsx_runtime_1.jsxs)("section", { id: 'payment_header', children: [(0, jsx_runtime_1.jsx)("div", { id: 'date', children: "Date" }), (0, jsx_runtime_1.jsx)("div", { id: 'file_name', children: "File Name" }), (0, jsx_runtime_1.jsx)("div", { id: 'word_count', children: "Word Count" }), (0, jsx_runtime_1.jsx)("div", { id: 'proofreader', children: "Proofreader" })] }));
}
exports.default = PaymentHeader;
