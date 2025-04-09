import { redirect } from 'next/navigation';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
const dbName = 'urlShortener';
const collectionName = 'urls'

export default async function RedirectPage({ params }: { params: Promise<{ alias: string }> }) {
    const { alias } = params;

    try {
        await client.connect();
        const db = client.db(dbName);
        const urls = db.collection(collectionName);

        const record = await urls.findOne({ alias });

        if (record && record.url) {
            redirect(record.url);
        }
    } catch (err: unknown) {
        const error = err as { message?: string };
        console.error('redirect error:', err);
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1>Something went wrong????</h1>
                <p>The error is: { error.message }</p>
            </div>
        )
    }
}