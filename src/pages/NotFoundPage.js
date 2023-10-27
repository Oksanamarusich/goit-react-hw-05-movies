import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeLink = styled(Link)`
 
color:${props => props.theme.colors.orange};
  
`
const Container = styled.div`
padding: 150px 200px 200px 250px;
color: ${props => props.theme.colors.black};
font-size:25px;
font-weight: bold;

`

export default function NotFoundPage() {
    return <Container>
        Sorry, there is no such route.
        Please follow this link to the  <HomeLink to = "/">home page</HomeLink>
    </Container>
}