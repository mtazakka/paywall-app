import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query getCustomers {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;

export const GET_ORDERS = gql`
  query getOrders {
    getOrders {
      name
      value {
        Address
        City
        Lng
        Lat
        carrier
        createdAt
        shippingCost
        trackingId
        trackingItems {
          customer {
            email
            name
          }
          customer_id
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;
