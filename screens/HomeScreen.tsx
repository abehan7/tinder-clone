import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import useAuth from "../hooks";

import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

import { fakeUsers as dummy } from "../db/dummy";
import tw from "tailwind-react-native-classnames";
import { IRootStackParamList, IUser } from "../interfaces";
import { StackNavigationProp } from "@react-navigation/stack";
const fakeUser: IUser = {
  name: "John Doe",
  uid: "1",
  photoURL: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  createdAt: new Date(),
};

type homeScreenProp = StackNavigationProp<IRootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<homeScreenProp>();
  // const { logout, user } = useAuth();
  const logout = useAuth()?.logout;
  // cosnt user = useAuth()?.user;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={[tw`flex-1 justify-center`, styles.container]}>
      {/* Header */}
      <View style={tw`items-center relative flex  `}>
        <TouchableOpacity style={tw`absolute left-5 top-3`} onPress={logout}>
          <Image
            style={tw`h-10 w-10 rounded-full`}
            source={{ uri: fakeUser?.photoURL }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={tw`h-14 w-14 `}
            source={require("../assets/images/logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`absolute right-5 top-3`}
          onPress={() => navigation.navigate("Chat")}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {/* End of Header */}
      {/* Home Swipe Stack Card */}
      <View style={tw`flex-1  mt-6`}>
        <Swiper
          containerStyle={styles.swiper}
          cards={dummy}
          renderCard={(card: { first_name: string; photoURL: string }) => (
            <View style={tw`bg-white h-3/4 rounded-xl `}>
              <Image source={{ uri: card.photoURL }} />
              <Text>{card.first_name}</Text>
            </View>
          )}
        />
      </View>
      {/* End of Home Swipe Stack Card */}
      {/* Bottom Controls */}
      <View style={tw`flex flex-row justify-evenly items-center p-4`}>
        <TouchableOpacity
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-green-200`}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color="green" />
        </TouchableOpacity>
      </View>
      {/* End of Bottom Controls */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  swiper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default HomeScreen;
