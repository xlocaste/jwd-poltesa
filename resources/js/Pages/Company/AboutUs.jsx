import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AboutUs() {
    return (
        <AuthenticatedLayout>
            <Head title="Tentang Kami" />

            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold text-blue-800">Tentang Teknokita.id</h1>

                <p className="text-gray-700">
                    <strong>Teknokita.id</strong> adalah perusahaan teknologi digital yang berdedikasi dalam
                    pengembangan aplikasi web, sistem informasi, dan solusi berbasis teknologi untuk mendukung
                    transformasi digital di Indonesia. Berdiri sejak tahun 2020, kami telah melayani berbagai instansi
                    pemerintah, swasta, dan pendidikan.
                </p>

                <p className="text-gray-700">
                    Kami percaya bahwa teknologi harus mudah diakses, efisien, dan dapat disesuaikan dengan kebutuhan
                    pengguna. Oleh karena itu, kami selalu mengedepankan pendekatan kolaboratif dalam setiap proyek
                    yang kami tangani.
                </p>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800">Fokus Layanan Kami</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>Pengembangan Aplikasi Web & Mobile</li>
                        <li>Sistem Informasi Sekolah, Universitas, dan Pemerintah</li>
                        <li>Konsultasi dan Digitalisasi Proses Bisnis</li>
                        <li>Desain UI/UX Profesional</li>
                        <li>Layanan Cloud & Infrastruktur</li>
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
