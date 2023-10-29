import styled from 'styled-components';

export const Header = styled.header`
width: 100%;
height: 50px;
padding: ${props => props.theme.spacing(4)};
background-color:  ${props => props.theme.colors.black};
`;