import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/NumberFormat";
import { API_URL } from "../utils/constants";

export default class TotalBayar extends Component {
  submitTotalBayar =(TotalBayar) => {
    const pesanan ={
      total_bayar : TotalBayar,
      menus : this.props.keranjangs
    }
    axios.post(API_URL+"pesanans", pesanan).then((res) => {
      this.props.history.push('/sukses')
    })
  };
  render() {
    const TotalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <>
      {/* website */}
       <div className="fixed-bottom d-none d-md-block">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h3>
              Total Harga :{" "}
              <strong className="float-end me-3">
                Rp. {numberWithCommas(TotalBayar)}
              </strong>
            </h3>
            <div className="d-grid gap-2 mt-4 mb-4">
              <Button variant="dark" size="lg" onClick={() => this.submitTotalBayar(TotalBayar)}>
               <FontAwesomeIcon icon={faShoppingCart}/> BAYAR
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Mobile */}
      <div className="d-sm-block d-md-none">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h3>
              Total Harga :{" "}
              <strong className="float-end me-3">
                Rp. {numberWithCommas(TotalBayar)}
              </strong>
            </h3>
            <div className="d-grid gap-2 mt-4 mb-4 col-md-4">
              <Button variant="dark" size="lg" onClick={() => this.submitTotalBayar(TotalBayar)}>
               <FontAwesomeIcon icon={faShoppingCart}/> BAYAR
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      
      </>
     
    );
  }
}
