import styled from 'styled-components';

export const Container = styled.ul`
display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.li`
width: calc((100% - 90px) / 10);
  padding-bottom: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  `;

  

export const Title = styled.h3`
font-size: 14px;
`;

export const Text = styled.p`
font-size: 14px;
`;