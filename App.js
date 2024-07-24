import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Login from "./screens/login/login";
import OTP from "./screens/login/otp";
import HomeScreen from "./screens/home/index";
import ParticularService from "./screens/service/particularService";
import ParticularCategory from "./screens/service/particularCategory";
import IndividualService from "./screens/service/individualService";
import OrderSummary from "./components/orderSummary";
import AddAddress from "./components/addAddress";
import DateAndTime from "./components/dateAndTime";
import Payments from "./components/payments";
import ServiceBooking from "./components/serviceBooked";
import BookingCancellation from "./components/bookingCancellation";
import AddCard from "./components/payments/addCard";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="IndividualService" component={IndividualService} />
        <Stack.Screen name="Service" component={ParticularService} />
        <Stack.Screen name="ParticularCategory" component={ParticularCategory} />
        <Stack.Screen name="OrderSummary" component={OrderSummary}  />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        <Stack.Screen name="DateAndTime" component={DateAndTime} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="ServiceBooking" component={ServiceBooking} />
        <Stack.Screen name="BookingCancellation" component={BookingCancellation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
