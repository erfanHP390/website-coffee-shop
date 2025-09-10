import React from "react";
import fs from "fs"
import path from "path"

function index(req, res) {
  switch (req.method) {
    case "GET": {

      const dbPath = path.join(process.cwd() , "data" , "db.json")
      const data = fs.readFileSync(dbPath)
      const parsedData = JSON.parse(data)

      return res.json(parsedData.services)

      break;
    }
    case "POST": {
      
      const {title , img , desc , icon} = req.body

      const dbPath = path.join(process.cwd() , "data" , "db.json")
      const data = fs.readFileSync(dbPath)
      const parsedData = JSON.parse(data)

      parsedData.services.push({
        id: crypto.randomUUID(),
        title,
        img,
        desc,
        icon
      })

      const err = fs.writeFileSync(dbPath , JSON.stringify(parsedData))

      if(err) {}
      else {
        return res.status(201).json({massage: "add services is successfully"})
      }

      break;
    }
    case "PUT": {
      return res.json({ massage: "PUT services" });
      break;
    }
    case "DELETE": {
      return res.json({ massage: "DELETE services" });
      break;
    }
    default: {
      return res.json({ massage: "default services" });
    }
  }
}

export default index;
