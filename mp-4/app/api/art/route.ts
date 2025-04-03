import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
        return NextResponse.json({ error: 'No query provided.' }, { status: 400 });
    }

    try {
        const res = await fetch(`https://api.harvardartmuseums.org/object?apikey=${process.env.HARVARD_API_KEY}&size=10&title=${encodeURIComponent(query)}`);
        const data = await res.json();
        return NextResponse.json(data);
    } catch {
        return NextResponse.json({ error: 'API call failed.' }, { status: 500 });
    }
}
