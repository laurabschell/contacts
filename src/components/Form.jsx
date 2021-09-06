import React from 'react'
import styled from 'styled-components'
import { Colors } from '../styles/styling-variables'
import Button from './Button'

const NewFormContainer = styled.section`
    background-color: ${Colors.newGreen};
    width: 40vw;
    height: 50vh;
    margin: 0 auto;
    border-radius: 0 0 5px 5px;
    box-shadow: ${Colors.shadow};
`

const NewForm = styled.form`
    color: ${Colors.formsColor};
    font-weight: 700;
    margin: 2rem auto 0 auto;
    padding: 2rem;
    width: 80%;
    height: 100%;
`

const Input = styled.input`
    color: ${Colors.formsColor};
    text-align: center;
    margin: 1rem auto;
    background-color: rgba(153, 205, 50, 0);
    border: 0;
    border-bottom: 1px solid ${Colors.formsColor};
    outline: 0;
    width: 100%;
    height: 2rem;
`

function Form() {
    const handleOnSubmit = () => {
        // this.props.onSubmit(this.state)
    }
    return (
        <NewFormContainer>
            <NewForm onSubmit={handleOnSubmit}>
                <Input 
                    name="first-name-input" 
                    type="text" placeholder="First Name"
                    // value={}
                    />
                <Input 
                    name="last-name-input" 
                    type="text" placeholder="Last Name"
                    // value={}
                    />
                <Input 
                    name="email-input"
                    type="text" placeholder="Email"
                    // value={}
                    />
                <div className="field">
                    <label>Enable as favorite </label>
                    <input
                    type="checkbox"
                    name="fav"
                    // checked={this.state.fav}
                    // onChange={this.handleChange}
                    />
                </div>
                <Button text="save" />
            </NewForm>
        </NewFormContainer>
    )
}

export default Form
