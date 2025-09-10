import connectToDB from "@/configs/db";
import { validateEmail } from "@/utils/auth";
import NewsModel from "@/models/NewsLetter";

export async function POST(req) {
  connectToDB();
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return Response.json(
        { message: "email not send" },
        {
          status: 400,
        }
      );
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return Response.json(
        { message: "email is not valid" },
        {
          status: 422,
        }
      );
    }

    const isExistEmail = await NewsModel.findOne({ email });
    if (isExistEmail) {
      return Response.json(
        { message: "email is already exist" },
        {
          status: 419,
        }
      );
    }

    await NewsModel.create({ email });

    return Response.json(
      { message: "email is registered successfully" },
      {
        status: 201,
      }
    );
  } catch (err) {
    return Response.json(
      { message: `interval error server ${err}` },
      {
        status: 500,
      }
    );
  }
}
