import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function DaftarKlien() {
    const klien = [
        "PT Maju Bersama",
        "CV Digital Nusantara",
        "Universitas Teknologi",
        "RS Harapan Sehat",
        "Dinas Kominfo Kota",
        "Toko Online Kita",
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Daftar Klien" />
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-blue-800">Klien Kami</h1>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                    {klien.map((nama, i) => (
                        <li key={i} className="pl-2">{nama}</li>
                    ))}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
}
