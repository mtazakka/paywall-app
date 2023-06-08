import { useQuery } from "@apollo/client";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Input } from "@rneui/themed";
import { useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { GET_CUSTOMERS } from "../../graphql/queries";
import CustomerCard from "../components/CustomerCard";
import { RootStackParamList } from "../navigation/RootNavigator";
import { TabStackParamList } from "../navigation/TabNavigator";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Costumers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CostumersScreen = () => {
  const [input, setInput] = useState<string>("");
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  return (
    <ScrollView className="bg-[#59C1CC]">
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={{ width: "100%", height: 256 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search by Costumer"
        value={input}
        onChangeText={(e) => setInput(e)}
        containerStyle={{
          backgroundColor: "white",
          paddingTop: 20,
          paddingBottom: 0,
          paddingHorizontal: 40,
        }}
      />
      {data?.getCustomers
        ?.filter((customer: CostumerList) =>
          customer.value.name.includes(input)
        )
        .map(({ name: ID, value: { email, name } }: CustomerResponse) => (
          <CustomerCard key={ID} email={email} name={name} userId={ID} />
        ))}
    </ScrollView>
  );
};

export default CostumersScreen;
