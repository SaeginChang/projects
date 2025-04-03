import Link from 'next/link';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <nav className="p-4 bg-black text-white flex gap-4">
            <Link href="/">Home</Link>
        </nav>
        <main className="p-6">{children}</main>
        </body>
        </html>
    );
}
