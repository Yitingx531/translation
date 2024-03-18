"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function NavContainer(prop) {
    return ((0, jsx_runtime_1.jsx)("section", { id: 'navBar_container', children: (0, jsx_runtime_1.jsxs)("nav", { children: [(0, jsx_runtime_1.jsx)("a", { href: '', children: "Home" }), (0, jsx_runtime_1.jsx)("a", { href: 'https://www.linkedin.com/in/yiting-xiao/', children: "LinkedIn" }), (0, jsx_runtime_1.jsx)("a", { href: 'https://github.com/Yitingx531', children: "Team" }), (0, jsx_runtime_1.jsxs)("a", { href: "", children: ["Date: ", prop.correctDate] }), (0, jsx_runtime_1.jsx)("div", { className: 'animation start-home' })] }) }));
}
exports.default = NavContainer;
;
