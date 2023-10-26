import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  &.active {
    color: #DC965A;
    text-decoration:underline;
  }
  margin-right: ${props => props.theme.spacing(4)};
  font-size: 20px;
  text-decoration: none;
  color: ${props => props.theme.colors.white};

`;

export const Navigation = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
       
        </nav>
    );
}