import React from "react";

const Shoe = () => {
  return (
    <main className="Shoe">
      <div className="Shoe-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="Shoe-btn">
            <button>Shop Now</button>
            <button className="sec-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon_icon" />
                <img src="/images/flipkart.png" alt="flipkart_icon" />
            </div>
        </div>
      </div>
      <div className="Shoe-image">
      <img src="/images/shoe_image.png" alt="shoe_icon" />
      </div>
    </main>
  );
};

export default Shoe;
