import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error("MONGODB_URI is not defined in your environment variables.");
}
const client = new MongoClient(uri);
const dbName = "urlShortener";
const collectionName = "urls";

export async function POST(request: Request) {
    try {
        const { url, alias } = await request.json();

        if (!url || !alias) {
            return NextResponse.json({ error: "URL and alias are required." }, { status: 400 });
        }

        try {
            new URL(url);
        } catch {
            return NextResponse.json({ error: "Invalid URL format." }, { status: 400 });
        }

        await client.connect();
        const db = client.db(dbName);
        const urls = db.collection(collectionName);

        const existing = await urls.findOne({ alias });
        if (existing) {
            return NextResponse.json({ error: "Alias is already taken." }, { status: 400 });
        }

        await urls.insertOne({ alias, url });

        const baseUrl = "https://projects-mp5-phi.vercel.app";
        return NextResponse.json({ shortUrl: `${baseUrl}/${alias}` });
    } catch (error: unknown) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
