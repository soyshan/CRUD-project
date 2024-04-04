import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ContactForm from '../components/ContactForm/ContactForm';

//render:para renderizar componente de react en un entorno de prueba virtual
// firevent: funcion para simular las acciones que un usuario podria realizar en una interfaz de usuario
//waitfor: funcion para esperar hasta que se cumpla tal condición antes de ejecutar el test
//screen: es un objeto con varias funciones como getbytext, fetbylabeltext, que sirven para seleccionar elementos del DOM virtual.


describe('ContactForm', () => {
  it('should submit the form with user input', async () => {
    render(<ContactForm />);
    
    const nombreInput = screen.getByLabelText('Nombre:');
    const emailInput = screen.getByLabelText('Email:');
    const mensajeInput = screen.getByLabelText('Mensaje:');
    const enviarButton = screen.getByText('Enviar');
    
    fireEvent.change(nombreInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(mensajeInput, { target: { value: 'Hola, ¿cómo estás?' } });

    fireEvent.click(enviarButton);

    // Esperamos a que se muestre el mensaje de confirmación
    await waitFor(() => {
      expect(screen.getByText('¡Gracias por tu mensaje!')).toBeInTheDocument();
    });
  });
});


// el test verifica que el formulario se envíe correctamente con la entrada del usuario.