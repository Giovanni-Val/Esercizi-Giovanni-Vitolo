import { useEffect, useRef } from 'react';
import { Form, Container } from 'react-bootstrap';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-start vh-100 bg-dark text-light"
    >
      <Form className="mt-5 w-16 px-5"> {/* Full width and padding */}
        <Form.Group>
          <Form.Control
            ref={inputRef}
            type="text"
            placeholder="Questo input ha autofocus."
            className="form-control-lg"
            style={{
              boxShadow: 'none',
              transition: 'box-shadow 0.3s ease-in-out',
            }}
            onFocus={(e) => (e.target.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.7)')}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default FocusableInput;
