import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    const { product, setStateModal } = this.props;
    return (
      <div className="col-sm-4">
        <div className="w3-container">
          <div>
            <img
              src={product.image}
              style={{ width: "100%" }}
              onClick={() => {
                setStateModal(product);
              }}
            />
            <p>
              {product.name}
              <br />
              <b>{product.price}</b>
            </p>
            <button className="btn btn-dark">
              Add to cart <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
