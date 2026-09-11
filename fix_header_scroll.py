import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Fix Header DOM Order and Nav Order
header_pattern = re.compile(r'<header.*?</header>', re.DOTALL)
header_new = """    <header style="background: transparent; padding: 20px 50px;">
        <div class="logo-container">
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="image.png" alt="Sadidar Logo" style="height: 40px; object-fit: contain; filter: drop-shadow(0 0 10px rgba(33,185,198,0.5));">
                <div style="display: flex; flex-direction: column; align-items: flex-start; text-align: right;">
                    <span style="font-size: 1.5rem; font-weight: 900; letter-spacing: 1px; color: white;">سدیدار</span>
                    <span style="font-size: 0.6rem; letter-spacing: 4px; color: var(--text-muted); text-transform: uppercase;">S A D I D A R</span>
                </div>
            </div>
        </div>
        
        <nav style="flex: 1; display: flex; justify-content: center;">
            <ul class="nav-menu" style="gap: 40px; display: flex; list-style: none;">
                <li><a class="nav-link active" onclick="goToSlide(0)" id="nav-0">خانه</a></li>
                <li><a class="nav-link" onclick="goToSlide(1)" id="nav-1">درباره ما</a></li>
                <li><a class="nav-link" onclick="goToSlide(2)" id="nav-2">خدمات</a></li>
                <li><a class="nav-link" onclick="goToSlide(3)" id="nav-3">پروژه‌ها</a></li>
                <li><a class="nav-link" onclick="goToSlide(4)" id="nav-4">تیم ما</a></li>
                <li><a class="nav-link" onclick="goToSlide(5)" id="nav-5">تماس</a></li>
            </ul>
        </nav>

        <div class="header-left" style="display: flex; align-items: center; gap: 20px; color: var(--text-muted); cursor: pointer;">
            <span style="font-size: 0.9rem;">FA ˅</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
    </header>"""
html = header_pattern.sub(header_new, html)


# 2. Fix Scroll Logic
scroll_old = """        window.addEventListener('wheel', (e) => {
            if (window.innerWidth <= 1024 || isAnimating) return;

            if (e.deltaY > 0) { // Scroll down -> move backward
                if (currentSlide > 0) {
                    currentSlide--;
                    lockAnimation();
                }
            } else if (e.deltaY < 0) { // Scroll up -> move forward
                if (currentSlide < totalSlides - 1) {
                    currentSlide++;
                    lockAnimation();
                }
            }
        }, { passive: true });"""

scroll_new = """        window.addEventListener('wheel', (e) => {
            if (window.innerWidth <= 1024 || isAnimating) return;

            if (e.deltaY > 0) { // Scroll down -> move forward (next page)
                if (currentSlide < totalSlides - 1) {
                    currentSlide++;
                    lockAnimation();
                }
            } else if (e.deltaY < 0) { // Scroll up -> move backward (prev page)
                if (currentSlide > 0) {
                    currentSlide--;
                    lockAnimation();
                }
            }
        }, { passive: true });"""
html = html.replace(scroll_old, scroll_new)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
