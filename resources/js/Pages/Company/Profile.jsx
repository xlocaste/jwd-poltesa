import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Profile() {
    return (
        <AuthenticatedLayout>
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Profil Perusahaan</h2>

                <section className="space-y-4">
                    <p>
                        <strong>Teknokita.id</strong> adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital
                        untuk UMKM dan instansi pemerintah. Kami berdiri sejak tahun 2018 dan telah berpengalaman
                        dalam membangun berbagai sistem informasi berbasis web dan mobile.
                    </p>

                    <p>
                        Dengan tim yang solid dan berpengalaman, kami mengutamakan kualitas, ketepatan waktu, serta layanan
                        purna jual terbaik untuk setiap klien kami.
                    </p>

                    <div className="bg-gray-100 p-4 rounded shadow-sm">
                        <p><strong>Alamat:</strong> Jl. Teknologi No. 88, Jakarta</p>
                        <p><strong>Email:</strong> info@teknokita.id</p>
                        <p><strong>Telepon:</strong> +62 812-3456-7890</p>
                        <p><strong>Website:</strong> www.teknokita.id</p>
                    </div>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
