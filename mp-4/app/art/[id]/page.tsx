import { notFound } from 'next/navigation';

interface ArtData {
    id: number;
    title: string;
    people?: { name: string }[];
    primaryimageurl?: string;
    description?: string;
}

async function fetchArt(id: string): Promise<ArtData | null> {
    const apiKey = process.env.HARVARD_API_KEY;

    const res = await fetch(
        `https://api.harvardartmuseums.org/object/${id}?apikey=${apiKey}`
    );

    if (!res.ok) return null;

    return res.json();
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const art = await fetchArt(id);

    if (!art) notFound();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">{art.title}</h1>
            <p className="text-gray-600 mb-4">{art.people?.[0]?.name}</p>
            {art.primaryimageurl ? (
                <img
                    src={art.primaryimageurl}
                    alt={art.title}
                    className="max-w-full mb-4"
                />
            ) : (
                <p>No image available.</p>
            )}
            <p>{art.description || 'No description available.'}</p>
        </div>
    );
}
