import { notFound } from 'next/navigation';

interface ArtData {
    id: number;
    title: string;
    people?: { name: string }[];
    primaryimageurl?: string;
    description?: string;
}

async function fetchArtDetails(id: string): Promise<ArtData | null> {
    const apiKey = process.env.HARVARD_API_KEY;
    const res = await fetch(`https://api.harvardartmuseums.org/object/${id}?apikey=${apiKey}`)

    if (!res.ok) return null;

    return await res.json();
}


export default async function ArtDetailPage({ params }: { params: { id: string }; }) {
    const data = await fetchArtDetails(params.id);

    if (!data) notFound();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
            <p className="text-gray-600 mb-4">{data.people?.[0]?.name}</p>
            {data.primaryimageurl ? (
                <img src={data.primaryimageurl} alt={data.title} className="max-w-full mb-4" />
            ) : (
                <p>No image available.</p>
            )}
            <p>{data.description || 'No description available.'}</p>
        </div>
    );
}
