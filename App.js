import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from './context/ThemeContext';
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const App = () => {
  return ( 
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator 
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'home-outline';
                } else if (route.name === 'Settings') {
                  iconName = 'settings-outline';
                } else if (route.name === 'My Cards') {
                  iconName = 'card-outline';
                } else if (route.name === 'Statistics') {
                  iconName = 'stats-chart-outline';
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
              headerShown: false,
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Settings' component={Settings}/>
          </Tab.Navigator>
        </NavigationContainer>

      </PaperProvider>
    </ThemeProvider>
    

  );
}
 
export default App;