import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #2B2323;
        color: #FAF8F8;
    }

    .form_input {
        width: 330px;
        padding: 16px 24px;
        font-size: 16px;
        font-weight: 400;
        border-radius: 8px;
        box-shadow: 2px 2px 4px 0px rgba(22, 211, 228, 1) inset, -2px -2px 4px 0px rgba(22, 211, 228, 1) inset;
        background-color: transparent;
        color: #FAF8F8;
        border: none;
        :focus {
            outline: none;
        }
    }

    .form_submit {
        background-color: #16D3E4;
        font-weight: 600;
    }
`

export const FormInput = styled.input`
    width: 330px;
    padding: 16px 24px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    box-shadow: 2px 2px 4px 0px rgba(22, 211, 228, 1) inset, -2px -2px 4px 0px rgba(22, 211, 228, 1) inset;
    background-color: transparent;
    color: #FAF8F8;
    border: none;
    :focus {
        outline: none;
    }
`

export const FormSubmit = styled(FormInput)`
    background-color: #16D3E4;
    font-weight: 600;
    cursor: pointer;
`