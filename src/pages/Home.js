import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  font-weight: bold;
`;

const Home = () => {
  return (
    <Container>
      <Title>HUBusca</Title>
      <SearchBar />
    </Container>
  );
};

export default Home;
