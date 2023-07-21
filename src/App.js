import React, { Component } from 'react'

//ini dari router-dom-react
import {BrowserRouter, Route, Switch } from "react-router-dom";
import { NavbarCompo } from './component';
import { Home, Sukses } from './pages';


export default class App extends Component {
  render() {
    return (
       <BrowserRouter>
       <NavbarCompo/>
      <main>
        <Switch>
        <Route  path="/" component={Home} exact />
       <Route path='/sukses' component={Sukses} exact />
        </Switch>
      </main>
   </BrowserRouter>  
  
  
    )
  }
}





























// import "./App.css";
// // import Hasil from './component/Hasil';
// // import ListCategory from './component/ListCategory';
// // import NavbarCompo from './component/NavbarCompo';

// import { Hasil, ListCategory, Menus, NavbarCompo } from "./component";
// import { Row, Col, Container } from "react-bootstrap";

// //ini untuk panggil api-url
// import { API_URL } from "./utils/constants";

// //panggil Axios
// import axios from "axios";

// //sweetalert
// import swal from "sweetalert";


// import React, { Component } from "react";
// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       menus: [],
//       //untuk klik pilih
//       categoriYangDipilih: "sushi-roll",
//       //untuk kerjangs
//       keranjangs: []
//     };
//   }

//   componentDidMount() {
//     //ini copyn dari axios react-js
//     axios
//       //.get(`https://jsonplaceholder.typicode.com/users`)
//       //url ya kita ganti dengan url backend placeholder
//       // .get(API_URL+"products")
//       .get(API_URL + "products?category.nama=" + this.state.categoriYangDipilih) //ini udah masuk tombol klik
//       .then((res) => {
//         const menus = res.data;
//         this.setState({ menus });
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//       //cara menampilkan menu pilihan ke ke hasil pesanan
//       axios
//       .get(API_URL + "keranjangs") //ini udah masuk tombol klik
//       .then((res) => {
//         const keranjangs = res.data;
//         this.setState({ keranjangs });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//     //ini untuk membuat update ketika pillih menu dan tambah menu pesenana
//       componentDidUpdate(prevState) {
//         if(this.state.keranjangs !== prevState.keranjangs) {
//           axios  //maka dia akan run ini lagi
//           .get(API_URL + "keranjangs") 
//           .then((res) => {
//             const keranjangs = res.data;
//             this.setState({ keranjangs });
//           })
//           .catch((error) => {
//             console.log(error);
//           });

//         }
//       }




//   //fungsi klik pilih
//   changeCategory = (value) => {
//     this.setState({
//       categoriYangDipilih: value,
//     });
//     axios
//       //.get(`https://jsonplaceholder.typicode.com/users`)
//       //url ya kita ganti dengan url backend placeholder
//       // .get(API_URL+"products")
//       .get(API_URL + "products?category.nama=" + value) //ini udah masuk tombol klik
//       .then((res) => {
//         const menus = res.data;
//         this.setState({ menus });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   //buat methode masuk keranjangs
//   masukKeranjang = (value) => {
//     axios
//       .get(API_URL + "keranjangs?product.id=" + value.id) //ini udah masuk tombol klik
//       .then((res) => {
//         if(res.data.length === 0) {
//           const keranjang = {
//             jumlah: 1,
//             total_harga: value.harga,
//             product: value,
//           };

//           axios
//             .post(API_URL + "keranjangs", keranjang) 
//             .then((res) => {
//               swal({
//                 title: "Pesanan Masuk Keranjang",
//                 text: "Sukses Masuk Keranjang" + keranjang.product.nama,
//                 icon: "success",
//                 button: false,
//                 timer: 1500,
//               });
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         }else{ //ini kalau ada

//           const keranjang = {
//             jumlah: res.data[0].jumlah+1,
//             total_harga: res.data[0].total_harga+value.harga,
//             product: value,
//           };
          
//           //ini kalau berhasil
//           axios
//           .put(API_URL + "keranjangs/"+res.data[0].id, keranjang) //ini udah masuk tombol klik
//           .then((res) => {
//             swal({
//               title: "Pesanan Masuk Keranjang",
//               text: "Sukses Masuk Keranjang" + keranjang.product.nama,
//               icon: "success",
//               button: false,
//               timer: 1500,
//             });
//           })
//           .catch((error) => {
//             console.log(error);
//           });

//         }
//       });

//     //ini awalnya
//     //buat const baru
//     // const keranjang = {
//     //   jumlah: 1,
//     //   total_harga: value.harga,
//     //   product: value,
//     // };

//     // axios
//     //   .post(API_URL + "keranjangs", keranjang) //ini udah masuk tombol klik
//     //   .then((res) => {
//     //     swal({
//     //       title: "Pesanan Masuk Keranjang",
//     //       text: "Sukses Masuk Keranjang" + keranjang.product.nama,
//     //       icon: "success",
//     //       button: false,
//     //     });
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });
//   };

//   render() {
//     // console.log(this.state.menus);
//     const { menus, categoriYangDipilih, keranjangs } = this.state;
//     return (
//       <div className="App">
//         <NavbarCompo />
//         <div className="mt-3">
//           <Container fluid>
//             <Row>
//               <ListCategory
//                 changeCategory={this.changeCategory}
//                 categoriYangDipilih={categoriYangDipilih}
//               />
//               {/* ini semua ya di oper dan kita panggil di listCategory */}
//               <Col>
//                 <h4>
//                   <strong>Semua Menu Favorit</strong>
//                 </h4>
//                 <hr />
//                 <Row>
//                   {menus &&
//                     menus.map((menu) => (
//                       // <h2>{menu.nama}</h2>
//                       <Menus
//                         key={menu.id}
//                         menu={menu}
//                         masukKeranjang={this.masukKeranjang} //ini oper ke menu
//                       />
//                     ))}
//                 </Row>
//               </Col>
//               <Hasil keranjangs={keranjangs}/>
//             </Row>
//           </Container>
//         </div>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <NavbarCompo />
//       <div className="mt-3">
//         <Container fluid>
//           <Row>
//             <ListCategory />
//             <Col>
//               <h4>
//                 <strong>Semua Menu Favorit</strong>
//               </h4>
//               <hr/>
//             </Col>
//             <Hasil />
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default App;
