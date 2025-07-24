import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Kegiatan() {
    const kegiatan = [
        {
            judul: "Pelatihan Teknologi Web 2024",
            tanggal: "12 Januari 2024",
            deskripsi: "Pelatihan internal bagi staf mengenai tren teknologi web terbaru.",
        },
        {
            judul: "Kunjungan ke Mitra Industri",
            tanggal: "5 Maret 2024",
            deskripsi: "Kunjungan dan diskusi kerja sama dengan mitra industri strategis.",
        },
        {
            judul: "Pameran Teknologi Nasional",
            tanggal: "20 Mei 2024",
            deskripsi: "Partisipasi dalam expo nasional teknologi di Jakarta Convention Center.",
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Kegiatan Perusahaan" />
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold text-blue-800">Kegiatan Perusahaan</h1>
                {kegiatan.map((item, i) => (
                    <div key={i} className="bg-white border shadow p-4 rounded">
                        <h2 className="text-xl font-semibold text-gray-800">{item.judul}</h2>
                        <p className="text-sm text-gray-500 mb-1">{item.tanggal}</p>
                        <p className="text-gray-700">{item.deskripsi}</p>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
