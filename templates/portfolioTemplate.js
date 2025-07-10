<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Rivera - Creative Portfolio</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        :root {
            --primary: #6366f1;
            --secondary: #8b5cf6;
            --accent: #06b6d4;
            --warm: #f59e0b;
            --coral: #ef4444;
            --emerald: #10b981;
            --rose: #f43f5e;
            --dark: #1e293b;
            --light: #f8fafc;
            --gray: #64748b;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
            color: var(--dark);
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            z-index: 1000;
            padding: 1rem 0;
            box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: 800;
            background: linear-gradient(45deg, var(--primary), var(--rose));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }
        
        .nav-links a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(45deg, var(--primary), var(--rose));
            transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after { width: 100%; }
        
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
            color: white;
            position: relative;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
        }
        
        .hero-content {
            z-index: 1;
            animation: fadeInUp 1s ease-out;
        }
        
        .hero h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
            font-weight: 800;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .hero p {
            font-size: 1.5rem;
            opacity: 0.9;
            margin-bottom: 2rem;
        }
        
        .cta-button {
            background: linear-gradient(45deg, var(--warm), var(--coral));
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        
        .section {
            padding: 5rem 0;
            background: var(--light);
        }
        
        .section:nth-child(even) {
            background: white;
        }
        
        .section-title {
            text-align: center;
            font-size: 3rem;
            margin-bottom: 3rem;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .color-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .color-card {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        
        .color-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: var(--card-color, var(--primary));
            transition: height 0.3s ease;
        }
        
        .color-card:hover::before { height: 100%; opacity: 0.1; }
        
        .color-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        
        .color-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--dark);
        }
        
        .color-card p {
            color: var(--gray);
            line-height: 1.6;
        }
        
        .color-swatch {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-bottom: 1rem;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }
        
        .footer {
            background: linear-gradient(135deg, var(--dark), var(--primary));
            color: white;
            padding: 3rem 0;
            text-align: center;
        }
        
        .footer h3 {
            font-size: 2rem;
            margin-bottom: 1rem;
            opacity: 0.9;
        }
        
        .footer p {
            opacity: 0.7;
            margin-bottom: 2rem;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }
        
        .social-links a {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .social-links a:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
        }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .floating { animation: float 3s ease-in-out infinite; }
        
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.5rem; }
            .hero p { font-size: 1.2rem; }
            .section-title { font-size: 2rem; }
            .nav-links { display: none; }
        }
    </style>
</head>
<body>
    <header>
        <nav class="container">
            <div class="logo">Alex Rivera</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section class="hero" id="home">
        <div class="hero-content">
            <h1 class="floating">Creative Designer</h1>
            <p>Crafting beautiful digital experiences with bold colors and elegant design</p>
            <button class="cta-button" onclick="scrollToSection('portfolio')">View My Work</button>
        </div>
    </section>
    
    <section class="section" id="portfolio">
        <div class="container">
            <h2 class="section-title">Color Palette Collection</h2>
            <p style="text-align: center; color: var(--gray); font-size: 1.2rem; margin-bottom: 2rem;">
                Explore my curated selection of vibrant color combinations
            </p>
            
            <div class="color-grid">
                <div class="color-card" style="--card-color: var(--primary);" onclick="animateCard(this)">
                    <div class="color-swatch" style="background: linear-gradient(45deg, var(--primary), var(--secondary));"></div>
                    <h3>Electric Dreams</h3>
                    <p>A vibrant combination of electric blue and purple, perfect for modern tech brands and digital experiences.</p>
                </div>
                
                <div class="color-card" style="--card-color: var(--warm);" onclick="animateCard(this)">
                    <div class="color-swatch" style="background: linear-gradient(45deg, var(--warm), var(--coral));"></div>
                    <h3>Sunset Vibes</h3>
                    <p>Warm oranges and corals that evoke feelings of energy, creativity, and optimism.</p>
                </div>
                
                <div class="color-card" style="--card-color: var(--emerald);" onclick="animateCard(this)">
                    <div class="color-swatch" style="background: linear-gradient(45deg, var(--emerald), var(--accent));"></div>
                    <h3>Ocean Breeze</h3>
                    <p>Cool teals and emerald greens that bring tranquility and freshness to any design.</p>
                </div>
                
                <div class="color-card" style="--card-color: var(--rose);" onclick="animateCard(this)">
                    <div class="color-swatch" style="background: linear-gradient(45deg, var(--rose), var(--secondary));"></div>
                    <h3>Neon Nights</h3>
                    <p>Bold pinks and purples that create striking, contemporary designs with high impact.</p>
                </div>
                
                <div class="color-card" style="--card-color: var(--accent);" onclick="animateCard(this)">
                    <div class="color-swatch" style="background: linear-gradient(45deg, var(--accent), var(--primary));"></div>
                    <h3>Arctic Flow</h3>
                    <p>Clean blues and cyans that convey professionalism, trust, and innovation.</p>
                </div>
                
                <div class="color-card" style="--card-color: var(--warm);" onclick="animateCard(this)">
                    <div class="color-swatch" style="background: linear-gradient(45deg, var(--warm), var(--emerald));"></div>
                    <h3>Golden Hour</h3>
                    <p>Warm golds paired with natural greens, perfect for organic and lifestyle brands.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="section" id="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div style="text-align: center; max-width: 600px; margin: 0 auto;">
                <p style="font-size: 1.2rem; line-height: 1.8; color: var(--gray); margin-bottom: 2rem;">
                    I'm a passionate designer who believes in the power of color to transform digital experiences. 
                    With over 5 years of experience in UI/UX design, I specialize in creating cohesive color systems 
                    that enhance user engagement and brand identity.
                </p>
                <div class="cta-button" style="display: inline-block; text-decoration: none;">
                    Download Resume
                </div>
            </div>
        </div>
    </section>
    
    <footer class="footer" id="contact">
        <div class="container">
            <h3>Let's Create Something Amazing</h3>
            <p>Ready to bring your vision to life with stunning color palettes?</p>
            <div class="social-links">
                <a href="#">📧</a>
                <a href="#">📱</a>
                <a href="#">🐦</a>
                <a href="#">💼</a>
            </div>
        </div>
    </footer>
    
    <script>
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
        
        function animateCard(card) {
            card.style.transform = 'scale(0.95) rotate(1deg)';
            setTimeout(() => {
                card.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        }
        
        // Scroll animations
        window.addEventListener('scroll', () => {
            const cards = document.querySelectorAll('.color-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    card.style.animation = 'fadeInUp 0.8s ease-out';
                }
            });
        });
        
        // Dynamic color changes
        const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)', 'var(--warm)', 'var(--coral)', 'var(--emerald)', 'var(--rose)'];
        let colorIndex = 0;
        
        setInterval(() => {
            document.querySelector('.logo').style.background = `linear-gradient(45deg, ${colors[colorIndex]}, ${colors[(colorIndex + 1) % colors.length]})`;
            document.querySelector('.logo').style.webkitBackgroundClip = 'text';
            document.querySelector('.logo').style.webkitTextFillColor = 'transparent';
            colorIndex = (colorIndex + 1) % colors.length;
        }, 3000);
        
        // Parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        });
    </script>
</body>
</html>