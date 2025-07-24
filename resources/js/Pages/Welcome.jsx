import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen grid grid-cols-5 font-sans text-sm text-gray-700 bg-gray-50">
            {/* Sidebar */}
            <aside className="col-span-1 bg-white border-r shadow-sm flex flex-col items-center p-6 space-y-8">
                {/* Logo */}
                <div className="text-center">
                    <ApplicationLogo className="w-24 h-24 mx-auto mb-2" />
                    <p className="text-gray-600 text-xs">Logo</p>
                </div>

                {/* Menu */}
                <nav className="w-full space-y-6 text-left">
                    <div className="space-y-1 text-gray-600">
                        <p className="hover:underline cursor-pointer">Event Galery</p>
                        <p className="hover:underline cursor-pointer">Foto Klien</p>
                        <p className="hover:underline cursor-pointer">Login Kami</p>
                    </div>

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
                        Selamat Datang
                    </h1>
                </header>

                {/* Horizontal Navigation */}
                <nav className="bg-gray-100 border-b px-8 py-3 flex space-x-6 text-sm font-medium">
                    <Link href="/" className="text-blue-700 underline font-semibold">
                        Home
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                        Profile
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                        Visi Misi
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                        Produk Kami
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                        Kontak
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600">
                        About Us
                    </Link>
                </nav>

                {/* Page Content */}
                <main className="flex-1 p-6 bg-white rounded shadow-inner">
                    <h2 className="text-2xl font-semibold mb-4">Tentang Kami</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Selamat datang di website resmi kami. Kami menyediakan berbagai layanan dan informasi
                        tentang kegiatan, produk, serta layanan terbaik yang kami miliki. Silakan jelajahi menu
                        di atas untuk mengetahui lebih lanjut.
                    </p>
                </main>

                {/* Footer */}
                <footer className="text-right px-6 py-4 text-xs text-gray-400 border-t">
                    Design by: ...
                </footer>
            </div>
        </div>
    );
}
