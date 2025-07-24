import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Add({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        judul: '',
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('artikel.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded p-6">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Tambah Artikel</h1>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4">
                        <label htmlFor="judul" className="block text-sm font-medium text-gray-700">Judul</label>
                        <input
                            type="text"
                            id="judul"
                            value={data.judul}
                            onChange={(e) => setData('judul', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
                        />
                        {errors.judul && <div className="text-red-500 text-sm mt-1">{errors.judul}</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload File (PDF)</label>
                        <input
                            type="file"
                            id="file"
                            accept="application/pdf"
                            onChange={(e) => setData('file', e.target.files[0])}
                            className="mt-1 block w-full text-sm text-gray-700"
                        />
                        {errors.file && <div className="text-red-500 text-sm mt-1">{errors.file}</div>}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
