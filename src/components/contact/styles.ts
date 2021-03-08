import Selects from 'react-select'
import styled, { css } from 'styled-components'
import { Controller } from 'react-hook-form'

// infomation
export const Info = styled.div`
  font-weight: 400;
  font-size: 24px;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
`
export const Mail = styled.a`
  color: ${props => props.theme.colors.mail};
  text-decoration: none;
  cursor: pointer;
`

// form
export const Inquiry = styled.div`
  flex: none;
  width: 60%;
`

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 0.5em;
  display: block;
`

export const Columns = styled.div`
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
  display: flex;
  :nth-child(2) {
    margin-bottom: 0.3rem;
  }
  :nth-child(4) {
    margin-bottom: -0.8rem;
  }
  :nth-child(5) {
    margin-bottom: 0.2rem;
  }
`

export const Column = styled.div`
  margin-bottom: 0.2rem;
  padding: 0.75rem;
  width: 100%;
`

export const Input = styled.input`
  outline: none;
  font-size: 16px;
  font-family: 'Calibre';
  max-width: 100%;
  width: 100%;
  height: 37px;
  border-radius: 0;
  color: #4a4a4a;
  padding-left: 0.5rem;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-color: #dbdbdb;
`

export const Select = styled(Controller)`
  font-size: 16px;
  font-family: 'Calibre';
  color: #4a4a4a;
  border-color: #dbdbdb;
  border-radius: 0;
  max-width: 100%;
  width: 100%;
  height: 36px;
  border-radius: none;
  box-sizing: border-box;
`

// FormeTxtares
export const Textarea = styled.textarea`
  outline: none;
  font-size: 16px;
  font-family: 'Calibre';
  color: #4a4a4a;
  max-width: 100%;
  width: 100%;
  resize: none;
  max-height: 40em;
  min-height: 8em;
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: calc(0.75em - 1px);
  border: 1px solid transparent;
  border-color: #dbdbdb;
`

// FormCheckbox
export const CheckLabel = styled.label`
  display: flex;
  cursor: pointer;
  line-height: 1.25;
  :first-of-type {
    margin-bottom: 0.75rem;
  }
`

export const CheckInput = styled.input`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  flex: 0 0 24px;
  cursor: pointer;
`

export const Link = styled.a`
  color: ${props => props.theme.colors.mail};
  text-decoration: none;
  cursor: pointer;
`

export const CheckText = styled.span`
  display: inline-block;
  opacity: 0.8;
`

// FormButton
export const FormButton = styled.button`
  font-family: 'Calibre';
  display: flex;
  background-color: #de3c4b;
  border-color: transparent;
  color: #fff;
  margin-left: auto;
  padding: 18px 33px;
  font-size: 1.2rem;
  line-height: 1.1;
`
