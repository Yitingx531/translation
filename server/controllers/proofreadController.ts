import { Request, Response, NextFunction } from 'express';
const db = require('../connectToDB');

type postProofreadInfo = () => void;

type proofreadController = {
    postProofreadInfo: postProofreadInfo;
};

const proofreadController = {
    postProofreadInfo: async (req: Request, res: Response, next: NextFunction) => {
      try {
        // const d = new Date();
        // const date = d.toDateString();
        // const { id, proofreader, filename, wordcount, date } = req.body;
        // const values = [ id, proofreader, filename, wordcount, date ];
        // const value = [date];
        const queryString = `INSERT INTO proofread (id, proofreader, filename, wordcount, date) VALUES (234, 'Eva', 'ppp' , 4000, '2024-03-12')`;
        // await db.query(queryString, values);
        await db.query(queryString);
        const message = 'successfully inputed proofreader data';
        res.locals.message = message;
        next();
      } catch(error){
        console.log('Error occurred adding proofreader file info', error);
      }
    },
}

module.exports = proofreadController;