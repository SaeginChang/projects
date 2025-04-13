import { redirect } from "next/navigation";
import { MongoClient } from "mongodb";

export default async function RedirectPage({params}: {params: Promise<{ alias: string }>; }) {
    const { alias } = await params;

    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in your environment variables.");
    }
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    await client.connect();
    const db = client.db("urlShortener");
    const urls = db.collection("urls");

    const record = await urls.findOne({ alias });
    if (record && record.url) {
        redirect(record.url);
    } else {
        redirect("/");
    }
}
