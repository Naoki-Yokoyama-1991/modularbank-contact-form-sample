import styled from 'styled-components'

/*---Infomation-Style---*/

// InfomationContent
export const Content = styled.div`
  @media (min-width: 769px) {
    margin-bottom: 4rem;
  }
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 0.4rem;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
`
// InfomationSidebar
export const Sidebar = styled.div`
  margin-top: 32px;
  margin-bottom: 17px;
`

// InfomationMailATag
export const Mail = styled.a`
  color: ${props => props.theme.colors.mail};
  text-decoration: none;
  cursor: pointer;
`

// @InfomationTitle
export const InfoTitle = styled.h1`
  @media (min-width: 769px) {
    display: none;
  }
  letter-spacing: 0.5px;
  font-family: 'Calibre-regular';
  font-size: 46px;
  font-weight: 600;
`

/*---Form-Style---*/

// Form-Main&ButtonActiveOrPassive
export const Main = styled.div`
  @media (min-width: 769px) {
    flex: none;
    width: 60%;
    margin-bottom: 1rem;
  }
  .active {
    background-color: ${props => props.theme.colors.mail};
    cursor: pointer;
  }
  .passive {
    opacity: 0.5;
    background-color: ${props => props.theme.colors.mail};
  }
`

// Columns
export const Columns = styled.div`
  @media (min-width: 769px) {
    display: flex;
    :nth-child(3) {
      margin-bottom: 0.6rem;
    }
    :nth-child(4) {
      margin-bottom: -0.8rem;
    }
    :nth-child(5) {
      margin-bottom: 0.5rem;
    }
  }
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
`

// ColumnForm&Info"Common"
export const Column = styled.div`
  padding: 0.75rem;
  width: 100%;
`

// FormTitle
export const Title = styled.h1`
  @media (max-width: 769px) {
    display: none;
  }
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
  font-family: 'Calibre-regular';
  font-size: 46px;
  font-weight: 600;
`

// FormTitle
export const Error = styled.div`
  margin-top: 0.2rem;
  font-size: 1rem;
  color: ${props => props.theme.colors.mail};
`

// FormStyle
export const Form = styled.form``

// FormLabel
export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5em;
  display: block;
`
// FormInput
export const Input = styled.input`
  -webkit-appearance: none;
  border-radius: 0;
  outline: none;
  font-size: 1rem;
  font-family: 'Calibre';
  max-width: 100%;
  width: 100%;
  height: 36px;
  color: ${props => props.theme.colors.input};
  padding-left: 0.5rem;
  border: 1px solid transparent;
`

// FormeTxtares
export const Textarea = styled.textarea`
  -webkit-appearance: none;
  border-radius: 0;
  outline: none;
  font-size: 1rem;
  font-family: 'Calibre';
  color: ${props => props.theme.colors.input};
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
`

// LabelBox
export const LabelBox = styled.label`
  display: flex;
  cursor: pointer;
  line-height: 1.25;
  margin-top: 0.3rem;
  :first-of-type {
    margin-bottom: 0.75rem;
  }
  @media (max-width: 769px) {
    :first-of-type {
      margin-bottom: 1.2rem;
    }
  }
`
// InputBox
export const InputBox = styled.input`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  flex: 0 0 24px;
  cursor: pointer;
`

// ATagLink
export const Link = styled.a`
  color: ${props => props.theme.colors.mail};
  text-decoration: none;
  cursor: pointer;
`
// TextBox
export const Text = styled.span`
  display: inline-block;
  opacity: 0.8;
`

// FormButton
export const FormButton = styled.button`
  @media (max-width: 769px) {
    margin-bottom: 1.5rem;
  }
  font-family: 'Calibre';
  display: flex;
  border-color: transparent;
  color: ${props => props.theme.colors.text};
  margin-left: auto;
  margin-top: 0.1rem;
  padding: 18px 33px;
  font-size: 1.2rem;
`
// LatoFont
export const Lato = styled.p`
  font-family: 'Lato';
  font-size: 1rem;
  font-weight: 300;
  display: inline;
`

// LatoFont2
export const Lato2 = styled.p`
  font-family: 'Lato';
  font-size: 1.2rem;
  font-weight: 500;
  display: inline;
`
