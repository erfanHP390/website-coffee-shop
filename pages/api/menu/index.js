import React from 'react'
import fs from "fs";
import path from "path";

import menu from "@/data/db"

function index(req , res) {
 
  switch (req.method) {

    case "GET" : {

      const dbPath = path.join(process.cwd() , "data" , "db.json")
      const data = fs.readFileSync(dbPath)
      const parsedData = JSON.parse(data)

       res.json(parsedData.menu)
      break;
    }

    case "POST" : {

      const {title,desc,price,img,off,score,type} = req.body 

      const dbPath = path.join(process.cwd() , "data" , "db.json")
      const data = fs.readFileSync(dbPath)
      const parsedData = JSON.parse(data)

      parsedData.menu.push({
        id: crypto.randomUUID(),
        title,
        desc,
        price,
        img,
        off,
        score,
        type
      })

      const err = fs.writeFileSync(dbPath , JSON.stringify(parsedData))

      if(err) {}
      else {
        res.status(201).json({massage: "item for menu is successfully added"})
      }

      break;
    }


    default: {
      res.json({ message: "Welcome to Users page ❤️" });
    }

  }


}

export default index
