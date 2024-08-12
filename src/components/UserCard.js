import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing.medium};
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Login = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Location = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const UserCard = ({ user }) => {
  return (
    <Card>
      <Avatar src={user.avatar_url} alt={user.name} />
      <UserInfo>
        <Name>{user.name}</Name>
        <Login>@{user.login}</Login>
        <Location>{user.location}</Location>
      </UserInfo>
    </Card>
  );
};

export default UserCard;
