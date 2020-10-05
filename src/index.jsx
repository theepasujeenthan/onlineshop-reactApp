import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
// import {Router, Route} from 'react-router';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
        id: 1,
        name: 'LADIES BRIDEL SARRY',
        year	: '6.3 CUT',
        model: 'Pattu',
        make: 'Amani',
        media: 'sarry.jpg',
        price: 'RS 15999.00'

    },
    {
        id: 2,
        name: 'LADIES FROCK',
        year: 'M, L, XL',
        model: 'Crepe, Satin',
        make: 'Amani',
        media: 'frock.jpg',
        price: 'RS 8995.00'

    },
    {
        id: 3,
        name: 'LADIES LONG SLEEVE TOP',
        year: 'M, L, XL',
        model: 'Single Jersey',	
      
        make: 'Amani',
        media: 'top.jpeg',
        price: 'RS 1,450.00'
    },
    {
        id: 4,
        name: 'LADIES PRINTED DRESS',
        year: ' S, M, L, XL ',
        model: ' Linen ',
        make: 'Linen',
        media: '4th.jpg',
        price: 'RS 2,090.00'
    },
    {
        id: 5,
        name: 'LADIES SHORT SLEEVE TOP ',
        year: 'M, L, XL, XXL ',
        model: ' Georgette',
        make: ' Amani',
        media: '5th.jpg',
        price: ' RS 1,750.00'
    }
];


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car} data={data}/>
            {/* Parameter route*/}
            <Route path="/cars/:id" component={CarDetail} data={data}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);



























// render(
//     <Router history={browserHistory}>
//     <Router>
//         <Route path="/" component={Home}/>
//         <Route path="/cars" component={Car}/>
//         <Route path="/about" component={About}/>
//     </Router>
//     </Router>,
//     document.getElementById('container')
// );