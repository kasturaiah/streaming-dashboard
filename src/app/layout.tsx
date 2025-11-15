import './globals.css';
import Header from '../components/Header';


export const metadata = {
title: 'Streaming Dashboard',
description: 'Small Netflix/Hulu clone built with Next.js 14 + Tailwind + OMDb',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="bg-neutral-900 text-white">
<Header />
<main className="pt-20 min-h-screen">{children}</main>
</body>
</html>
);
}