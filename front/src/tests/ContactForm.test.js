import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ContactForm from '../components/ContactForm/ContactForm';

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

