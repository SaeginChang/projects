import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
const dbName = 'urlShortener';
const collectionName = 'urls';

export async function POST(req: Request) {
    try {
        const { url, alias } = await req.json();

        if (!url || !alias) {
            return NextResponse.json({error: 'url and alias required' }, {status: 400});
        }

        try {
            new URL(url);
        } catch {
            return NextResponse.json({error: 'invalid url format'}, {status: 400});
        }

        await client.connect();
        const db = client.db(dbName)
        const urls = db.collection(collectionName);

        const existing = await urls.findOne({ alias });
        if (existing) {
            return NextResponse.json({ error: 'alias taken' }, {status:400});
        }

        await urls.insertOne({ alias, url });

        const baseUrl = process.env.BASE_URL || 'https://projects-mp5.vercel.app/';
        return NextResponse.json({ shortUrl: `${baseUrl}/${alias}`, status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: 'internal error'}, {status:500})
    }
}