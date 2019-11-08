import React, {Component} from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

class Login extends Component {
  render() {
    return (
      <StyledWrapper>
        <Form>
          <input/>
          <input/>
          <button>Login</button>
        </Form>
      </StyledWrapper>
    );
  }
}

export default Login;
