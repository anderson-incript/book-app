// IMPORTS 

// SERVICES
import {useThemeMode} from '../../context/ThemeContext';

//  COMPONENTS

// STYLES COMPONENTS
import {Container, Title} from './styles';

export default function Home() {
  const {theme} = useThemeMode();

  return (
    <Container>
      <Title theme={theme}>Popular Movies</Title>

    </Container>
  );
}
