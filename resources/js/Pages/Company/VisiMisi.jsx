import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function VisiMisi() {
    return (
        <AuthenticatedLayout>
            <Head title="Visi dan Misi" />

            <div className="max-w-4xl mx-auto space-y-8">
                <section>
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">Visi</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Menjadi perusahaan teknologi informasi terdepan yang memberikan solusi inovatif, terpercaya, dan bernilai tinggi dalam transformasi digital.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">Misi</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Mengembangkan produk dan layanan berbasis teknologi terkini.</li>
                        <li>Memberikan pelayanan terbaik kepada klien dengan profesionalisme tinggi.</li>
                        <li>Menjadi mitra strategis dalam membangun ekosistem digital nasional.</li>
                        <li>Memberdayakan talenta lokal untuk mendorong kemajuan teknologi di Indonesia.</li>
                    </ul>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
