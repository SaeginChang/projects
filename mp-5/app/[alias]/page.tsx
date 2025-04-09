import { redirect } from 'next/navigation';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export default async function RedirectPage({ params }: { params: Promise<{ alias: string }> }) {
    const { alias } = await params;

    if (!uri) {
        console.error('MONGODB_URI is not set')
        return <p>Server config error</p>
    }

    try {
        await client.connect();
        const db = client.db('urlShortener');
        const urls = db.collection('urls');

        const record = await urls.findOne({ alias });

        if (record?.url) {
            console.log('Redirect to URL Shortener');
            redirect(record.url);
            return null;
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