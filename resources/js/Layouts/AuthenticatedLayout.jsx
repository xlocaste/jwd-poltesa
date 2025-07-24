import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen grid grid-cols-5 border">
            {/* Sidebar */}
            <aside className="col-span-1 border-r flex flex-col items-center p-4 space-y-6">
                <div className="text-center">
                    <ApplicationLogo className="w-20 h-20 mx-auto" />
                    <p className="mt-2 text-sm">Logo</p>
                </div>

                <nav className="text-sm space-y-2">
                    <div className="font-semibold">Artikel</div>
                    <ul className="list-disc list-inside text-left ms-4">
                        <li>Konsep Teknologi Informasi</li>
                        <li>Dst..</li>
                    </ul>

                    <div className="mt-4">Event Galery</div>
                    <div>Foto Klien</div>
                    <div>Login kami</div>

                    <div className="mt-4">
                        <Link href={route('login')} className="block">
                            Sign in
                        </Link>
                        <Link href={route('register')} className="block">
                            Sign up
                        </Link>
                        {/* Tombol Logout */}
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="mt-2 text-red-600 hover:underline"
                        >
                            Log Out
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
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
                <main className="flex-1 p-6 bg-white">{children}</main>

                {/* Footer */}
                <footer className="text-right px-6 py-2 text-xs text-gray-500 border-t">
                    Design by : ...
                </footer>
            </div>
        </div>
    );
}
