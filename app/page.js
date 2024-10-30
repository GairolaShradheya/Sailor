"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const ref = useRef("");
  return (
    </head>
    </head>
    <body>
      <header>
        <button class="btn" onclick="toggleSidebar()">Sidebar</button>
        <h1>Sale Sailor Marketplace</h1>
        <form action="/search" method="GET">
          <input type="text" name="query" placeholder="Search...">
          <button type="submit">Search</button>
        </form>
    
        <div class="backdrop" onclick="closeSidebar()"></div>
    
        <nav class="sidebar">
          <h2>Sidebar</h2>
          <span class="close-button" onclick="closeSidebar()">&times;</span>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </nav>
      </header>
    
      <nav class="mnav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Electronics</a></li>
          <li><a href="#">Clothes</a></li>
          <li><a href="#">Homeware</a></li>
          <li><a href="#">Tickets</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    
      <main>
        <h2>Featured Products</h2>
        <div class="product-list">
          <div class="product">
            <img src="https://example.com/product1.jpg" alt="Product 1">
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button class="add-to-cart">Add to Cart</button>
          </div>
          <div class="product">
            <img src="https://example.com/product2.jpg" alt="Product 2">
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
            <button class="add-to-cart">Add to Cart</button>
          </div>
          <div class="product">
            <img src="https://example.com/product3.jpg" alt="Product 3">
            <h3>Product 3</h3>
            <p>Description of Product 3</p>
            <button class="add-to-cart">Add to Cart</button>
          </div>
          </div>
      </main>
    
      <footer>
        &copy; 2023 Sale Sailor Marketplace
      </footer>
    
      <script>
        function toggleSidebar() {
          const sidebar = document.querySelector('.sidebar');
          const backdrop = document.querySelector('.backdrop');
          sidebar.classList.toggle('active');
          backdrop.classList.toggle('active');
        }
    
        function closeSidebar() {
          const sidebar = document.querySelector('.sidebar');
          const backdrop = document.querySelector('.backdrop');
          sidebar.classList.remove('active');
          backdrop.classList.remove('active');
        }
      </script>
  );
}

