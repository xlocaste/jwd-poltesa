<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('/artikel')->name('artikel.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/create', [ArtikelController::class, 'create'])->name('create');
        Route::post('/', [ArtikelController::class, 'store'])->name('store');
        Route::put('/{artikelId}', [ArtikelController::class, 'update'])->name('update');
        Route::delete('/{artikelId}', [ArtikelController::class, 'destroy'])->name('destroy');
        Route::get('/{artikelId}/edit', [ArtikelController::class, 'edit'])->name('edit');
        Route::get('/{artikelId}/detail', [ArtikelController::class, 'show'])->name('show');
        Route::get('/search', [ArtikelController::class, 'search'])->name('search');
    });
    Route::get('/', [ArtikelController::class, 'index'])->name('index');
});

Route::get('/profile', function () {
    return Inertia::render('Company/Profile');
})->name('profile');

Route::get('/visi-misi', function () {
    return Inertia::render('Company/VisiMisi');
})->name('visi-misi');

Route::get('/produk', function () {
    return Inertia::render('Company/Produk');
})->name('produk');

Route::get('/gallery-foto', fn() => Inertia::render('Company/GalleryFoto'))->name('gallery');
Route::get('/daftar-klien', fn() => Inertia::render('Company/DaftarKlien'))->name('klien');
Route::get('/kontak-kami', fn() => Inertia::render('Company/KontakKami'))->name('kontak');
Route::get('/kegiatan', fn() => Inertia::render('Company/Kegiatan'))->name('kegiatan');
Route::get('/tentang-kami', fn() => Inertia::render('Company/AboutUs'))->name('about');
Route::get('/galeri-event', fn () => Inertia::render('GaleriEvent'))->name('galeri.event');
Route::get('/foto-klien', fn () => Inertia::render('GaleriKlien'))->name('galeri.klien');

require __DIR__.'/auth.php';
