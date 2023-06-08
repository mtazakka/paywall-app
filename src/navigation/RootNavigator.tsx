import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModalScreen from "../screens/ModalScreen";
import OrderScreen from "../screens/OrderScreen";
import TabNavigator from "./TabNavigator";

export type RootStackParamList = {
  Main: undefined;
  MyModal: {
    userId: string;
    name: string;
  };
  Order: { order: any };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen name="MyModal" component={ModalScreen} />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen
          name="Order"
          component={OrderScreen}
          options={{ headerShown: true }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
