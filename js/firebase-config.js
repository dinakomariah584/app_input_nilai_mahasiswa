// js/firebase-config.js

/**
 * @fileoverview Modul ini berisi konfigurasi inisialisasi Firebase menggunakan gaya Compat (v8).
 * Catatan: Variabel 'db' harus dideklarasikan dengan 'var' atau diakses secara global agar terlihat di modul lain.
 */

const firebaseConfig = {
  apiKey: "AIzaSyAON5ErXpbpXL5UjB65S_BTokDd4mHnN6M",
  authDomain: "aplikasiinputnilaimahasi-bc804.firebaseapp.com",
  projectId: "aplikasiinputnilaimahasi-bc804",
  storageBucket: "aplikasiinputnilaimahasi-bc804.firebasestorage.app",
  messagingSenderId: "521752946595",
  appId: "1:521752946595:web:873e7be91c8f56fed8dc16",
  measurementId: "G-GQW1NERKVT"
};

// Inisialisasi Firebase (Gaya Compat)
firebase.initializeApp(firebaseConfig);

// Inisialisasi Cloud Firestore dan menjadikannya variabel global
var db = firebase.firestore();