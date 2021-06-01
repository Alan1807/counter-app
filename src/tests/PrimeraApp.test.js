import React from 'react';
import { shallow } from 'enzyme';
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {

    // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {

    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );

    //     expect( getByText(saludo) ).toBeInTheDocument();

    // });

    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

    });

});