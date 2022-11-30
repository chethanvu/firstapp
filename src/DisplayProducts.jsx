import React from "react";

function DisplayProducts({ products, title }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="home">
        {products.map((items, index) => {
          return (
            <div key={index} className="Chaild">
              <img src={items.productpic} alt="no image" />
              <h1>{items.brand}</h1>
              <p>{items.discription}</p>
              <span>{items.discountPrice}</span>{" "}
              <span>
                <del>{items.mrp}</del>
              </span><button id="btn3">Delite</button>
              <button id="btn4">Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DisplayProducts;