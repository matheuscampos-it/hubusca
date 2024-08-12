import React, { useState } from 'react';
import styled from 'styled-components';
import { fetchUserData, fetchUserRepos } from '../services/api';
import UserCard from './UserCard'; // Assumindo que UserCard será atualizado para mostrar dados reais

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  max-width: 400px;
  margin-right: ${({ theme }) => theme.spacing.small};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SearchBar = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const userData = await fetchUserData(username);
      const userRepos = await fetchUserRepos(username);
      setUser(userData);
      setRepos(userRepos);
    } catch (error) {
      setError('Usuário não encontrado ou erro na requisição.');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Buscar usuário do GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit">Buscar</Button>
      </Form>
      {error && <p>{error}</p>}
      {user && <UserCard user={user} repos={repos} />}
    </div>
  );
};

export default SearchBar;
