import React from 'react'
import fs from "fs";
import path from "path";
import data from "@/data/db";


export default function SingleMassage(req , res) {
      if (req.method === "GET") {
        const { id } = req.query;
    
        const singleMassage = data.massages.find((item) => item.id === id);
    
        return res.json(singleMassage);
      }
      else if (req.method === "DELETE") {
          const { id } = req.query;
      
          const dbPath = path.join(process.cwd(), "data", "db.json");
          const data = fs.readFileSync(dbPath);
          const parsedData = JSON.parse(data);
      
          const isMassage = parsedData.massages.some(
              (item) => String(item.id) === String(id)
            );
      
            if(isMassage) {
      
              const newMassage = parsedData.massages.filter(item => String(item.id) !== String(id))
      
              const err = fs.writeFileSync(dbPath , JSON.stringify({...parsedData , massages: newMassage}))
      
              if(err) {}
              else {
                  return res.status(200).json({massage: "delete massage is successfully"})
              }
      
            } else {
              return res.status(404).json({ message: "Not found" });
            }
      
      
        }
        else if (req.method === "PUT") {
            const { id } = req.query;
            const { name, email, subject, body } = req.body;
        
            const dbPath = path.join(process.cwd(), "data", "db.json");
              const data = fs.readFileSync(dbPath);
              const parsedData = JSON.parse(data);
        
              const isMassage = parsedData.massages.some(
                (item) => String(item.id) === String(id)
              );
        
              if (isMassage) {
                parsedData.massages.some((item) => {
                  if (String(item.id) === String(id)) {
                    item.name = name;
                    item.email = email;
                    item.subject = subject;
                    item.body = body;
        
                    return true;
                  }
                });
        
                fs.writeFileSync(dbPath, JSON.stringify({...parsedData}));
        
                return res
                  .status(200)
                  .json({ message: "Update info massages is successfully" });
              } else {
                return res.status(404).json({ message: "Not found" });
              }
        
          }
}
