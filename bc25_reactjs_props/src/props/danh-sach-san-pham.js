import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  rederListProduct = () => {
    const { productsData, setStateModal } = this.props;
    return productsData.map((item) => {
      return (
        <SanPham
          key={item.id}
          product={item}
          getDetail={this.props.getDetail}
          setStateModal={setStateModal}
        ></SanPham>
      );
    });
  };
  render() {
    return (
      <div className="w3-row w3-grayscale">
        <div className="row">{this.rederListProduct()}</div>
      </div>
    );
  }
}
