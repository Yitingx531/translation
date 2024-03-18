"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const NavContainer_1 = __importDefault(require("../components/NavContainer"));
const PaymentTrackingContainern_1 = __importDefault(require("../components/PaymentTrackingContainern"));
const NewFileRow_1 = __importDefault(require("./NewFileRow"));
function App(prop) {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(NavContainer_1.default, { correctDate: prop.correctDate }), (0, jsx_runtime_1.jsx)(PaymentTrackingContainern_1.default, { correctDate: prop.correctDate }), (0, jsx_runtime_1.jsx)(NewFileRow_1.default, { correctDate: prop.correctDate })] }));
}
exports.default = App;
