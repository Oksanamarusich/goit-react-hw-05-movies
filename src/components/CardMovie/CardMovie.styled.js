import styled from 'styled-components';

export const ContainerCard = styled.div`
display: flex;
padding: 40px;

&:hover{
   box-shadow: ${props => props.theme.shadows.regular};  
}
`;

export const Poster = styled.img`
border-radius: 8px;

`;

export const PosterContainer = styled.div`
margin-right: 40px;
`;

export const TitleMovie = styled.h2`
color: ${props => props.theme.colors.black};
font-weigth: bold;
`;

export const Title = styled.h3`
color: ${props => props.theme.colors.blue};
font-weight: bold;
`