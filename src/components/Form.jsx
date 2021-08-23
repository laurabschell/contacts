import React from 'react'
import styled from 'styled-components'
import { Colors } from './styling-variables'

const NewFormContainer = styled.section`
    background-color: ${Colors.shadow};
    width: 50vw;
    max-width: 550px;
    height: 40vh;
    min-height: 350px;
    margin: 1.1em auto 0 auto;
    border-radius: 0 0 5px 5px;
    box-shadow: ${Colors.shadow};
`

const NewForm = styled.form`
    color: ${Colors.formsColor};
    font-weight: 700;
    margin: 0 auto;
    padding: 2rem;
    width: 80%;
    height: 100%;
    display: flexbox;
    flex-direction: column;
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
    return (
        <NewFormContainer>
            <NewForm>
                <Input name="name-input" type="text" placeholder="First Name" />
                <Input name="name-input" type="text" placeholder="Last Name"/>
                <Input name="email-input" type="text" placeholder="Email"/>
            </NewForm>
        </NewFormContainer>
    )
}

export default Form
