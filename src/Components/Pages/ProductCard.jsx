import React, { useState, useEffect } from "react";
import Products from "./Products";
import { Link } from 'react-router-dom';
import "./Products.css"

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); 
  const [allProducts, setAllProducts] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/`);
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
    };

    const fetchCategoryData = async (category, setData) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${category} data. Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(`Error fetching ${category} data:`, error);
        setData([]);
      }
    };

    fetchAllProducts();
    fetchCategoryData("electronics", setElectronics);
    fetchCategoryData("women's clothing", setWomensClothing);
    fetchCategoryData("jewelery", setJewelery);
    fetchCategoryData("men's clothing", setMensClothing);
  }, []);

  return (
    <div>
  
      <h2 className="Category_title">PRODUCT OVERVIEW</h2>
      <div className="Category_Container">
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory('all')}>All Products</button>
        </div>
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory("men's clothing")}>Men</button>
        </div>
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory("women's clothing")}>Women</button>
        </div>
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory('electronics')}>Electronics</button>
        </div>
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory('jewelery')}>Jewelery</button>
        </div>
      </div>

      
      <div className="Container">
        <div className="Row">
          {selectedCategory === 'all' && allProducts.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  
                />
              </Link>
            </div>
          ))}

          {selectedCategory === 'electronics' && electronics.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

          {selectedCategory === "women's clothing" && womensClothing.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

          {selectedCategory === 'jewelery' && jewelery.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

        {selectedCategory === "men's clothing" && mensClothing.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
