import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { searchUsers, fetchUserData, fetchUserRepos } from '../services/api';
import { addRecentUser, getRecentUsers } from '../services/localStorage';
import UserCard from './UserCard';

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

const RecentUsersList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.large};
`;

const RecentUser = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing.medium};
`;

const UserName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const SearchBar = () => {
  const [username, setUsername] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [recentUsers, setRecentUsers] = useState([]);

  useEffect(() => {
    setRecentUsers(getRecentUsers());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const users = await searchUsers(username); // Buscar usuários
      setSearchResults(users);
    } catch (error) {
      setError('Erro ao buscar usuários.');
    }
  };

  const handleRecentUserClick = async (login) => {
    try {
      const userData = await fetchUserData(login);
      const userRepos = await fetchUserRepos(login);
      setSelectedUser(userData);
      setRepos(userRepos);
      addRecentUser(userData);
      setRecentUsers(getRecentUsers()); // Atualiza a lista de usuários recentes
      setSearchResults([]); // Limpa a lista de pesquisa quando um usuário é selecionado
    } catch (error) {
      setError('Erro ao carregar dados do usuário.');
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
      {selectedUser && <UserCard user={selectedUser} repos={repos} />}
      {!selectedUser && (
        <RecentUsersList>
          <h3>Usuários Encontrados:</h3>
          {searchResults.map(user => (
            <RecentUser key={user.login} onClick={() => handleRecentUserClick(user.login)}>
              <UserImage src={user.avatar_url} alt={user.login} />
              <UserName>{user.login}</UserName>
            </RecentUser>
          ))}
        </RecentUsersList>
      )}
      <RecentUsersList>
        <h3>Usuários Recentemente Pesquisados:</h3>
        {recentUsers.map(user => (
          <RecentUser key={user.login} onClick={() => handleRecentUserClick(user.login)}>
            <UserImage src={user.avatar_url} alt={user.login} />
            <UserName>{user.login}</UserName>
          </RecentUser>
        ))}
      </RecentUsersList>
    </div>
  );
};

export default SearchBar;
