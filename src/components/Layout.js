import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';

import { Navigation } from './Navigation';
import { Header } from './Header.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
      <Suspense fallback={'LOADING PAGE...'}>
        <Outlet />
     </Suspense>
      

      <Toaster position="top-right" /> 
    </Container>
  );
};