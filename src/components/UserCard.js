import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

const Name = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Login = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Location = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ReposList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  width: 100%;
`;

const Repo = styled.a`
  display: block;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const UserCard = ({ user, repos }) => {
  return (
    <Card>
      <Avatar src={user.avatar_url} alt={user.name} />
      <UserInfo>
        <Name>{user.name}</Name>
        <Login>@{user.login}</Login>
        <Location>{user.location || 'Localização não disponível'}</Location>
      </UserInfo>
      <ReposList>
        <h4>Repositórios:</h4>
        {repos.map(repo => (
          <Repo key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </Repo>
        ))}
      </ReposList>
    </Card>
  );
};

export default UserCard;
