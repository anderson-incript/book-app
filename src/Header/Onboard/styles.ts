import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

export const Section = styled.View`
  flex: 1;
  padding: 32px 24px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const TouchableOpacitySkip = styled.TouchableOpacity``;

export const Title = styled.Text<ThemeProps>`
  font-size: 16px;
  font-weight: 300;
  color: ${({theme}) => (theme !== 'dark' ? '#06070D' : '#FFF')};
`;
