import React, { useState } from "react";
import "./ProductCard.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ProductCard({
  product = null,
  onAddToCart = (prod, opts) => console.log("Add to cart", prod, opts),
}) {
  const defaultProduct = {
    id: 1,
    title: "Products Name",
    price: 59.99,
    description:
      "A short product description to buyers.",
    image: "assets/products/product-1.jpg", // replace with your image
    sizes: ["400gm", "800gm"],
  };

  const p = product || defaultProduct;
  const [selectedColor, setSelectedColor] = useState(p.colors?.[0] || null);
  const [selectedSize, setSelectedSize] = useState(p.sizes?.[1] || null);
  const [quantity, setQuantity] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    onAddToCart(p, { color: selectedColor, size: selectedSize });
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity > 0) return prevQuantity - 1;
      return 0;
    });
  };

  return (
    <div className="product-card">
      <div className="product-top">
        <img src={p.image} alt={p.title} className="product-img" />
        <button
          className={`fav-btn ${isFavorited ? "active" : ""}`}
          onClick={() => setIsFavorited((s) => !s)}
        >
          {isFavorited ? <FavoriteOutlinedIcon fontSize="small"/> : <FavoriteBorderOutlinedIcon fontSize="small"/>}
        </button>
      </div>

      <div className="product-body">
        <div className="title-row">
          <div>
            <h3 className="title">{p.title}</h3>
            <p className="subtitle">{p.subtitle}</p>
          </div>
          <div className="price-box">
            <p className="price">₹{p.price.toFixed(2)}</p>
          </div>
        </div>

        <p className="description">{p.description}</p>

        <div className="options">
          <p className="option-label">PRODUCT OPTIONS</p>
          

          <div className="sizes">
            {p.sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {quantity === 0 ? (
          <div className="add-btn">
            <span>ADD</span>
            <span className="add-btn-plus" onClick={handleIncrement}>+</span>
          </div>
        ) : (
          <div className="add-btn quantity-controls">
            <span className="remove-btn-minus" onClick={handleDecrement}>
              <DeleteOutlineIcon fontSize="small" />
            </span>
            <span className="quantity-display">{quantity}</span>
            <span className="add-btn-plus" onClick={handleIncrement}>+</span>
          </div>
        )}
      </div>
    </div>
  );
}
