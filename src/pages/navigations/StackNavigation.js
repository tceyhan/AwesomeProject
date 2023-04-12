import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../Detail/Detail';
// import HeaderBar from '../../components/HeaderBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../Search/Search';
import SelectTour from '../SelectTour/SelectTour';
import Checkout from '../CheckOut/Checkout';

const StackNavigation = ({navigation}) => {
  const Stack = createNativeStackNavigator();

  const handleMenu = () => {
    navigation.navigate('Search');
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#c55'},
        headerTitleStyle: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 25,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Bilet Ara',
          headerLeft: () => (
            <Icon
              name="menu"
              size={30}
              color="white"
              onPress={handleMenu}
            />
          ),
        }}
      />
      <Stack.Screen
        name="selectedTour"
        component={SelectTour}
        options={{
          // headerTitle: props => <HeaderBar {...props} />,
          title: 'Sefer Seç',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          // headerTitle: props => <HeaderBar {...props} />,
          title: 'Sefer Detay',
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          // headerTitle: props => <HeaderBar {...props} />,
          title: 'Ödeme Ekranı',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
