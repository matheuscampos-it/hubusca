import React, { useState } from 'react';
import styled from 'styled-components';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você vai lidar com a submissão e buscar o usuário no GitHub
    console.log('Buscando usuário:', username);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Buscar usuário do GitHub"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button type="submit">Buscar</Button>
    </Form>
  );
};

export default SearchBar;
