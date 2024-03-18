"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const PaymentHeader_1 = __importDefault(require("./PaymentHeader"));
const FileInfo_1 = __importDefault(require("./FileInfo"));
function PaymentTrackingContainern(prop) {
    return ((0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)(PaymentHeader_1.default, {}), (0, jsx_runtime_1.jsx)(FileInfo_1.default, { correctDate: prop.correctDate })] }));
}
exports.default = PaymentTrackingContainern;
