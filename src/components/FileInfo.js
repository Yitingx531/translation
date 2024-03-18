"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function FileInfo(prop) {
    const [fileName, setFileName] = (0, react_1.useState)('');
    const [wordCount, setWordCount] = (0, react_1.useState)(0);
    const [proofreader, setProofreader] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('/');
                const data = yield response.json();
                console.log('data', data);
                setFileName(data.filename);
                setWordCount(data.wordcount);
                setProofreader(data.proofreader);
            }
            catch (error) {
                console.log(error.message);
            }
        });
        fetchData();
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("section", { id: 'file_info', children: [(0, jsx_runtime_1.jsx)("div", { id: 'date', children: prop.correctDate }), (0, jsx_runtime_1.jsx)("div", { id: 'file_name', children: fileName }), (0, jsx_runtime_1.jsx)("div", { id: 'word_count', children: wordCount }), (0, jsx_runtime_1.jsx)("div", { id: 'proofreader', children: proofreader })] }) }));
}
exports.default = FileInfo;
