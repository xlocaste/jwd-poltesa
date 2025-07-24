import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function GalleryFoto() {
    return (
        <AuthenticatedLayout>
            <Head title="Gallery Foto" />
            <div className="max-w-5xl mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-blue-800">Gallery Foto</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(8)].map((_, i) => (
                        <img
                            key={i}
                            src={`https://source.unsplash.com/300x200/?technology,office&sig=${i}`}
                            alt={`Foto ${i + 1}`}
                            className="rounded shadow border"
                        />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
