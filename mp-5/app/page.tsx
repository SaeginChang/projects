'use client';

import React, { useState } from 'react';

export default function HomePage() {
  const [url, setUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    try {
      const res = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, alias }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong');
      } else {
        setShortUrl(data.shortUrl);
      }
    } catch {
      setError('Network error or server unavailable.');
    }
  };

  return (
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-6">URL Shortener</h1>
        <h1 className="text-2xl italic mb-6">https://projects-mp5.vercel.app/
        <span className="text-blue-600">{alias || 'alias'}</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
          <input
              type="text"
              placeholder="Enter full URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 border rounded"
              required
          />
          <input
              type="text"
              placeholder="Choose your alias"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              className="w-full p-2 border rounded"
              required
          />
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Shorten URL
          </button>
        </form>

        {shortUrl && (
            <div className="mt-4">
              <p className="text-green-600 font-semibold">Shortened URL:</p>
              <a href={shortUrl} target="_blank" className="text-blue-500 underline">
                {shortUrl}
              </a>
            </div>
        )}

        {error && (
            <div className="mt-4 text-red-600">
              <p>{error}</p>
            </div>
        )}
      </main>
  );
}
