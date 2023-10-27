import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  &.active {
    color: ${props => props.theme.colors.orange};
    text-decoration:underline;
  }
  margin-right: ${props => props.theme.spacing(4)};
  font-size: 20px;
  text-decoration: none;
  color: ${props => props.theme.colors.white};

`;

const Nav = styled.nav`
padding-left: 40px;

`

export const Navigation = () => {
    return (
        <Nav >
            <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
       
        </Nav>
    );
}