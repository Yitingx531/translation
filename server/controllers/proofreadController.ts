import { Request, Response, NextFunction } from 'express';
const db = require('../connectToDB');

type postProofreadInfo = () => void;

type proofreadController = {
    postProofreadInfo: postProofreadInfo;
};

type months = {
  [key: string]: string,
}

type dateArr = string[];
const proofreadController = {
    postProofreadInfo: async (req: Request, res: Response, next: NextFunction) => {
      try {
        const d = new Date();
        const date = d.toDateString();
        const months: months = {
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
         }
        
        const dateArr: dateArr = date.split(' ');
        dateArr.splice(0, 1);
        for (let i = 0; i < dateArr.length; i++){
         if (months.hasOwnProperty(dateArr[i])){
         }
       }
       let correctDate = dateArr[2]+'-'+dateArr[0]+'-'+dateArr[1];
        const value = [correctDate];
        const queryString = `INSERT INTO proofread (id, proofreader, filename, wordcount, date) VALUES (113, 'john', 'poi' ,2009, $1)`;
        await db.query(queryString, value);
        const message = 'successfully inputed proofreader data';
        res.locals.message = message;
        next();
      } catch(error){
        console.log('Error occurred adding proofreader file info', error);
      }
    },
}

module.exports = proofreadController;