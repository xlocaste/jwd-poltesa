import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <AuthenticatedLayout>
            <Head title="Selamat Datang" />

            <div className="text-center py-12">
                <h1 className="text-4xl font-bold text-blue-800 mb-4">Selamat Datang di Teknokita.id</h1>
                <p className="text-gray-600 text-lg max-w-xl mx-auto">
                    Kami adalah mitra digital terpercaya Anda dalam mewujudkan transformasi teknologi dan pengembangan produk digital berkualitas tinggi.
                </p>

                <div className="mt-8">
                    <a
                        href="/produk"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
                    >
                        Jelajahi Produk Kami
                    </a>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
