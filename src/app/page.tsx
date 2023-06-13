import AgricZoneObjective from '@/components/AgriczoneObjective';
import Form from '@/components/form/Form';

import { Metadata } from 'next';
export async function generateMetadata(): Promise<Metadata> {
  // read route params
  return {
    title: 'Waitlist | Agric zone',
    description:
      'Making agriculture profitable, exciting and innovative for farmers',
    openGraph: {
      type: 'website',
      url: 'https://agriczone.com',
      title: 'Waitlist | Agric zone',
      description:
        'Making agriculture profitable, exciting and innovative for farmers',
      siteName: 'Agric zone',
      images: `/agric_zone_logo.png`,
    },
    twitter: {
      title: 'Waitlist | Agric zone',
      card: 'summary_large_image',
      site: 'https://agriczone.com',
      creator: 'Agric zone',
      images: `/agric_zone_logo.png`,
      description:
        'Making agriculture profitable, exciting and innovative for farmers',
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row flex-1 h-full md:h-screen">
      <div className="w-full mb-10 md:w-3/6">
        <Form />
      </div>
      <AgricZoneObjective />
    </main>
  );
}
