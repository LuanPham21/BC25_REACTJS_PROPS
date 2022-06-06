import React, { Component } from "react";
import data from "./data.json";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);

    // Tao ra state
    this.state = {
      productList: data,
      productDetail: data[1],
    };
  }
  renderHeader = () => {
    return (
      <>
        <nav
          className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top"
          style={{ zIndex: 3, width: 250 }}
          id="mySidebar"
        >
          <div className="w3-container w3-display-container w3-padding-16">
            <i
              onclick="w3_close()"
              className="fa fa-remove w3-hide-large w3-button w3-display-topright"
            />
            <h3 className="w3-wide">
              <b>LOGO</b>
            </h3>
          </div>
          <div
            className="w3-padding-64 w3-large w3-text-grey"
            style={{ fontWeight: "bold" }}
          >
            <a href="#" className="w3-bar-item w3-button">
              Home
            </a>
            <a href="#" className="w3-bar-item w3-button">
              Shop
            </a>
          </div>
        </nav>
        <div>
          <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
            <div className="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
            <a
              href="javascript:void(0)"
              className="w3-bar-item w3-button w3-padding-24 w3-right"
              onclick="w3_open()"
            >
              <i className="fa fa-bars" />
            </a>
          </header>
          // {/* Overlay effect when opening sidebar on small screens */}
          <div
            className="w3-overlay w3-hide-large"
            onclick="w3_close()"
            style={{ cursor: "pointer" }}
            title="close side menu"
            id="myOverlay"
          />
          // {/* !PAGE CONTENT! */}
          <div className="w3-main" style={{ marginLeft: 250 }}>
            <header className="w3-container w3-xlarge">
              <p className="w3-left">Shoes Store</p>
              <p className="w3-right">
                <i className="fa fa-shopping-cart w3-margin-right" />
                <i className="fa fa-search" />
              </p>
            </header>
          </div>
        </div>
      </>
    );
  };
  setStateModal = (product) => {
    this.setState({
      productDetail: product,
    });
    console.log(product);
  };

  render() {
    const { productList, productDetail } = this.state;

    return (
      <>
        {this.renderHeader()}
        <div className="w3-main">
          <DanhSachSanPham
            productsData={productList}
            setStateModal={this.setStateModal}
          />
          <Modal content={productDetail} />
        </div>
      </>
    );
  }
}
