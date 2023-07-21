import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";

//font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCheese,
  faIceCream,
  faWineGlass,
  faBowlFood,
  faPlateWheat,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "sushi-roll")
    return <FontAwesomeIcon icon={faPlateWheat} className="mr-2" />;
  if (nama === "sashimi")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;
  if (nama === "main-course")
    return <FontAwesomeIcon icon={faBowlFood} className="mr-2" />;
  if (nama === "dessert")
    return <FontAwesomeIcon icon={faIceCream} className="mr-2" />;
  if (nama === "beverages")
    return <FontAwesomeIcon icon={faWineGlass} className="mr-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
};

export default class ListCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    //ini copyn dari axios react-js
    axios
      //.get(`https://jsonplaceholder.typicode.com/users`)
      //url ya kita ganti dengan url backend placeholder
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    //console.log("Categories : ", this.state.categories);
    const { categories } = this.state;
    const { changeCategory, categoriYangDipilih } = this.props;
    return (
      <Col md={2} className="mt-3">
        <h4>
          <strong>Daftar Kategori</strong>
        </h4>
        <hr />
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                onClick={() => changeCategory(category.nama)}
                className={categoriYangDipilih === category.nama && 'category-aktif'}
                style={{cursor: 'pointer'}}
              >
                <Icon nama={category.nama} /> {category.nama}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}

//https://fontawesome.com/v5/docs/web/use-with/react

// noted sebelum kita buat list category instal dulu Font Awesome ReactJS
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
