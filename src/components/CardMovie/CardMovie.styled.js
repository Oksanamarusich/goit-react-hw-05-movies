import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerCard = styled.div`
display: flex;
padding: 40px;
`;

export const Poster = styled.img`
border-radius: 8px;
`;

export const PosterContainer = styled.div`
margin-right: 40px;
`;

export const TitleMovie = styled.h2`
color: ${props => props.theme.colors.black};
font-weight: bold;
`;


export const Title = styled.h3`
color: ${props => props.theme.colors.blue};
font-weight: bold;
`;

export const LinkCast = styled(Link)`
&:hover{
    color: ${props => props.theme.colors.orange};
    text-decoration:underline;
   margin-bottom: 40px;
}

font-size: 20px;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  display: block;
  padding: 10px 0;

`;

export const Span = styled.span`
color: ${props => props.theme.colors.black};
font-weight: bold;
margin -left: 40px;
font-size: 20px;

`;

export const ContainerInfo = styled.div`
padding: 0 40px;
`;

export const LinkPreviews = styled(Link)`
&:hover{
    color: ${props => props.theme.colors.orange};
    text-decoration:underline;
}

font-size: 20px;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  display: block;
  padding: 10px 0;
  margin-bottom: 40px;


`;

export const List = styled.ul`
display: flex;
gap: 20px;
margin: 0;
padding:0;
 
`