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
function NewFileRow(props) {
    const [isClicked, setIsClicked] = (0, react_1.useState)(false);
    const [fileName, setFileName] = (0, react_1.useState)('');
    const [wordCount, setWordCount] = (0, react_1.useState)(0);
    const [proofreader, setProofreader] = (0, react_1.useState)('');
    const newRow = {
        id: Math.floor(Math.random() * 10000),
        proofreader: proofreader,
        filename: fileName,
        wordcount: wordCount || 0,
        date: props.correctDate
    };
    const handleClick = () => __awaiter(this, void 0, void 0, function* () {
        setIsClicked(true);
        try {
            const response = yield fetch('api/proofreading', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newRow),
            });
            if (!response.ok) {
                throw new Error('Failed to post new user to the database');
            }
            console.log('User successfully added to the database');
        }
        catch (error) {
            console.log(error.message);
        }
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("section", { id: 'new_file_row', children: [(0, jsx_runtime_1.jsx)("div", { id: 'row_date', children: props.correctDate }), (0, jsx_runtime_1.jsx)("input", { id: 'row_file_name', value: fileName, onChange: (e) => setFileName(e.target.value) }), (0, jsx_runtime_1.jsx)("input", { id: 'row_word_count', type: "number", value: wordCount, onChange: (e) => setWordCount(parseInt(e.target.value)) }), (0, jsx_runtime_1.jsx)("input", { id: 'row_proofreader', value: proofreader, onChange: (e) => setProofreader(e.target.value) })] }), (0, jsx_runtime_1.jsx)("button", { onClick: handleClick, children: "Send File" })] }));
}
exports.default = NewFileRow;
;
