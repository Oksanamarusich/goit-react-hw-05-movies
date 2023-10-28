import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerCard = styled.div`
display: flex;
padding: 40px;
margin: 40px 100px;

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
    color: ${props => props.theme.colors.black};
    text-decoration:underline;
   
}

font-size: 20px;
  text-decoration: none;
  color: ${props => props.theme.colors.orange};
  padding: 40px;

`;

export const Span = styled.span`
color: ${props => props.theme.colors.black};
font-weight: bold;
margin -left: 40px;
font-size: 20px;

`;

export const ContainerInfo = styled.div`
margin: 40px 160px;
`;

export const LinkPreviews = styled(Link)`
&:hover{
    color: ${props => props.theme.colors.black};
    text-decoration:underline;
}

font-size: 20px;
  text-decoration: none;
  color: ${props => props.theme.colors.orange};
  padding: 40px;

`;

export const Cast = styled.li`
 margin: 20px;
`