"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const ref = useRef("");
  return (
    <header>
    <h1>Welcome to Our Marketplace</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <button onclick="toggleSidebar()">click Sidebar</button>
  
  <div class="backdrop" onclick="closeSidebar()"></div>

  <nav class="sidebar">
    <h2>Sidebar</h2>
    <span class="close-button">&times;</span>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
    </ul>
  </nav>
  
  <main>
    <h2>Featured Products</h2>
    <div class="product-list">
      <div class="product">
        <img src="product1.jpg" alt="Product 1">
        <h3>Product 1</h3>
        <p>Description of Product 1</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
      <div class="product">
        <img src="product2.jpg" alt="Product 2">
        <h3>Product 2</h3>
        <p>Description of Product 2</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
      <div class="product">
        <img src="product3.jpg" alt="Product 3">
        <h3>Product 3</h3>
        <p>Description of Product 3</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </main>
  <footer>
    &copy; 2024 Online Marketplace
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

    document.querySelector('.close-button').addEventListener('click', closeSidebar);
  </script>

  );
}
