import React, { Component } from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import succes from '../pages/succes.png'
import axios from "axios";
import { API_URL } from "../utils/constants";


export default class Sukses extends Component {
  //CARA HAPUS
  componentDidMount() {
    axios
    .get(API_URL + "keranjangs") //ini udah masuk tombol klik
    .then((res) => {
      const keranjangs = res.data;
      keranjangs.map(function(item) {
        return axios
        .delete(API_URL+"keranjangs/"+item.id)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className='mt-4 text-center'>
        <Image src={succes} width="500" />
        <h2>Terima Kasih Sudah Memesan</h2>
        <Button className='mt-3' variant='dark' as={Link} to='/'>
          Kembali
        </Button>
      </div>
    )
  }
}
