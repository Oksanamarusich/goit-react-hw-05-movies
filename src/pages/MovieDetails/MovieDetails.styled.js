import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkBack = styled(Link)`
&:hover{
    color: ${props => props.theme.colors.orange};
    text-decoration:underline;
}

font-size: 20px;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  padding: 40px;

`;