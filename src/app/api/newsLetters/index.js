import React from 'react'
import fs from "fs"
import path from "path"

function index(req , res) {
  switch (req.method) {
    case "GET": {

      const dbPath = path.join(process.cwd() , "data" , "db.json")
      const data = fs.readFileSync(dbPath)
      const parsedData = JSON.parse(data)

      return res.json(parsedData.newsLetters)

      break;
    }
    case "POST": {
      
      const {email} = req.body

      const dbPath = path.join(process.cwd() , "data" , "db.json")
      const data = fs.readFileSync(dbPath)
      const parsedData = JSON.parse(data)

      parsedData.newsLetters.push({
        id: crypto.randomUUID(),
        email,
      })

      const err = fs.writeFileSync(dbPath , JSON.stringify(parsedData))

      if(err) {}
      else {
        return res.status(201).json({massage: "add newsLetters is successfully"})
      }

      break;
    }
    case "PUT": {
      return res.json({ massage: "PUT news-letter" });
      break;
    }
    case "DELETE": {
      return res.json({ massage: "DELETE newsLetters" });
      break;
    }
    default: {
      return res.json({ massage: "default newsLetters" });
    }
  }}

export default index