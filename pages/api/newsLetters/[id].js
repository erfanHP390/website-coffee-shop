import React from 'react'
import fs from "fs";
import path from "path";
import data from "@/data/db";

export default function SingleNewsLetter(req , res) {
  if (req.method === "GET") {
    const { id } = req.query;

    const singleEmail = data.newsLetters.find((item) => item.id === id);

    return res.json(singleEmail);
  }
  else if (req.method === "DELETE") {
      const { id } = req.query;
  
      const dbPath = path.join(process.cwd(), "data", "db.json");
      const data = fs.readFileSync(dbPath);
      const parsedData = JSON.parse(data);
  
      const isLetter = parsedData.newsLetters.some(
          (item) => String(item.id) === String(id)
        );
  
        if(isLetter) {
  
          const newLetter = parsedData.newsLetters.filter(item => String(item.id) !== String(id))
  
          const err = fs.writeFileSync(dbPath , JSON.stringify({...parsedData , newsLetters: newLetter}))
  
          if(err) {}
          else {
              return res.status(200).json({massage: "delete news-letter is successfully"})
          }
  
        } else {
          return res.status(404).json({ message: "Not found" });
        }
  
  
    }
    else if (req.method === "PUT") {
        const { id } = req.query;
        const { email } = req.body;
    
        const dbPath = path.join(process.cwd(), "data", "db.json");
          const data = fs.readFileSync(dbPath);
          const parsedData = JSON.parse(data);
    
          const isLetter = parsedData.newsLetters.some(
            (item) => String(item.id) === String(id)
          );
    
          if (isLetter) {
            parsedData.newsLetters.some((item) => {
              if (String(item.id) === String(id)) {
                item.email = email;
  
                
                return true;
              }
            });
    
            fs.writeFileSync(dbPath, JSON.stringify({...parsedData}));
    
            return res
              .status(200)
              .json({ message: "Update info new-letter is successful" });
          } else {
            return res.status(404).json({ message: "Not found" });
          }
    
      }

}
