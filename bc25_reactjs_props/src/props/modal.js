import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5">
          <img className="img-fluid" src={content.image} alt="" />
        </div>
        <div className="col-sm-7">
          <h3>Thông tin sản phẩm</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Tên sản phẩm</td>
                <td>{content.name}</td>
              </tr>
              <tr>
                <td>Giá</td>
                <td>{content.price}</td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>{content.description}</td>
              </tr>
              <tr>
                <td>Số lượng</td>
                <td>{content.quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
