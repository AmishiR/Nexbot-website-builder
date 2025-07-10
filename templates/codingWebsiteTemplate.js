<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeSpace - Developer Hub</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1e1e2e, #2a2a3a);
            color: #e0e0e0;
            overflow-x: hidden;
        }
        
        .container {
            display: grid;
            grid-template-areas: "sidebar header" "sidebar main" "sidebar footer";
            grid-template-columns: 250px 1fr;
            grid-template-rows: 70px 1fr 60px;
            min-height: 100vh;
        }
        
        .header {
            grid-area: header;
            background: rgba(30, 30, 46, 0.9);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 2rem;
            border-bottom: 1px solid #444;
        }
        
        .logo { font-size: 1.5rem; font-weight: bold; color: #64ffda; }
        .nav-links { display: flex; gap: 2rem; }
        .nav-links a { color: #e0e0e0; text-decoration: none; transition: color 0.3s; }
        .nav-links a:hover { color: #64ffda; }
        
        .sidebar {
            grid-area: sidebar;
            background: rgba(20, 20, 30, 0.95);
            padding: 2rem 1rem;
            border-right: 1px solid #444;
        }
        
        .sidebar h3 { color: #64ffda; margin-bottom: 1rem; font-size: 1.2rem; }
        .sidebar ul { list-style: none; }
        .sidebar li { margin: 0.8rem 0; }
        .sidebar a {
            color: #b0b0b0;
            text-decoration: none;
            padding: 0.5rem;
            border-radius: 5px;
            display: block;
            transition: all 0.3s;
        }
        .sidebar a:hover { background: rgba(100, 255, 218, 0.1); color: #64ffda; }
        
        .main {
            grid-area: main;
            padding: 2rem;
            overflow-y: auto;
        }
        
        .hero {
            text-align: center;
            margin-bottom: 3rem;
            animation: fadeInUp 1s ease-out;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #64ffda, #bb86fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .hero p { font-size: 1.2rem; opacity: 0.8; }
        
        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .card {
            background: rgba(40, 40, 60, 0.6);
            border-radius: 10px;
            padding: 2rem;
            border: 1px solid #444;
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
        }
        
        .card h3 { color: #64ffda; margin-bottom: 1rem; }
        .card p { opacity: 0.8; line-height: 1.6; }
        
        .footer {
            grid-area: footer;
            background: rgba(20, 20, 30, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            border-top: 1px solid #444;
            font-size: 0.9rem;
            opacity: 0.7;
        }
        
        .glow { animation: glow 2s ease-in-out infinite alternate; }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glow {
            from { text-shadow: 0 0 10px #64ffda; }
            to { text-shadow: 0 0 20px #64ffda, 0 0 30px #64ffda; }
        }
        
        @media (max-width: 768px) {
            .container { grid-template-columns: 1fr; grid-template-areas: "header" "main" "footer"; }
            .sidebar { display: none; }
            .hero h1 { font-size: 2rem; }
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo glow">CodeSpace</div>
            <nav class="nav-links">
                <a href="#" onclick="showSection('projects')">Projects</a>
                <a href="#" onclick="showSection('skills')">Skills</a>
                <a href="#" onclick="showSection('contact')">Contact</a>
            </nav>
        </header>
        
        <aside class="sidebar">
            <h3>Navigation</h3>
            <ul>
                <li><a href="#" onclick="showSection('dashboard')">Dashboard</a></li>
                <li><a href="#" onclick="showSection('projects')">My Projects</a></li>
                <li><a href="#" onclick="showSection('skills')">Tech Stack</a></li>
                <li><a href="#" onclick="showSection('tools')">Dev Tools</a></li>
            </ul>
            <h3>Recent</h3>
            <ul>
                <li><a href="#">React Portfolio</a></li>
                <li><a href="#">API Integration</a></li>
                <li><a href="#">Database Design</a></li>
            </ul>
        </aside>
        
        <main class="main" id="main-content">
            <div class="hero">
                <h1>Welcome to CodeSpace</h1>
                <p>Your creative development environment</p>
            </div>
            
            <div class="cards">
                <div class="card" onclick="animateCard(this)">
                    <h3>Full Stack Development</h3>
                    <p>Building modern web applications with React, Node.js, and MongoDB. Focus on clean architecture and scalable solutions.</p>
                </div>
                <div class="card" onclick="animateCard(this)">
                    <h3>API Development</h3>
                    <p>Creating robust RESTful APIs and GraphQL endpoints with proper authentication and documentation.</p>
                </div>
                <div class="card" onclick="animateCard(this)">
                    <h3>DevOps & Deployment</h3>
                    <p>Automating deployment pipelines with Docker, CI/CD, and cloud platforms for seamless delivery.</p>
                </div>
            </div>
        </main>
        
        <footer class="footer">
            <p>&copy; 2025 CodeSpace. Built with passion for clean code.</p>
        </footer>
    </div>
    
    <script>
        function showSection(section) {
            const main = document.getElementById('main-content');
            let content = '';
            
            switch(section) {
                case 'projects':
                    content = `
                        <div class="hero">
                            <h1>My Projects</h1>
                            <p>Showcase of recent development work</p>
                        </div>
                        <div class="cards">
                            <div class="card"><h3>E-commerce Platform</h3><p>Full-stack solution with payment integration</p></div>
                            <div class="card"><h3>Task Management App</h3><p>React-based productivity tool</p></div>
                            <div class="card"><h3>Weather Dashboard</h3><p>Real-time weather API integration</p></div>
                        </div>
                    `;
                    break;
                case 'skills':
                    content = `
                        <div class="hero">
                            <h1>Technical Skills</h1>
                            <p>Technologies and frameworks I work with</p>
                        </div>
                        <div class="cards">
                            <div class="card"><h3>Frontend</h3><p>React, Vue.js, TypeScript, Tailwind CSS</p></div>
                            <div class="card"><h3>Backend</h3><p>Node.js, Python, Express, Django</p></div>
                            <div class="card"><h3>Database</h3><p>MongoDB, PostgreSQL, Redis</p></div>
                        </div>
                    `;
                    break;
                case 'contact':
                    content = `
                        <div class="hero">
                            <h1>Get In Touch</h1>
                            <p>Let's build something amazing together</p>
                        </div>
                        <div class="cards">
                            <div class="card"><h3>Email</h3><p>hello@codespace.dev</p></div>
                            <div class="card"><h3>GitHub</h3><p>github.com/codespace</p></div>
                            <div class="card"><h3>LinkedIn</h3><p>linkedin.com/in/codespace</p></div>
                        </div>
                    `;
                    break;
                default:
                    content = `
                        <div class="hero">
                            <h1>Welcome to CodeSpace</h1>
                            <p>Your creative development environment</p>
                        </div>
                        <div class="cards">
                            <div class="card" onclick="animateCard(this)">
                                <h3>Full Stack Development</h3>
                                <p>Building modern web applications with React, Node.js, and MongoDB. Focus on clean architecture and scalable solutions.</p>
                            </div>
                            <div class="card" onclick="animateCard(this)">
                                <h3>API Development</h3>
                                <p>Creating robust RESTful APIs and GraphQL endpoints with proper authentication and documentation.</p>
                            </div>
                            <div class="card" onclick="animateCard(this)">
                                <h3>DevOps & Deployment</h3>
                                <p>Automating deployment pipelines with Docker, CI/CD, and cloud platforms for seamless delivery.</p>
                            </div>
                        </div>
                    `;
            }
            
            main.innerHTML = content;
            main.style.animation = 'fadeInUp 0.6s ease-out';
        }
        
        function animateCard(card) {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 150);
        }
        
        // Add some interactive particles
        document.addEventListener('mousemove', (e) => {
            const cursor = document.createElement('div');
            cursor.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #64ffda;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                animation: fadeOut 1s ease-out forwards;
            `;
            document.body.appendChild(cursor);
            
            setTimeout(() => cursor.remove(), 1000);
        });
        
        // Add fadeOut animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeOut {
                to { opacity: 0; transform: scale(0); }
            }
        `;
        document.head.appendChild(style);
    </script>
</body>
</html>