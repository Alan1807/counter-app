import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

// const saludo = <h1>Hola Mundo</h1>
const divRoot = document.querySelector('#app');

// ReactDOM.render( <PrimeraApp saludo='Hola, Soy Goku' />, divRoot );
ReactDOM.render( <CounterApp />, divRoot );