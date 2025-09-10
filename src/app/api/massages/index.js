import React from "react";
import fs from "fs";
import path from "path";

function index(req, res) {
  switch (req.method) {
    case "GET": {
      const dbPath = path.join(process.cwd(), "data", "db.json");
      const data = fs.readFileSync(dbPath);
      const parsedData = JSON.parse(data);

      res.json(parsedData.massages);
      break;
    }

    case "POST": {
      const { name, email, subject, body } = req.body;

      const dbPath = path.join(process.cwd(), "data", "db.json");
      const data = fs.readFileSync(dbPath);
      const parsedData = JSON.parse(data);

      parsedData.massages.push({
        id: crypto.randomUUID(),
        name,
        email,
        subject,
        body,
      });

      const err = fs.writeFileSync(dbPath, JSON.stringify(parsedData));

      if (err) {
      } else {
        res
          .status(201)
          .json({ massage: "massages  is successfully added" });
      }

      break;
    }

    case "PUT": {
      return res.json({ massage: "PUT services" });
      break;
    }
    case "DELETE": {
      return res.json({ massage: "DELETE Massages" });
      break;
    }
    default: {
      return res.json({ massage: "default Massages" });
    }
  }
}

export default index;
