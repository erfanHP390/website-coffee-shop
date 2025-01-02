import React from "react";
import fs from "fs";
import path from "path";

function index(req, res) {
  switch (req.method) {
    case "GET": {
      const dbPath = path.join(process.cwd(), "data", "db.json");
      const data = fs.readFileSync(dbPath);
      const parsedData = JSON.parse(data);

      return res.json(parsedData.reservation);

      break;
    }
    case "POST": {
      const { name, email, date, time, people } = req.body;

      const dbPath = path.join(process.cwd(), "data", "db.json");
      const data = fs.readFileSync(dbPath);
      const parsedData = JSON.parse(data);

      parsedData.reservation.push({
        id: crypto.randomUUID(),
        name,
        email,
        date,
        time,
        people,
      });

      const err = fs.writeFileSync(dbPath, JSON.stringify(parsedData));

      if (err) {
      } else {
        return res
          .status(201)
          .json({ massage: "add reservation is successfully" });
      }
      break;
    }
    case "PUT": {
      return res.json("put");
      break;
    }
    case "DELETE": {
      return res.json("delete");
      break;
    }
    default: {
      return res.json("default");
      break;
    }
  }
}

export default index;
