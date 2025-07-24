import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function GaleriKlien() {
    const clientPhotos = [
        'https://picsum.photos/id/1044/600/400',
        'https://picsum.photos/id/1052/600/400',
        'https://picsum.photos/id/1066/600/400',
        'https://picsum.photos/id/1070/600/400',
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Galeri Klien" />
            <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                    Foto Klien
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {clientPhotos.map((url, i) => (
                        <div
                            key={i}
                            className="overflow-hidden rounded-lg shadow hover:shadow-lg transition"
                        >
                            <img
                                src={url}
                                alt={`Klien ${i + 1}`}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
