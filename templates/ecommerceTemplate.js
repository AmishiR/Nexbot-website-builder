<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlueWave Store - Premium Electronics</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        :root {
            --primary-blue: #2563eb;
            --light-blue: #3b82f6;
            --sky-blue: #0ea5e9;
            --navy: #1e40af;
            --powder-blue: #dbeafe;
            --ice-blue: #f0f9ff;
            --white: #ffffff;
            --gray: #6b7280;
            --dark: #1f2937;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: var(--dark);
            background: var(--white);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        /* Header */
        header {
            background: var(--white);
            box-shadow: 0 2px 10px rgba(37, 99, 235, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header-top {
            background: var(--primary-blue);
            color: var(--white);
            padding: 0.5rem 0;
            text-align: center;
            font-size: 0.9rem;
        }
        
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--primary-blue);
            text-decoration: none;
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
            transition: color 0.3s ease;
        }
        
        .nav-links a:hover {
            color: var(--primary-blue);
        }
        
        .nav-actions {
            display: flex;
            gap: 1rem;
            align-items: center;
        }
        
        .search-bar {
            display: flex;
            background: var(--ice-blue);
            border-radius: 25px;
            padding: 0.5rem 1rem;
            border: 2px solid transparent;
            transition: border-color 0.3s ease;
        }
        
        .search-bar:focus-within {
            border-color: var(--primary-blue);
        }
        
        .search-bar input {
            border: none;
            background: none;
            outline: none;
            width: 200px;
            color: var(--dark);
        }
        
        .icon-btn {
            background: var(--primary-blue);
            color: var(--white);
            border: none;
            padding: 0.75rem;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .icon-btn:hover {
            background: var(--navy);
            transform: scale(1.1);
        }
        
        .cart-count {
            position: absolute;
            top: -5px;
            right: -5px;
            background: var(--sky-blue);
            color: var(--white);
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--ice-blue), var(--powder-blue));
            padding: 4rem 0;
            text-align: center;
        }
        
        .hero h1 {
            font-size: 3rem;
            color: var(--primary-blue);
            margin-bottom: 1rem;
            font-weight: 800;
        }
        
        .hero p {
            font-size: 1.2rem;
            color: var(--gray);
            margin-bottom: 2rem;
        }
        
        .cta-button {
            background: var(--primary-blue);
            color: var(--white);
            padding: 1rem 2rem;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .cta-button:hover {
            background: var(--navy);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }
        
        /* Product Grid */
        .section {
            padding: 4rem 0;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            color: var(--primary-blue);
            margin-bottom: 3rem;
            font-weight: 700;
        }
        
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .product-card {
            background: var(--white);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(37, 99, 235, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(37, 99, 235, 0.2);
        }
        
        .product-image {
            height: 200px;
            background: linear-gradient(45deg, var(--powder-blue), var(--ice-blue));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: var(--primary-blue);
        }
        
        .product-info {
            padding: 1.5rem;
        }
        
        .product-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--dark);
            margin-bottom: 0.5rem;
        }
        
        .product-price {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-blue);
            margin-bottom: 1rem;
        }
        
        .product-description {
            color: var(--gray);
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }
        
        .add-to-cart {
            width: 100%;
            background: var(--primary-blue);
            color: var(--white);
            border: none;
            padding: 0.75rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .add-to-cart:hover {
            background: var(--navy);
        }
        
        /* Features Section */
        .features {
            background: var(--ice-blue);
            padding: 4rem 0;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        
        .feature-card {
            background: var(--white);
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(37, 99, 235, 0.1);
        }
        
        .feature-icon {
            font-size: 3rem;
            color: var(--primary-blue);
            margin-bottom: 1rem;
        }
        
        .feature-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--dark);
            margin-bottom: 1rem;
        }
        
        .feature-description {
            color: var(--gray);
        }
        
        /* Footer */
        footer {
            background: var(--primary-blue);
            color: var(--white);
            padding: 3rem 0 1rem;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .footer-section h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: var(--white);
        }
        
        .footer-section ul {
            list-style: none;
        }
        
        .footer-section a {
            color: var(--powder-blue);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
            color: var(--white);
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid var(--navy);
            color: var(--powder-blue);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .navbar {
                flex-direction: column;
                gap: 1rem;
            }
            
            .nav-links {
                flex-direction: column;
                width: 100%;
                text-align: center;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .search-bar input {
                width: 150px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-top">
            <div class="container">
                Free shipping on orders over $50 | 30-day return policy
            </div>
        </div>
        
        <nav class="navbar container">
            <a href="#" class="logo">BlueWave</a>
            
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div class="nav-actions">
                <div class="search-bar">
                    <input type="text" placeholder="Search products...">
                    <span>🔍</span>
                </div>
                <button class="icon-btn">
                    ❤️
                </button>
                <button class="icon-btn" onclick="toggleCart()">
                    🛒
                    <span class="cart-count" id="cartCount">0</span>
                </button>
            </div>
        </nav>
    </header>
    
    <section class="hero" id="home">
        <div class="container">
            <h1>Premium Electronics Store</h1>
            <p>Discover the latest in technology with our curated collection of premium electronics</p>
            <a href="#products" class="cta-button">Shop Now</a>
        </div>
    </section>
    
    <section class="section" id="products">
        <div class="container">
            <h2 class="section-title">Featured Products</h2>
            
            <div class="products-grid">
                <div class="product-card" onclick="addToCart('Wireless Headphones', 149.99)">
                    <div class="product-image">🎧</div>
                    <div class="product-info">
                        <div class="product-title">Wireless Headphones</div>
                        <div class="product-price">$149.99</div>
                        <div class="product-description">Premium noise-cancelling wireless headphones with superior sound quality</div>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                
                <div class="product-card" onclick="addToCart('Smart Watch', 299.99)">
                    <div class="product-image">⌚</div>
                    <div class="product-info">
                        <div class="product-title">Smart Watch</div>
                        <div class="product-price">$299.99</div>
                        <div class="product-description">Advanced fitness tracking with heart rate monitoring and GPS</div>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                
                <div class="product-card" onclick="addToCart('Laptop Pro', 1299.99)">
                    <div class="product-image">💻</div>
                    <div class="product-info">
                        <div class="product-title">Laptop Pro</div>
                        <div class="product-price">$1,299.99</div>
                        <div class="product-description">High-performance laptop with latest processors and stunning display</div>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                
                <div class="product-card" onclick="addToCart('Smartphone X', 799.99)">
                    <div class="product-image">📱</div>
                    <div class="product-info">
                        <div class="product-title">Smartphone X</div>
                        <div class="product-price">$799.99</div>
                        <div class="product-description">Latest flagship smartphone with advanced camera and AI features</div>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                
                <div class="product-card" onclick="addToCart('Bluetooth Speaker', 89.99)">
                    <div class="product-image">🔊</div>
                    <div class="product-info">
                        <div class="product-title">Bluetooth Speaker</div>
                        <div class="product-price">$89.99</div>
                        <div class="product-description">Portable speaker with 360-degree sound and waterproof design</div>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                
                <div class="product-card" onclick="addToCart('Gaming Console', 499.99)">
                    <div class="product-image">🎮</div>
                    <div class="product-info">
                        <div class="product-title">Gaming Console</div>
                        <div class="product-price">$499.99</div>
                        <div class="product-description">Next-gen gaming console with 4K graphics and ultra-fast loading</div>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="features">
        <div class="container">
            <h2 class="section-title">Why Choose BlueWave?</h2>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🚚</div>
                    <div class="feature-title">Free Shipping</div>
                    <div class="feature-description">Free shipping on all orders over $50 with fast delivery</div>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🔒</div>
                    <div class="feature-title">Secure Payment</div>
                    <div class="feature-description">100% secure checkout with SSL encryption protection</div>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">↩️</div>
                    <div class="feature-title">Easy Returns</div>
                    <div class="feature-description">30-day hassle-free returns with full refund guarantee</div>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🎧</div>
                    <div class="feature-title">24/7 Support</div>
                    <div class="feature-description">Round-the-clock customer service for all your needs</div>
                </div>
            </div>
        </div>
    </section>
    
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>BlueWave</h3>
                    <p>Your trusted partner for premium electronics and cutting-edge technology.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Size Guide</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Connect</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 BlueWave Store. All rights reserved.</p>
            </div>
        </div>
    </footer>
    
    <script>
        let cartCount = 0;
        let cartItems = [];
        
        function addToCart(productName, price) {
            cartCount++;
            cartItems.push({name: productName, price: price});
            document.getElementById('cartCount').textContent = cartCount;
            
            // Animation effect
            const cartBtn = document.querySelector('.icon-btn');
            cartBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartBtn.style.transform = 'scale(1)';
            }, 200);
            
            // Show notification
            showNotification(`${productName} added to cart!`);
        }
        
        function toggleCart() {
            if (cartItems.length > 0) {
                let cartSummary = 'Cart Contents:\n';
                let total = 0;
                cartItems.forEach(item => {
                    cartSummary += `${item.name} - $${item.price}\n`;
                    total += item.price;
                });
                cartSummary += `\nTotal: $${total.toFixed(2)}`;
                alert(cartSummary);
            } else {
                alert('Your cart is empty!');
            }
        }
        
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--primary-blue);
                color: white;
                padding: 1rem 2rem;
                border-radius: 10px;
                z-index: 1000;
                animation: slideIn 0.3s ease-out;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }
        
        // Add slideIn animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    </script>
</body>
</html>