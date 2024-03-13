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
const db = require('../connectToDB');
const proofreadController = {
    postProofreadInfo: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // const d = new Date();
            // const date = d.toDateString();
            // const { id, proofreader, filename, wordcount, date } = req.body;
            // const values = [ id, proofreader, filename, wordcount, date ];
            // const value = [date];
            const queryString = `INSERT INTO proofread (id, proofreader, filename, wordcount, date) VALUES (234, 'Eva', 'ppp' , 4000, '2024-03-12')`;
            // await db.query(queryString, values);
            yield db.query(queryString);
            const message = 'successfully inputed proofreader data';
            res.locals.message = message;
            next();
        }
        catch (error) {
            console.log('Error occurred adding proofreader file info', error);
        }
    }),
};
module.exports = proofreadController;
