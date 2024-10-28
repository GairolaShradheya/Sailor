"use client";
import "../home/home.css";
import { useRef } from "react";
export default function page() {
    const ref1 = useRef()
    const ref2 = useRef()

    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        // const backdrop = document.querySelector('.backdrop');
        // ref1.classNameList.toggle('active');
        // ref2.classNameList.toggle('active');
        // sidebar.classNameList.toggle('active');
        // backdrop.classNameList.toggle('active');
    }


    function closeSidebar() {
        // const sidebar = document.querySelector('.sidebar');
        // const backdrop = document.querySelector('.backdrop');
        // ref1.current.
        // ref2.classNameList.remove('active');
        // sidebar.classNameList.remove('active');
        // backdrop.classNameList.remove('active');
    }

    // document.querySelector('.close-button').addEventListener('click', closeSidebar);

    return (
        <>
            <header>
                <button className="btn" onclick={toggleSidebar()}>click Sidebar</button>
                <h1 > Sale Sailor Marketplace</h1>
                <form action="/search" method="GET">
                    <input type="text" name="query" placeholder="Search..."></input>
                    <button type="submit">Search</button>
                </form>

                {/* <!-- Backdrop for sidebar --> */}
                <div ref={ref2} className="backdrop" onclick="closeSidebar()"></div>

                <nav ref={ref1} className="sidebar">
                    <h2>Sidebar</h2>
                    <span onclick={closeSidebar()} className="close-button">&times;</span>
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                </nav>
            </header >
            <nav className="mnav justify-around">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <main>
                <h2 className="fpo">Featured Products</h2>
                <div className="product-list">
                    <div className="product">
                        <img src="c:\Users\Manisha\Desktop\sale salior\dasg.jpg" alt="Product 1"></img>
                        <h3>Product 1</h3>
                        <p>Description of Product 1</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <div className="product">
                        <img src="c:\Users\Manisha\Desktop\sale salior\iasa.webp" alt="Product 2"></img>
                        <h3>Product 2</h3>
                        <p>Description of Product 2</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <div className="product">
                        <img src="c:\Users\Manisha\Desktop\sale salior\ecomes.jpeg" alt="Product 3"></img>
                        <h3>Product 3</h3>
                        <p>Description of Product 3</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </main>

            <footer className="absolute w-full bottom-0">
                &copy; 2024 Online Marketplace
            </footer>
        </>
    )
}