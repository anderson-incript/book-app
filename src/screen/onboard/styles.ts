import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 10px;
`;

export const Section = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 10px;
`;


export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text<ThemeProps>`
  font-size: 28px;
  font-weight: 800;
  padding-left: 28px;
  color: ${({theme}) => (theme !== 'dark' ? '#06070D' : '#FFF')};
`;


export const Text = styled.Text<ThemeProps>`
  font-size: 28px;
  font-weight: 800;
  padding-left: 28px;
  color: ${({theme}) => (theme !== 'dark' ? '#06070D' : '#FFF')};
`;
