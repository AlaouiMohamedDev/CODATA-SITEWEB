import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next'

interface From {
    name : string,
    address : string
}
export default async (req:NextApiRequest,res:NextApiResponse) => {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.titan.email",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        },
        secure: true,
      });
      try {
        await transporter.sendMail(
            {
                from:<From>{
                    name:req.body.name,
                    address:process.env.SMTP_USER
                },
                to: "contact@codata-agency.com",
                subject: `${req.body.name} لديك طلب جديد مسجل من طرف`,
                html: `<h1>hello</h1>`
            }, (err,data) => {
                if(err){
                res.json({error : JSON.stringify(err) , status : -1});
              } else {
                res.json({ message : "success" , status : 1});
              }
            }
        )
      } catch (error) {
        res.status(200).json({
            'status': -1 ,
            'message': error
        }
        )
      }
}