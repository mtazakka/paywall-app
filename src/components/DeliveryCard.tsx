import { View, Text } from "react-native";
import React from "react";
import { Card } from "@rneui/base";
import { Divider, Icon } from "@rneui/themed";
import MapView, { Marker } from "react-native-maps";

type Props = {
  order: Order;
  fullWidth?: boolean;
};

const DeliveryCard = ({ order, fullWidth }: Props) => {
  return (
    <Card
      containerStyle={{
        borderRadius: fullWidth ? 0 : 10,
        margin: fullWidth ? 0 : 10,
        marginVertical: 8,
        backgroundColor: fullWidth ? "#EB6A7C" : "#59C1CC",
        padding: 0,
        paddingTop: 16,
        shadowColor: "black",
        shadowOffset: { width: 8, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 1,
      }}
    >
      <View style={fullWidth && { height: "100%" }}>
        <Icon name="box" type="entypo" size={50} color="white" />
        <View>
          <Text className="text-xs text-center uppercase text-white font-bold">
            {order.carrier} - {order.trackingId}
          </Text>
          <Text className="text-lg text-center text-white font-bold">
            Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
          <Divider color="white" />
        </View>

        <View className="mx-auto pb-5">
          <Text className="text-base text-center text-white font-bold mt-5">
            Address
          </Text>
          <Text className="text-sm text-center text-white">
            {order.Address}, {order.City}
          </Text>
          <Text className="text-sm text-center text-white">
            Shipping Cost: ${order.shippingCost}
          </Text>
        </View>

        <Divider color="white" />

        <View className="p-5">
          {order.trackingItems.items.map((item) => (
            <View
              className="flex-row justify-between items-center"
              key={item.name}
            >
              <Text className="text-sm italic text-white">{item.name}</Text>
              <Text className="text-sm text-white">x {item.quantity}</Text>
            </View>
          ))}
        </View>

        <MapView
          initialRegion={{
            latitude: order.Lat,
            longitude: order.Lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          style={[
            {
              width: "100%",
              flexGrow: 1,
            },
            !fullWidth && { height: 200 },
          ]}
        >
          {order.Lat && order.Lng && (
            <Marker
              coordinate={{
                latitude: order.Lat,
                longitude: order.Lng,
              }}
              title="Delivery Location"
              description={order.Address}
              identifier="destination"
            />
          )}
        </MapView>
      </View>
    </Card>
  );
};

export default DeliveryCard;
