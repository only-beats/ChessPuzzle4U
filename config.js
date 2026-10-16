// Firebase web config (these values are public identifiers; security comes from database.rules.json).
// Analytics is not used, so the bundler-only "firebase/app" import from the console snippet is not needed.
export const firebaseConfig = {
  apiKey: "AIzaSyBBFtRv5FKmtTi6caBECkfAU7YQryHHaN4",
  authDomain: "chesspuzzle4u.firebaseapp.com",
  databaseURL: "https://chesspuzzle4u-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chesspuzzle4u",
  storageBucket: "chesspuzzle4u.firebasestorage.app",
  messagingSenderId: "425733737748",
  appId: "1:425733737748:web:3a87a5eed89980afba8601"
};
export const SOUNDS = {
  move: "Audio/move.mp3", capture: "Audio/capture.mp3", check: "Audio/check.mp3",
  correct: "Audio/correct.mp3", wrong: "Audio/illegal.mp3", win: "Audio/gameend.mp3", promote: "Audio/promote.mp3"
};
export const CATS = [
  { k: 0, label: "All", img: "Mate/logoAll.png" },
  { k: 1, label: "Mate in 1", img: "Mate/logo01.png" }, { k: 2, label: "Mate in 2", img: "Mate/logo02.png" },
  { k: 3, label: "Mate in 3", img: "Mate/logo03.png" }, { k: 4, label: "Mate in 4", img: "Mate/logo04.png" },
  { k: 5, label: "Mate in 5", img: "Mate/logo05.png" }
];