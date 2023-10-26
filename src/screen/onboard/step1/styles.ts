import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

export const Section = styled.View`
  flex-direction: column;
  gap: 10px;
`;

