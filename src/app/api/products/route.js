import connectToDB from "@/configs/db";
import { writeFile } from "fs/promises";
import path from "path";
import ProductModel from "@/models/Product";

export async function POST(req) {
  await connectToDB();
  try {
    const formData = await req.formData();
    console.log("FormData received"); // ✅ تست کن ببینی فرم دیتا اومده

    const title = formData.get("title");
    const description = formData.get("description");
    const price = formData.get("price");
    const img = formData.get("img");
    const off = formData.get("off");
    const score = formData.get("score");
    const type = formData.get("type");

    // ✅ اول مطمئن شو فایل اومده
    if (!img || typeof img === "string") {
      return Response.json(
        { message: "product has not image" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + img.name;
    const imgPath = path.join(process.cwd(), "public/uploads/" + filename);

    await writeFile(imgPath, buffer);

    if (!price || !title || !score || !type || !description || !off) {
      return Response.json(
        { message: "all fields must have something " },
        { status: 400 }
      );
    }

    await ProductModel.create({
      title,
      description,
      price,
      off,
      score,
      type,
      img: `/uploads/${filename}`,
    });

    return Response.json(
      { message: "product is created successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return Response.json(
      { message: `interval error server ${err}` },
      { status: 500 }
    );
  }
}
