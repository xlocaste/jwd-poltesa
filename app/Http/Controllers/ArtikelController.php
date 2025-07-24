<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    public function index()
    {
        $daftarArtikel = Artikel::all();

        return Inertia::render('Artikel/List', [
            'artikel' => $daftarArtikel,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'file' => 'required|file|mimes:pdf|max:2048', // max 2MB
        ]);

        $path = $request->file('file')->store('artikel_files', 'public');

        Artikel::create([
            'judul' => $request->judul,
            'file' => $path,
        ]);

        return redirect()->route('artikel.index')->with('success', 'Artikel berhasil ditambahkan.');
    }

    public function create()
    {
        return Inertia::render('Artikel/Add');
    }
}
