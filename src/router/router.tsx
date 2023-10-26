import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// SERVICES
import {RootStackParamList} from './RootStackParamList';
import {ThemeModeProvider} from 'src/context/ThemeContext';

// COMPONENTS
import HomeScreen from '../screen/home';
import OnboardScreen from '../screen/onboard';

const queryClient = new QueryClient();

const Stack = createStackNavigator<RootStackParamList>();

export default function RouteNavigation() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeModeProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Onboard">
            <Stack.Screen
              name="Onboard"
              component={OnboardScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeModeProvider>
    </QueryClientProvider>
  );
}
