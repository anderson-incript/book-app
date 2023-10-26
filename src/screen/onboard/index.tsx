// IMPORTS

// SERVICES
import {useThemeMode} from '../../context/ThemeContext';

//  COMPONENTS
import {SvgUri} from 'react-native-svg';
import HeaderOnboard from 'src/Header/Onboard/index';

// STYLES COMPONENTS
import {Container, Section, Text, Title} from './styles';

export default function Onboard() {
  const {theme} = useThemeMode();

  const RenderStep = ({step}: {step: number}) => {
    return (
      <Section>
        <Title>Only Books Can Help You</Title>
        <Text>
          Books can help you to increase your knowledge and become more
          successfully.
        </Text>
      </Section>
    );
  };
  return (
    <Container>
      <HeaderOnboard />
      <Section>
        <Title>Only Books Can Help You</Title>
        <Text>
          Books can help you to increase your knowledge and become more
          successfully.
        </Text>
      </Section>
      {/* <SvgUri
        width="200"
        height="200"
        uri={require('../../assets/images/splash.svg')}
      />
      <RenderStep step={0} /> */}
    </Container>
  );
}
