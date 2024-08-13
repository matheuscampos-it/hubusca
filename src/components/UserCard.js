// src/components/UserCard.js

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 2rem auto;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const RepoSection = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RepoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RepoItem = styled.li`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    display: block;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const UserCard = ({ user, repos }) => {
  return (
    <Card>
      <Avatar src={user.avatar_url} alt={user.login} />
      <Info>
        <h2>{user.name || user.login}</h2>
        <p>{user.bio}</p>
        <p><strong>{user.public_repos}</strong> repositórios públicos</p>
        <p><strong>{user.followers}</strong> seguidores</p>
      </Info>
      <RepoSection>
        <h3>Repositórios:</h3>
        <RepoList>
          {repos.map(repo => (
            <RepoItem key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </RepoItem>
          ))}
        </RepoList>
      </RepoSection>
    </Card>
  );
};

export default UserCard;
