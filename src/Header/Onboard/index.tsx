// IMPORTS
import {useNavigation} from '@react-navigation/native';

// SERVICES
import {IconArrowLeft} from '../../assets/images/icons';
import {useThemeMode} from '../../context/ThemeContext';

//  COMPONENTS
import {TouchableOpacity} from 'react-native';

// STYLES COMPONENTS
import {Section, Title} from './styles';

export default function HeaderOnboard() {
  const {theme} = useThemeMode();
  const navigation = useNavigation();

  return (
    <Section>
      <IconArrowLeft strokeWidth={1} color="#000" size={32} />

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Title theme={theme}>Skip</Title>
      </TouchableOpacity>
    </Section>
  );
}
