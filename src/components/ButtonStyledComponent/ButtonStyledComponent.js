import React from 'react';
import styled, {css} from 'styled-components/macro'

const getButtonStyles = ({type}) => {
    switch (type) {
        case 'error':
            return css`
                color: red;
            `;

        case 'message':
            return css`
                background-color: gray;
            `;

        default:
          break;
    }
};

const ButtonStyle = styled.button`
    background-color: green;
    
    /* The GitHub button is a primary button
    * edit this to target it specifically! */
    ${props => props.primary && css`
        background-color: white;
        color: black;
    `}
    
    ${getButtonStyles}
    
    1 22        /* todo: проект соберется и попадут в css */ 
        
    color: white; /* стиль не применится, из-за ошибки выше */
    color: blue;  /* этот стиль применится */        
`;

const ButtonStyledComponent = (props) => {
  return (
    <>
      <ButtonStyle primary={props.primary} type={props.type}>Button Styled Component</ButtonStyle>
    </>
  )
};

export default ButtonStyledComponent
