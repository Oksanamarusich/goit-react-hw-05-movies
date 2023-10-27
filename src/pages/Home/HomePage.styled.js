import styled from 'styled-components';

export const Title = styled.h1`
  color:${props => props.theme.colors.blue};
  padding-left: 40px;
  font-weight: bold;
  &:hover{
     box-shadow: ${props => props.theme.shadows.small};
  }
  
`