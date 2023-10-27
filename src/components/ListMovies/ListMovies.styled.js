import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
margin-bottom: 10px;
`;

export const LinkItem = styled(Link)`
text-decoration: none;
color:${props => props.theme.colors.black};
font-size: 20px;
font-weight: bold;
&:hover {
    color: ${props => props.theme.colors.orange};
    text-decoration:underline;
}
`