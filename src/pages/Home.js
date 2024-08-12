import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';

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

const RecentUsersList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const Home = () => {
  return (
    <Container>
      <Title>HUBusca</Title>
      <SearchBar />
      <RecentUsersList>
        {/* Exemplo de como os UserCards dos usuários pesquisados recentemente aparecerão */}
        <UserCard user={{ name: "Nome Exemplo", login: "exemplo", location: "Exemplo City", avatar_url: "https://via.placeholder.com/150" }} />
        {/* Outros UserCards podem ser listados aqui */}
      </RecentUsersList>
    </Container>
  );
};

export default Home;
