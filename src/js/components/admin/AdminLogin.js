import React, { StartupActions }  from 'react';
import './AdminLogin.scss';
import { connect } from 'react-redux';
import { Form, FormFeedback, FormGroup, Label, Input, Container } from 'reactstrap';
import Button from '../utils/Button';
import { loginUser, logoutUser } from '../../actions/authActions';

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      password: '', 
      prompt: '',
    };
  }

  handleChange(password) {
    this.setState({
      password: password
    });
  }

  logIn(e) {
    e.preventDefault();
    if (this.state.password === '') {
      this.setState({
        prompt: 'Please fill in a password'
      })
      return;
    }
    // loginUser(this.state.password);
    logoutUser();
  }

  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for="password">Log in to modify data</Label>
            <Input 
              type="password" 
              name="password"
              placeholder="Password" 
              onChange={e => this.handleChange(e.target.value)} 
              invalid={this.state.prompt !== ''}
              required 
            />
            <FormFeedback>{this.state.prompt}</FormFeedback>
          </FormGroup>
          <Button 
            onClick={(e) => this.logIn(e)}
            label="Log In"
          />
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  loginUser: dispatch(loginUser()),
  logoutUser: dispatch(logoutUser()),
  startup: () => dispatch(StartupActions.startup())
});

const mapStateToProps = (state) => ({
  state: state,
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);