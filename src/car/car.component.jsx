import React, { Component } from 'react';
import { Link } from 'react-router';

class Car extends Component {
    render(){
        // Get data from route props
        const cars = this.props.route.data;
        // Map through cars and return linked cars
        const carNode = cars.map((car) => {
            return (
                <Link
                    to={"/cars/"+car.id}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>Fasion Dress Selction </h1>
                <div className="list-group">
                    {carNode}
                </div>
                <h1> Beautiful Long Top Design For Girls</h1>
                <div className="col-sm-12 col-md-4 col-lg-3 py-3">
                <div className="cardmycard ">
                  <img className="card-img-top" src="https://i.ebayimg.com/images/g/xukAAOSw0ntc1VKJ/s-l300.jpg" width="100%"/>
                  <div className="card-body">
                    <h4>New Tops Designs 2020 | Beautiful long Design For Girls</h4>
                  </div>

                </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3 py-3">
                <div className="cardmycard">
                  <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/51qIXA0ooZL._UY550_.jpg" width="100%"/>
                  <div className="card-body">
                    <h4>New Arraivel Designs 2020 | morden girl Designs | Party Wear top</h4>
                  </div>

                </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3 py-3">
                <div className="cardmycard">
                  <img className="card-img-top" src="https://i.ebayimg.com/images/g/t8UAAOSwf5FczVp1/s-l300.jpg" width="100%"/>
                  <div className="card-body">
                    <h4>Beautiful And Stylish Tops Design For Girl| seclction 2020| Treandy Women Tops</h4>
                  </div>

                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3 py-3">
                <div className="cardmycard">
                  <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/81rJpZfXP-L._UY606_.jpg" width="100%"/>
                  <div className="card-body">
                    <h4>Beautiful And Stylish Tops Design For Girl|2020| Treandy Women Tops</h4>
                  </div>

                </div>
              </div>
            </div>
        );
    }
}

export default Car
