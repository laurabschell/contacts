import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../styles/styling-variables'
import defaultIMG from "../../assets/user.png"
import PropTypes from 'prop-types';

const NewFormContainer = styled.section`
    background-color: ${Colors.newGreen};
    width: 40vw;
    height: 50vh;
    margin: 0 auto;
    border-radius: 0 0 5px 5px;
    box-shadow: ${Colors.shadow};
    display: flex;
    justify-content: center;
`

const NewForm = styled.form`
    color: ${Colors.formsColor};
    font-weight: 700;
    margin: 0 auto;
    padding: 2rem;
    width: 80%;
    height: 100%;
`

const Input = styled.input`
    color: ${Colors.formsColor};
    font-size: .9rem;
    text-align: center;
    margin: 1rem auto;
    background-color: rgba(153, 205, 50, 0);
    border: 0;
    border-bottom: 1px solid ${Colors.formsColor};
    outline: 0;
    width: 100%;
    height: 2rem;
`

const Button = styled.button`
    background-color: ${props => props.text === "new" ? Colors.newGreen : 'beige'};
    color: ${props => props.text === "new" ? 'white' : Colors.fontColor};
    float: right;
    width: 4rem;
    margin: 1.5rem 0;
    padding: .5rem .8rem;
    border-radius: 3px;
    font-size: .7rem;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    box-shadow: ${Colors.shadow};
    cursor: pointer;
    display: flex;
`

const ErrorText = styled.p`
    color: ${Colors.trashColor};
    font-size: .7rem;
    font-weight: 500;
    line-height: 50%;
`

const CheckBox = styled.input`
    margin: 1.3rem .6rem;
`

const CheckBoxLabel = styled.span`
    font-size: .8em;
    font-weight: 300;
`

const defaultState = {
    id: new Date().getTime(),
    avatar: defaultIMG,
    first_name: "",
    last_name: "",
    email: "",
    is_favorite: false,
    nameError: "",
    emailError: ""
}

class Form extends React.Component {
    constructor(props) {
      super(props);  
      this.state = defaultState;
    }   

    validateInputs = () => {
        let nameError = "";
        let emailError = "";

        if(!this.state.email) {
            emailError = "* Required field"
        } else {
            if(!this.state.email.includes('@')) {
                emailError = "Invalid email address"
            }
        }

        if(!this.state.first_name) {
            nameError = "* Required field";
        }

        if(emailError || nameError) {
            this.setState({emailError: emailError, nameError: nameError});
            return false;
        }

        return true
    }

    handleOnChange = (e) => {
        const isCheckbox = e.target.type === "checkbox";
        const value = isCheckbox ? e.target.checked : e.target.value;
        this.setState({
            ...this.state,
            [e.target.name] : value
        })
    }

    handleReset = () => {
        console.log("handle reset in")
        this.setState = {defaultState};
    }

    handleOnSubmit  = (e)  => { 
        e.preventDefault();
        const isValid = this.validateInputs();
        if(isValid) {
            this.props.handleOnSubmit(this.state);
            this.handleReset();
            this.props.handleExit();
        }
    }

    render() {
        return (
            <NewFormContainer>
                <NewForm>
                    <Input 
                        name="first_name" 
                        type="text" placeholder="First Name"
                        value={this.state.first_name}
                        onChange={e => this.handleOnChange(e)}
                        />
                        {this.state.nameError && <ErrorText>{this.state.nameError}</ErrorText>}
                    <Input 
                        name="last_name" 
                        type="text" placeholder="Last Name"
                        value={this.state.last_name}
                        onChange={e => this.handleOnChange(e)}
                        />
                    <Input 
                        name="email" 
                        type="email" placeholder="Email"
                        value={this.state.email}
                        onChange={e => this.handleOnChange(e)}
                        />
                        {this.state.emailError && <ErrorText>{this.state.emailError}</ErrorText>}
                    <CheckBox 
                        name="is_favorite" 
                        type="checkbox"
                        value={this.state.is_favorite}
                        onChange={e => this.handleOnChange(e)}
                        />
                        <CheckBoxLabel>Enable as favorite</CheckBoxLabel>
                    <Button onClick={(e) => this.handleOnSubmit(e)}>Save</Button>
                </NewForm>
            </NewFormContainer>
        )
    }

}

Form.propTypes = {
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    fav: PropTypes.bool,
    isValid: PropTypes.bool,
    avatar: PropTypes.string,
    nameError: PropTypes.string,
    emailError: PropTypes.string
};

export default Form
