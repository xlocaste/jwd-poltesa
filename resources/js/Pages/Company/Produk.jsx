import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Produk() {
    return (
        <AuthenticatedLayout>
            <Head title="Produk Kami" />

            <div className="max-w-5xl mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-blue-800">Produk Kami</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            nama: "Sistem Informasi Akademik",
                            deskripsi: "Aplikasi berbasis web untuk mengelola data mahasiswa, dosen, dan perkuliahan.",
                        },
                        {
                            nama: "Aplikasi Inventory",
                            deskripsi: "Solusi manajemen stok dan gudang berbasis cloud untuk bisnis kecil dan menengah.",
                        },
                        {
                            nama: "Website Company Profile",
                            deskripsi: "Pembuatan website profesional untuk meningkatkan kepercayaan dan branding perusahaan.",
                        },
                        {
                            nama: "E-Commerce",
                            deskripsi: "Platform toko online lengkap dengan fitur keranjang, pembayaran, dan pelacakan pesanan.",
                        },
                        {
                            nama: "Aplikasi Absensi Karyawan",
                            deskripsi: "Aplikasi berbasis mobile/web untuk presensi karyawan secara real-time.",
                        },
                        {
                            nama: "Sistem Pemesanan Event",
                            deskripsi: "Solusi digital untuk mengelola event, pendaftaran peserta, dan tiket digital.",
                        },
                    ].map((produk, idx) => (
                        <div key={idx} className="bg-white p-5 shadow rounded border">
                            <h2 className="font-semibold text-xl text-blue-700 mb-2">{produk.nama}</h2>
                            <p className="text-gray-600">{produk.deskripsi}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
