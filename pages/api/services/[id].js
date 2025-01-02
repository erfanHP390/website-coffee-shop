import React from "react";
import fs from "fs";
import path from "path";
import data from "@/data/db";

export default function SingleService(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;

    const singleService = data.services.find((item) => item.id === id);

    return res.json(singleService);
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    const dbPath = path.join(process.cwd(), "data", "db.json");
    const data = fs.readFileSync(dbPath);
    const parsedData = JSON.parse(data);

    const isService = parsedData.services.some(
        (item) => String(item.id) === String(id)
      );

      if(isService) {

        const newService = parsedData.services.filter(item => String(item.id) !== String(id))

        const err = fs.writeFileSync(dbPath , JSON.stringify({...parsedData , services: newService}))

        if(err) {}
        else {
            return res.status(200).json({massage: "delete service is successfully"})
        }

      } else {
        return res.status(404).json({ message: "Not found" });
      }


  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { title, img, desc, icon } = req.body;

    const dbPath = path.join(process.cwd(), "data", "db.json");
      const data = fs.readFileSync(dbPath);
      const parsedData = JSON.parse(data);

      const isService = parsedData.services.some(
        (item) => String(item.id) === String(id)
      );

      if (isService) {
        parsedData.services.some((item) => {
          if (String(item.id) === String(id)) {
            item.title = title;
            item.img = img;
            item.desc = desc;
            item.icon = icon;

            return true;
          }
        });

        fs.writeFileSync(dbPath, JSON.stringify({...parsedData}));

        return res
          .status(200)
          .json({ message: "Update info services is successful" });
      } else {
        return res.status(404).json({ message: "Not found" });
      }

  }
}
