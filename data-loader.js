import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    projectId: "exalted-avatar-12ts5",
    appId: "1:148363930461:web:ff517777a657869c70d6b4",
    apiKey: "AIzaSyABrpR6TvQbu68HiG9do3pK0soWNcW4KcQ",
    authDomain: "exalted-avatar-12ts5.firebaseapp.com",
    storageBucket: "exalted-avatar-12ts5.firebasestorage.app",
    messagingSenderId: "148363930461"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "ai-studio-b0edc278-9d9f-4574-988b-15d1c1e8f3d2");

async function loadContent() {
    try {
        const docRef = doc(db, "content", "main");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();

            if (data.heroTitle) {
                const el = document.getElementById('hero-title');
                if (el) el.innerHTML = data.heroTitle.replace(/\n/g, '<br>');
            }
            if (data.heroDesc) {
                const el = document.getElementById('hero-desc');
                if (el) el.innerText = data.heroDesc;
            }
            if (data.aboutText) {
                const el = document.getElementById('text-about');
                if (el) el.innerText = data.aboutText;
            }

            // Update Projects if defined in Firestore
            for (let i = 1; i <= 10; i++) {
                if (data['p' + i + 'Title']) {
                    const el = document.getElementById('p' + i + '-title');
                    if (el) el.innerText = data['p' + i + 'Title'];
                }
                if (data['p' + i + 'Role']) {
                    const el = document.getElementById('p' + i + '-role');
                    if (el) el.innerText = data['p' + i + 'Role'];
                }
                if (data['p' + i + 'Achieve']) {
                    const el = document.getElementById('p' + i + '-achieve');
                    if (el) el.innerText = data['p' + i + 'Achieve'];
                }
                if (data['p' + i + 'Img']) {
                    const el = document.getElementById('p' + i + '-img');
                    if (el) el.src = data['p' + i + 'Img'];
                }
            }
        }
    } catch (e) {
        console.log("Error loading dynamic content:", e);
    }
}

document.addEventListener("DOMContentLoaded", loadContent);
