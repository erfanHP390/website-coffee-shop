import data from "@/data/db";
import fs from "fs";
import path from "path";

const SingleItemMenu = (req, res) => {
    if (req.method === "GET") {
        const { id } = req.query;
        
        const singleItem = data.menu.find((item) => item.id === id);
        
        if (singleItem) {
            return res.json(singleItem);
        } else {
            return res.status(404).json({ message: "Item not found !!" });
        }
    } else if (req.method === "DELETE") {

        const { id } = req.query

        const dbPath = path.join(process.cwd() , "data" , "db.json")
        const data = fs.readFileSync(dbPath)
        const parsedData = JSON.parse(data)

        const isItem = parsedData.menu.some((item => String(item.id) === String(id)))

        if(isItem) {
            const newMenu = parsedData.menu.filter(item => String(item.id) !== String(id))

            const err = fs.writeFileSync(dbPath , JSON.stringify({...parsedData , menu: newMenu}))

            if(err) {}
            else {
                return res.status(200).json({massage: "delete item-menu is successfully"})
            }

        } else {
            return res.status(404).json({massage: "item-menu is not found"})
        }

    } else if (req.method === "PUT") {

        const { id } = req.query
        const {title,desc,price,img,off,score,type} = req.body 

        const dbPath = path.join(process.cwd() , "data" , "db.json")
        const data = fs.readFileSync(dbPath)
        const parsedData = JSON.parse(data)

        const isItem = parsedData.menu.some((item => String(item.id) === String(id)))

        if(isItem) {
            parsedData.menu.some((item) => {
                if (String(item.id) === String(id)) {
                    item.title = title
                    item.desc = desc
                    item.price = price
                    item.img = img
                    item.off = off
                    item.score = score
                    item.type = type
        
                  return true;
                }
              });


              const err = fs.writeFileSync(dbPath , JSON.stringify({...parsedData}))

              if(err) {}
              else {
                return res.status(200).json({massage: "update item-menu is successfully"})
              }

        } else {
            return res.status(404).json({massage: "item-menu is not found"})
        }


    }
};

export default SingleItemMenu;
