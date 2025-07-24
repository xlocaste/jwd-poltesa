import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ArtikelList({ artikel, auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Daftar Artikel" />

            <div className="p-6 bg-white shadow rounded-lg">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Daftar Artikel</h2>
                    <Link
                        href={route('artikel.create')}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                    >
                        + Tambah Artikel
                    </Link>
                </div>

                {artikel.length > 0 ? (
                    <ul className="space-y-4">
                        {artikel.map((item) => (
                            <li key={item.id} className="border p-4 rounded hover:shadow">
                                <div className="font-semibold text-lg text-gray-800">{item.judul}</div>
                                <a
                                    href={`/storage/${item.file_path}`}
                                    target="_blank"
                                    className="text-blue-600 hover:underline text-sm"
                                    rel="noopener noreferrer"
                                >
                                    Lihat / Download PDF
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">Belum ada artikel yang diunggah.</p>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
