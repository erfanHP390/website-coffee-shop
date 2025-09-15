import connectToDB from "@/configs/db";
import { validateEmail } from "@/utils/auth";
import ReservationModel from "@/models/Reservation"

export async function POST(req) {
  try {
    connectToDB();

    const body = await req.json();
    const { email, name, day, time, countPeople } = body;

    if (!email || !name || !day || !time || !countPeople) {
      return Response.json(
        { message: "all field must hav something" },
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

    await ReservationModel.create({ email , name , day , time , countPeople });

    return Response.json(
      { message: "reserve is registered successfully" },
      {
        status: 201,
      }
    );
  } catch (err) {
    return Response.json({ message: `interval error server : ${err}` });
  }
}
