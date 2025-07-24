import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    const [artikelOpen, setArtikelOpen] = useState(false);

    return (
        <div className="min-h-screen grid grid-cols-5 font-sans text-sm text-gray-700 bg-gray-50">
            {/* Sidebar */}
            <aside className="col-span-1 bg-white border-r shadow-sm flex flex-col items-center p-6 space-y-8">
                {/* Logo */}
                <div className="text-center">
                    <ApplicationLogo className="w-24 h-24 mx-auto mb-2" />
                    <p className="text-gray-600 text-xs">Logo</p>
                </div>

                {/* Navigation Menu */}
                <nav className="w-full space-y-6 text-left">
                    {/* Artikel Dropdown */}
                    <div className="w-full">
                        <button
                            onClick={() => setArtikelOpen(!artikelOpen)}
                            className="w-full flex items-center justify-between text-gray-800 font-semibold mb-1 hover:text-blue-600"
                        >
                            <span>Artikel</span>
                            <svg
                                className={`w-4 h-4 transition-transform ${artikelOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {artikelOpen && (
                            <ul className="list-disc list-inside text-gray-600 ms-4 space-y-1">
                                <Link href={route('artikel.index')}>Artikel</Link>
                                <li>Manajemen Data</li>
                                <li>Keamanan Jaringan</li>
                                <li>Dst..</li>
                            </ul>
                        )}
                    </div>

                    {/* Static Links */}
                    <div className="space-y-1 text-gray-600">
                        <p className="hover:underline cursor-pointer">Event Galery</p>
                        <p className="hover:underline cursor-pointer">Foto Klien</p>
                        <p className="hover:underline cursor-pointer">Login kami</p>
                    </div>

                    {/* Auth Section */}
                    <div className="pt-4 border-t">
                        {!user ? (
                            <>
                                <Link href={route('login')} className="block hover:underline text-blue-600">
                                    Sign in
                                </Link>
                                <Link href={route('register')} className="block hover:underline text-blue-600">
                                    Sign up
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

            {/* Main Content */}
            <div className="col-span-4 flex flex-col">
                {/* Header */}
                <header className="bg-white border-b shadow p-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 tracking-wide uppercase">
                        Nama Perusahaan
                    </h1>
                </header>

                {/* Horizontal Navigation */}
                <nav className="bg-gray-100 border-b px-8 py-3 flex space-x-6 text-sm font-medium">
                    <Link href="/" className="text-gray-700 hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                        Profile
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                        Visi dan
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                        Produk kami
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                        Kontak
                    </Link>
                    <Link href="#" className="text-blue-700 underline font-semibold">
                        About us
                    </Link>
                </nav>

                {/* Page Content */}
                <main className="flex-1 p-6 bg-white rounded shadow-inner">
                    {children}
                </main>

                {/* Footer */}
                <footer className="text-right px-6 py-4 text-xs text-gray-400 border-t">
                    Design by : ...
                </footer>
            </div>
        </div>
    );
}
