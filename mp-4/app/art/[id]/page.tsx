interface ArtProps {
    params: {
        id: string;
    };
}

export default async function ArtDetailPage({ params }: ArtProps) {
    const res = await fetch(`https://api.harvardartmuseums.org/object/${params.id}?apikey=${process.env.HARVARD_API_KEY}`);
    if (!res.ok) return <p>Failed to load artwork.</p>;

    const data = await res.json();

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
