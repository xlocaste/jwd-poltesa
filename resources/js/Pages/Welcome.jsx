import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome() {
    return (
        <div className="min-h-screen grid grid-cols-5 border text-sm font-mono">
            {/* Sidebar */}
            <aside className="col-span-1 border-r flex flex-col items-center p-4 space-y-6">
                <div className="text-center">
                    <ApplicationLogo className="w-20 h-20 mx-auto" />
                    <p className="mt-2 text-xs">Logo</p>
                </div>

                <nav className="text-sm space-y-2 text-left w-full px-4">
                    <div className="font-semibold">Artikel</div>
                    <ul className="list-disc list-inside ms-4">
                        <li>Konsep Teknolgi Informasi</li>
                        <li>Dst..</li>
                    </ul>

                    <div className="mt-4">Event Galery</div>
                    <div>Foto Klien</div>
                    <div>Login kami</div>

                    <div className="mt-6">
                        <Link href={route('login')} className="block">
                            Sign in
                        </Link>
                        <Link href={route('register')} className="block">
                            Sign up
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* Main Layout */}
            <div className="col-span-4 flex flex-col">
                {/* Header */}
                <header className="border-b p-4 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-700 tracking-wide">
                        Nama perusahaan
                    </h1>
                </header>

                {/* Horizontal Navigation */}
                <nav className="border-b flex space-x-4 px-6 py-2 text-sm">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="#" className="hover:underline">
                        Profile
                    </Link>
                    <Link href="#" className="hover:underline">
                        Visi dan
                    </Link>
                    <Link href="#" className="hover:underline">
                        Produk kami
                    </Link>
                    <Link href="#" className="hover:underline">
                        Kontak
                    </Link>
                    <Link href="#" className="font-bold underline">
                        About us
                    </Link>
                </nav>

                {/* Page Content */}
                <main className="flex-1 p-6 bg-white">
                    {/* Konten utama bisa ditambahkan di sini */}
                    <p className="text-gray-500">Selamat datang di halaman utama.</p>
                </main>

                {/* Footer */}
                <footer className="text-right px-6 py-2 text-xs text-gray-500 border-t">
                    Design by : ....
                </footer>
            </div>
        </div>
    );
}
