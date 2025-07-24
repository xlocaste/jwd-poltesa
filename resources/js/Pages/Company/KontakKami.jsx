import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function KontakKami() {
    return (
        <AuthenticatedLayout>
            <Head title="Kontak Kami" />
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold text-blue-800">Hubungi Kami</h1>
                <div className="space-y-4 text-gray-700">
                    <p><strong>Alamat:</strong> Jl. Teknokita No. 123, Jakarta</p>
                    <p><strong>Email:</strong> info@teknokita.id</p>
                    <p><strong>Telepon:</strong> (021) 1234-5678</p>
                    <p><strong>Jam Operasional:</strong> Senin - Jumat, 08.00 - 17.00</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
