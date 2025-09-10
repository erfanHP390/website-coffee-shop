import React from 'react'
import fs from "fs";
import path from "path";
import data from "@/data/db";


export default function SingleReservation(req , res) {
  if (req.method === "GET") {
    const { id } = req.query;

    const singleReserve = data.reservation.find((item) => item.id === id);

    return res.json(singleReserve);
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    const dbPath = path.join(process.cwd(), "data", "db.json");
    const data = fs.readFileSync(dbPath);
    const parsedData = JSON.parse(data);

    const isReserve = parsedData.reservation.some(
        (item) => String(item.id) === String(id)
      );

      if(isReserve) {

        const newReserve = parsedData.reservation.filter(item => String(item.id) !== String(id))

        const err = fs.writeFileSync(dbPath , JSON.stringify({...parsedData , reservation: newReserve}))

        if(err) {}
        else {
            return res.status(200).json({massage: "delete reserve is successfully"})
        }

      } else {
        return res.status(404).json({ message: "Not found" });
      }


  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { name, email, date, time , people } = req.body;

    const dbPath = path.join(process.cwd(), "data", "db.json");
      const data = fs.readFileSync(dbPath);
      const parsedData = JSON.parse(data);

      const isReserve= parsedData.reservation.some(
        (item) => String(item.id) === String(id)
      );

      if (isReserve) {
        parsedData.reservation.some((item) => {
          if (String(item.id) === String(id)) {
            item.name = name;
            item.email = email;
            item.date = date;
            item.time = time;
            item.people = people;


            return true;
          }
        });

        fs.writeFileSync(dbPath, JSON.stringify({...parsedData}));

        return res
          .status(200)
          .json({ message: "Update info reserve is successful" });
      } else {
        return res.status(404).json({ message: "Not found" });
      }

  }
}
