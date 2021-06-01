

describe('Pruebas en el archivo demo.test.js', () => {

    test( 'debe de ser true', () => {

        const isActive = true;
    
        if (isActive) {
            
            // 1. inicualización
            const mensaje = 'Hola Mundo';
    
            // 2. estímulo
            const mensaje2 = `Hola Mundo`;
    
            // 3. Observar el comportamiento
            expect( mensaje ).toBe( mensaje2 ); // ===
    
        }
    
    })

});