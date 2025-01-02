import React from "react";
import fs from "fs";
import path from "path";
import data from "@/data/db";

export default function SingleComment(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;

    const singleComment = data.comment.find((item) => item.id === id);

    return res.json(singleComment);
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    const dbPath = path.join(process.cwd(), "data", "db.json");
    const data = fs.readFileSync(dbPath);
    const parsedData = JSON.parse(data);

    const isComment = parsedData.comment.some(
      (item) => String(item.id) === String(id)
    );

    if (isComment) {
      const newComment = parsedData.comment.filter(
        (item) => String(item.id) !== String(id)
      );

      const err = fs.writeFileSync(
        dbPath,
        JSON.stringify({ ...parsedData, comment: newComment })
      );

      if (err) {
      } else {
        return res
          .status(200)
          .json({ massage: "delete comment is successfully" });
      }
    } else {
      return res.status(404).json({ message: "Not found" });
    }
  }
  else if (req.method === "PUT") {
    const {id} = req.query
    const {productID , name , comment  ,rating , profile} = req.body

    const dbPath = path.join(process.cwd() , "data" , "db.json")
    const data = fs.readFileSync(dbPath)
    const parsedData = JSON.parse(data)

    const isComment = parsedData.comment.some((item) => String(item.id) === String(id))

    if(isComment) {

      parsedData.comment.some((item) => {
        if(String(item.id) === String(id)) {
          item.productID = productID
          item.name = name
          item.comment = comment
          item.rating = rating
          item.profile = profile

          return true
        }
      })

      const err = fs.writeFileSync(dbPath , JSON.stringify({...parsedData}))

      if(err) {}
      else {
        return res
        .status(200)
        .json({ message: "Update info massages is successfully" });
      }

    }
    else {
      return res.status(404).json({ message: "Not found" });
    }

  }
}
