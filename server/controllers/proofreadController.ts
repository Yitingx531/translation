import { Request, Response, NextFunction } from 'express';
const { v4: uuidv4 } = require('uuid');
const db = require('../connectToDB');

type postProofreadInfo = (req: Request, res: Response, next: NextFunction) => void;
type getProofreadInfo = (req: Request, res: Response, next: NextFunction) => void;

type proofreadController = {
    postProofreadInfo: postProofreadInfo;
    getProofreadInfo: getProofreadInfo;
};

type months = {
  [key: string]: string,
}

type dateArr = string[];
const proofreadController = {
    getProofreadInfo: async(req: Request, res: Response, next: NextFunction) => {
    try{
        const queryString = `SELECT * FROM proofread`;
        const data = await db.query(queryString);
        const cleanData = data.rows;
        res.locals.files = cleanData;
        next();
    } catch(error) {
       console.log('Error occurred getting proofreader files info via proofreadController.getProofreadInfo middlware', error)
    }
},
    postProofreadInfo: async (req: Request, res: Response, next: NextFunction) => {
      try {
        const d = new Date();
        const dateString = d.toDateString();
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
        
        const dateArr: dateArr = dateString.split(' ');
        dateArr.splice(0, 1);
        for (let i = 0; i < dateArr.length; i++){
         if (months.hasOwnProperty(dateArr[i])){
         }
       }
        let correctDate = dateArr[2]+'-'+dateArr[0]+'-'+ dateArr[1];
        const { id, proofreader, filename, wordcount, date } = req.body;
        const values = [ uuidv4(), proofreader, filename, wordcount, correctDate];
        // const values = [ uuidv4(), 'yitingxiao', 'newfile', 4000, correctDate]
        const queryString = `INSERT INTO proofread (id, proofreader, filename, wordcount, date) VALUES ($1, $2, $3, $4, $5)`;
        await db.query(queryString, values);
        const message = 'successfully inputed proofreader data';
        res.locals.message = message;
        next();
      } catch(error){
        console.log('Error occurred adding proofreader file info via proofreadController.postProofreadInfo middlware', error);
      }
    },
};

module.exports = proofreadController;