import React from "react";
import fs from "fs";
import path from "path";

function index(req, res) {
  switch (req.method) {
    case "GET": {
      const dbPath = path.join(process.cwd(), "data", "db.json");
      const data = fs.readFileSync(dbPath);
      const parsedData = JSON.parse(data);

      res.json(parsedData.comment);
      break;
    }

    case "POST": {
      const { productID, name, comment, rating, profile } = req.body;

      const dbPath = path.join(process.cwd(), "data", "db.json");
      const data = fs.readFileSync(dbPath);
      const parsedData = JSON.parse(data);

      parsedData.comment.push({
        id: crypto.randomUUID(),
        productID,
        name,
        comment,
        rating,
        profile,
      });

      const err = fs.writeFileSync(dbPath, JSON.stringify(parsedData));

      if (err) {
      } else {
        res.status(201).json({ massage: "massages  is successfully added" });
      }

      break;
    }

    case "PUT": {
      return res.json({ massage: "PUT comment" });
      break;
    }
    case "DELETE": {
      return res.json({ massage: "DELETE comment" });
      break;
    }
    default: {
      return res.json({ massage: "default comment" });
    }
  }
}

export default index;
