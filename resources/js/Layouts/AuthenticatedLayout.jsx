import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    const [artikelOpen, setArtikelOpen] = useState(false);

    return (
        <div className="min-h-screen grid grid-cols-5 bg-gray-50 text-gray-700 text-sm font-sans">
            {/* Sidebar */}
            <aside className="col-span-1 bg-white border-r shadow-sm flex flex-col items-center p-6 space-y-8">
                {/* Logo */}
                <div className="text-center">
                    <ApplicationLogo className="w-24 h-24 mx-auto mb-2" />
                    <p className="text-gray-600 text-xs">Teknokita.id</p>
                </div>

                {/* Sidebar Menu */}
                <nav className="w-full space-y-6 text-left">
                    {/* Artikel Dropdown */}
                    <div>
                        <button
                            onClick={() => setArtikelOpen(!artikelOpen)}
                            className="w-full flex items-center justify-between font-semibold text-gray-800 hover:text-blue-600"
                        >
                            <span>Artikel</span>
                            <svg
                                className={`w-4 h-4 transition-transform ${artikelOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {artikelOpen && (
                            <ul className="mt-2 ml-4 space-y-1 list-disc list-inside text-gray-600">
                                <li><Link href={route('artikel.index')} className="hover:underline">Daftar Artikel</Link></li>
                                <li><Link href={route('artikel.create')} className="hover:underline">Tambah Artikel</Link></li>
                            </ul>
                        )}
                    </div>

                    {/* Static Links */}
                    <div className="space-y-1 text-gray-600">
                        <Link href={route('galeri.event')} className="hover:underline block">Galeri Event</Link>
                        <Link href={route('galeri.klien')} className="hover:underline block">Foto Klien</Link>
                    </div>

                    {/* Authentication */}
                    <div className="pt-4 border-t">
                        {!user ? (
                            <>
                                <Link href={route('login')} className="block text-blue-600 hover:underline">
                                    Sign In
                                </Link>
                                <Link href={route('register')} className="block text-blue-600 hover:underline">
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="mt-2 text-red-600 hover:underline"
                            >
                                Log Out
                            </Link>
                        )}
                    </div>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="col-span-4 flex flex-col min-h-screen">
                {/* Header */}
                <header className="bg-white border-b shadow p-4 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
                        Teknokita.id
                    </h1>
                </header>

                {/* Horizontal Navigation */}
                <nav className="bg-gray-100 border-b px-8 py-3 flex flex-wrap gap-4 text-sm font-medium">
                    <Link href="/dashboard" className="hover:text-blue-600">Home</Link>
                    <Link href="/profile" className="hover:text-blue-600">Profil</Link>
                    <Link href="/visi-misi" className="hover:text-blue-600">Visi Misi</Link>
                    <Link href="/produk" className="hover:text-blue-600">Produk</Link>
                    <Link href="/gallery-foto" className="hover:text-blue-600">Galeri</Link>
                    <Link href="/daftar-klien" className="hover:text-blue-600">Klien</Link>
                    <Link href="/kontak-kami" className="hover:text-blue-600">Kontak</Link>
                    <Link href="/tentang-kami" className="text-blue-700 underline font-semibold">Tentang Kami</Link>
                </nav>

                {/* Page Content */}
                <main className="flex-1 p-6 bg-white shadow-inner overflow-y-auto">
                    {children}
                </main>

                {/* Footer */}
                <footer className="text-right px-6 py-4 text-xs text-gray-400 border-t">
                    Design by: Irfandi
                </footer>
            </div>
        </div>
    );
}
