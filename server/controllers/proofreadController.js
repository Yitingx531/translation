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
            const value = [correctDate];
            const queryString = `INSERT INTO proofread (id, proofreader, filename, wordcount, date) VALUES (113, 'john', 'poi' ,2009, $1)`;
            yield db.query(queryString, value);
            const message = 'successfully inputed proofreader data';
            res.locals.message = message;
            next();
        }
        catch (error) {
            console.log('Error occurred adding proofreader file info via proofreadController.postProofreadInfo middlware', error);
        }
    }),
};
module.exports = proofreadController;
