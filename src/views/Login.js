import React, {Component} from 'react';
import styled from 'styled-components';
import Input from "../components/atoms/Input/Input";
import Button from "../components/atoms/Button/Button";

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
          <Input placeholder='Login'/>
          <Input search/>
          <Button>Login</Button>
          <Button secondary>Login 2</Button>
        </Form>
      </StyledWrapper>
    );
  }
}

export default Login;
