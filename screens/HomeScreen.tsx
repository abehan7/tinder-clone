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
import React, { RefAttributes, useLayoutEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/core";
import useAuth from "../hooks";

import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

import { fakeUsers as dummy } from "../db/dummy";
import tw from "tailwind-react-native-classnames";
import { IRootStackParamList, IUser } from "../interfaces";
import { StackNavigationProp } from "@react-navigation/stack";

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

interface IRenderCard {
  first_name: string;
  photoURL: string;
}

interface SwiperRefProps {
  current: {
    swipeLeft: (mustDecrementCardIndex?: boolean) => void;
    swipeRight: (mustDecrementCardIndex?: boolean) => void;
  };
}

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();
  // const { logout, user } = useAuth();
  const logout = useAuth()?.logout;
  // cosnt user = useAuth()?.user;
  const swipeRef = useRef<Swiper<any>>(null);

  // const RefSwiper: React.FunctionComponent<
  //   SwiperProps & RefAttributes<SwiperCore>
  // > = Swiper;

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
          ref={swipeRef}
          containerStyle={styles.swiper}
          cards={dummy}
          stackSize={5}
          cardIndex={0}
          verticalSwipe={false}
          animateCardOpacity={true}
          renderCard={(card) => (
            <View style={tw`bg-white h-3/4 rounded-xl relative`}>
              <Image
                source={{ uri: card.photoURL }}
                style={tw`absolute top-0 h-full w-full rounded-xl`}
              />
              <View
                style={[
                  tw`absolute bottom-0 bg-white h-20 w-full justify-between flex-row px-6 py-2 rounded-b-xl`,
                  styles.cardShadow,
                ]}
              >
                <View>
                  <Text style={tw`text-xl font-bold`}>
                    {card.first_name} {card.last_name}
                  </Text>
                  <Text>{card.email}</Text>
                </View>
                <Text style={tw`text-xl font-bold`}>22</Text>
              </View>
            </View>
          )}
        />
      </View>
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
