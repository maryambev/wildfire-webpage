import dynamic from 'next/dynamic';

const MapClient = dynamic(() => import('./MapClient'), { ssr: false });

export const metadata = {
  title: 'Map',
  description: 'Page description',
};

export default function MapPage() {
  return <MapClient />;
}
