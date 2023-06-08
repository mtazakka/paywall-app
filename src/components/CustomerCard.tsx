import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { Card, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { CustomerScreenNavigationProp } from "../screens/CostumersScreen";

type Props = {
  userId: string;
  name: string;
  email: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MyModal", {
          name,
          userId,
        })
      }
    >
      <Card containerStyle={{ borderRadius: 10, padding: 20 }}>
        <View>
          <View className="flex-row justify-between">
            <View>
              <Text className="text-2xl font-bold">{name}</Text>
              <Text className="text-sm text-[#59C1CC]">ID: {userId}</Text>
            </View>

            <View className="flex-row justify-end items-center">
              <Text className="text-[#59C1CC]">
                {loading ? "loading..." : `${orders.length}`} x
              </Text>
              <Icon
                style={{ marginBottom: 20, marginLeft: "auto" }}
                name="box"
                color="#59C1CC"
                type="entypo"
                size={50}
              />
            </View>
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
