import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Header } from './Header.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //gap: ${p => p.theme.spacing(6)};
  //padding: ${p => p.theme.spacing(4)};
  max-width: 100%;
  margin: 0 auto;
  background-color:  ${props => props.theme.colors.white};
`;

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>

      <Outlet />

      <Toaster position="top-right" /> 
    </Container>
  );
};