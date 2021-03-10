import styled, { keyframes } from 'styled-components'

/*---message-Style---*/

// Message-Main
export const Main = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 10;
  width: 100%;
  background: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`
// @Animation
const TextAnimation = keyframes`
 0% {
   opacity: 0;
   transform: translateX(-150%);
 }
 100% {
   opacity: 1;
   transform: translate(0);
 }

`

// @Message-Title
export const Title = styled.h2`
  animation-name: ${TextAnimation};
  animation-duration: 1.6s;
  display: block;
  font-family: 'Calibre';
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 0.8rem;
  letter-spacing: 1px;
`

// @Message-Text
export const Text = styled.p`
  animation-name: ${TextAnimation};
  animation-duration: 1.6s;
  font-family: 'Calibre';
  font-weight: 600;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  display: block;
  letter-spacing: 0.5px;
`

// @Lato-Font
export const Lato = styled.p`
  font-family: 'Lato';
  font-size: 28px;
  font-weight: 500;
  display: inline;
`
