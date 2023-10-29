import styled from 'styled-components';

export const Message = styled.p`
font-weight: 700;

font-size: 20px;
color: ${props => props.theme.colors.orange};
padding: 0 0 40px 40px;
margin: 0;
`;

export const List = styled.ul`
padding: 10px 40px 80px 40px;
margin: 0;
`;
export const Title = styled.h3`
margin-top: 0;
`