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
            
            // Update About Text
            
            if (data.heroTitle) {
                const el = document.getElementById('hero-title');
                if (el) el.innerHTML = data.heroTitle.replace(/\n/g, '<br>');
    
            // Update Services
            for(let i=1; i<=6; i++) {
                if (data['s'+i+'Title']) { const el = document.getElementById('s'+i+'-title'); if(el) el.innerText = data['s'+i+'Title']; }
                if (data['s'+i+'Subtitle']) { const el = document.getElementById('s'+i+'-subtitle'); if(el) el.innerText = data['s'+i+'Subtitle']; }
                if (data['s'+i+'Icon']) { const el = document.getElementById('s'+i+'-icon'); if(el) el.innerText = data['s'+i+'Icon']; }
                if (data['s'+i+'Desc']) { const el = document.getElementById('s'+i+'-card'); if(el) el.dataset.desc = data['s'+i+'Desc']; }
                if (data['s'+i+'Img']) { const el = document.getElementById('s'+i+'-card'); if(el) el.dataset.img = data['s'+i+'Img']; }
                
                // Also update card dataset title for modal
                if (data['s'+i+'Title']) { const el = document.getElementById('s'+i+'-card'); if(el) el.dataset.title = data['s'+i+'Title']; }
            }

            // Update Projects
            for(let i=1; i<=2; i++) {
                if (data['p'+i+'Title']) { const el = document.getElementById('p'+i+'-title'); if(el) el.innerText = data['p'+i+'Title']; }
                if (data['p'+i+'Tag']) { const el = document.getElementById('p'+i+'-tag'); if(el) el.innerText = data['p'+i+'Tag']; }
                if (data['p'+i+'Role']) { const el = document.getElementById('p'+i+'-role'); if(el) el.innerText = data['p'+i+'Role']; }
                if (data['p'+i+'Achieve']) { const el = document.getElementById('p'+i+'-achieve'); if(el) el.innerText = data['p'+i+'Achieve']; }
                if (data['p'+i+'Img']) { const el = document.getElementById('p'+i+'-img'); if(el) el.src = data['p'+i+'Img']; }
            }
        }
            if (data.heroText) {
                const el = document.getElementById('hero-text');
                if (el) el.innerText = data.heroText;
    
            // Update Services
            for(let i=1; i<=6; i++) {
                if (data['s'+i+'Title']) { const el = document.getElementById('s'+i+'-title'); if(el) el.innerText = data['s'+i+'Title']; }
                if (data['s'+i+'Subtitle']) { const el = document.getElementById('s'+i+'-subtitle'); if(el) el.innerText = data['s'+i+'Subtitle']; }
                if (data['s'+i+'Icon']) { const el = document.getElementById('s'+i+'-icon'); if(el) el.innerText = data['s'+i+'Icon']; }
                if (data['s'+i+'Desc']) { const el = document.getElementById('s'+i+'-card'); if(el) el.dataset.desc = data['s'+i+'Desc']; }
                if (data['s'+i+'Img']) { const el = document.getElementById('s'+i+'-card'); if(el) el.dataset.img = data['s'+i+'Img']; }
                
                // Also update card dataset title for modal
                if (data['s'+i+'Title']) { const el = document.getElementById('s'+i+'-card'); if(el) el.dataset.title = data['s'+i+'Title']; }
            }

            // Update Projects
            for(let i=1; i<=2; i++) {
                if (data['p'+i+'Title']) { const el = document.getElementById('p'+i+'-title'); if(el) el.innerText = data['p'+i+'Title']; }
                if (data['p'+i+'Tag']) { const el = document.getElementById('p'+i+'-tag'); if(el) el.innerText = data['p'+i+'Tag']; }
                if (data['p'+i+'Role']) { const el = document.getElementById('p'+i+'-role'); if(el) el.innerText = data['p'+i+'Role']; }
                if (data['p'+i+'Achieve']) { const el = document.getElementById('p'+i+'-achieve'); if(el) el.innerText = data['p'+i+'Achieve']; }
                if (data['p'+i+'Img']) { const el = document.getElementById('p'+i+'-img'); if(el) el.src = data['p'+i+'Img']; }
            }
        }
            if (data.aboutText) { const el = document.getElementById('text-about'); if (el) el.innerText = data.aboutText; }
            if (data.team1Name) { const el = document.getElementById('t1-name'); if(el) el.innerText = data.team1Name; }
            if (data.team1Role) { const el = document.getElementById('t1-role'); if(el) el.innerText = data.team1Role; }
            if (data.team1Link) { const el = document.getElementById('t1-link'); if(el) el.href = data.team1Link; }
            
            if (data.team2Name) { const el = document.getElementById('t2-name'); if(el) el.innerText = data.team2Name; }
            if (data.team2Role) { const el = document.getElementById('t2-role'); if(el) el.innerText = data.team2Role; }
            if (data.team2Link) { const el = document.getElementById('t2-link'); if(el) el.href = data.team2Link; }
            
            if (data.team3Name) { const el = document.getElementById('t3-name'); if(el) el.innerText = data.team3Name; }
            if (data.team3Role) { const el = document.getElementById('t3-role'); if(el) el.innerText = data.team3Role; }
            if (data.team3Link) { const el = document.getElementById('t3-link'); if(el) el.href = data.team3Link; }
            
            if (data.team4Name) { const el = document.getElementById('t4-name'); if(el) el.innerText = data.team4Name; }
            if (data.team4Role) { const el = document.getElementById('t4-role'); if(el) el.innerText = data.team4Role; }
            if (data.team4Link) { const el = document.getElementById('t4-link'); if(el) el.href = data.team4Link; }
            
            if (data.team5Name) { const el = document.getElementById('t5-name'); if(el) el.innerText = data.team5Name; }
            if (data.team5Role) { const el = document.getElementById('t5-role'); if(el) el.innerText = data.team5Role; }
            if (data.team5Link) { const el = document.getElementById('t5-link'); if(el) el.href = data.team5Link; }



            // Update Services
            for(let i=1; i<=6; i++) {
                if (data['s'+i+'Title']) { const el = document.getElementById('s'+i+'-title'); if(el) el.innerText = data['s'+i+'Title']; }
                if (data['s'+i+'Subtitle']) { const el = document.getElementById('s'+i+'-subtitle'); if(el) el.innerText = data['s'+i+'Subtitle']; }
                if (data['s'+i+'Icon']) { const el = document.getElementById('s'+i+'-icon'); if(el) el.innerText = data['s'+i+'Icon']; }
                if (data['s'+i+'Desc']) { const el = document.getElementById('s'+i+'-card'); if(el) el.dataset.desc = data['s'+i+'Desc']; }
                if (data['s'+i+'Img']) { const el = document.getElementById('s'+i+'-card'); if(el) el.dataset.img = data['s'+i+'Img']; }
                
                // Also update card dataset title for modal
                if (data['s'+i+'Title']) { const el = document.getElementById('s'+i+'-card'); if(el) el.dataset.title = data['s'+i+'Title']; }
            }

            // Update Projects
            for(let i=1; i<=2; i++) {
                if (data['p'+i+'Title']) { const el = document.getElementById('p'+i+'-title'); if(el) el.innerText = data['p'+i+'Title']; }
                if (data['p'+i+'Tag']) { const el = document.getElementById('p'+i+'-tag'); if(el) el.innerText = data['p'+i+'Tag']; }
                if (data['p'+i+'Role']) { const el = document.getElementById('p'+i+'-role'); if(el) el.innerText = data['p'+i+'Role']; }
                if (data['p'+i+'Achieve']) { const el = document.getElementById('p'+i+'-achieve'); if(el) el.innerText = data['p'+i+'Achieve']; }
                if (data['p'+i+'Img']) { const el = document.getElementById('p'+i+'-img'); if(el) el.src = data['p'+i+'Img']; }
            }
        }
    } catch (e) {
        console.log("Error loading dynamic content:", e);
    }
}

document.addEventListener("DOMContentLoaded", loadContent);
