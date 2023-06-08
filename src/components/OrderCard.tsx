/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/themed";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigation/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

type Props = {
  item: Order;
};

const OrderCard = ({ item }: Props) => {
  const navigation = useNavigation<OrdersScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Order", { order: item })}
    >
      <Card containerStyle={{ paddingHorizontal: 20, borderRadius: 10 }}>
        <View className="flex-row justify-between items-center">
          <View>
            <Icon
              name="truck-delivery"
              color={"#EB6A7C"}
              type="material-community"
            />
            <Text style={{ fontSize: 10 }}>
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>

          <View>
            <Text className="text-grey-400 text-[10px]">
              {item.carrier}-{item.trackingId}
            </Text>
            <Text className="text-gray-500 text-lg">
              {item.trackingItems.customer.name}
            </Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-xs text-[#EB6A7C]">
              {item.trackingItems.items.length} x
            </Text>
            <Icon name="box" style={{ marginLeft: 8 }} type="feather" />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;
