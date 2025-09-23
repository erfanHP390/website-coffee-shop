import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment"
import ProductModel from "@/models/Product"
import { validateEmail } from "@/utils/auth";


export async function POST(req) {

    connectToDB()

    try {

        const body = await req.json()
        const {username, content,email, score , productID} = body

        if(!username || !content || !email || !productID) {
            return Response.json({message: "all fields must have something expect score"} , {
              status: 400
            } )
          }

          const isValidEmail = validateEmail(email)
          if(!isValidEmail) {
            return Response.json({message: "email is not valid"} , {
                status: 422
             })
          }

        const comment = await CommentModel.create({username, content,email, score , productID})

        const updatedProduct = await ProductModel.findOneAndUpdate({_id: productID} , {
            $push: {
                comments: comment._id
            }
        })


        return Response.json({message: "comment is created successfully"} , {status: 201})

    } catch (err) {
        return Response.json({message : `interval error server create comment => ${err}`} , {
            status: 500
        })
    }

}

export async function GET () {
    connectToDB()

    const comments = await CommentModel.find({} , "-__v")

    return Response.json(comments)

}
