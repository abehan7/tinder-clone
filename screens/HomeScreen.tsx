import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { FC, useLayoutEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/core";
import useAuth from "../hooks";

import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

import { fakeUsers as dummy } from "../db/dummy";
import tw from "tailwind-react-native-classnames";
import { IRootStackParamList, IUser } from "../interfaces";
import { StackNavigationProp } from "@react-navigation/stack";
import SwiperCard from "../components/Cards/SwiperCard";

const fakeUser: IUser = {
  uid: "1",
  photoURL: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  createdAt: new Date(),
  email: "hanjk123@gmail.com",
  first_name: "John",
  last_name: "Doe",
  gender: "male",
};

type HomeScreenProp = StackNavigationProp<IRootStackParamList, "Home">;

const HomeScreen: FC = () => {
  const navigation = useNavigation<HomeScreenProp>();
  // const { logout, user } = useAuth();
  const logout = useAuth()?.logout;
  // cosnt user = useAuth()?.user;
  const swipeRef = useRef<Swiper<any>>(null);

  useLayoutEffect(() => navigation.setOptions({ headerShown: false }), []);

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
      {/* TODO: 여기 오류남. 일단 넘기기. aws연결하면 사라질듯 함 */}
      {/* 그래도 오류나면 더미 맨 마지막에 넣어서 조건문 만들기 */}
      <SwiperCard swipeRef={swipeRef} />
      {/* End of Home Swipe Stack Card */}
      {/* Bottom Controls */}
      <View style={tw`flex flex-row justify-evenly items-center p-4`}>
        <TouchableOpacity
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}
          onPress={() => swipeRef.current?.swipeLeft()}
        >
          <Entypo name="cross" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-green-200`}
          onPress={() => swipeRef.current?.swipeRight()}
        >
          <AntDesign name="heart" size={24} color="green" />
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
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,

    shadowRadius: 1.41,
    elevation: 3,
  },
});

export default HomeScreen;
