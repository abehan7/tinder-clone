import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Foundation, Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

interface IHeaderProps {
  title: string;
  callEnabled: boolean;
}

const Header: FC<IHeaderProps> = ({ title, callEnabled }) => {
  const navigation = useNavigation();
  return (
    <View style={tw`p-2 flex-row items-center justify-between`}>
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw`p-2`}>
          <Ionicons name="chevron-back-outline" size={34} color="#FF5864" />
        </TouchableOpacity>
        <Text style={tw`text-2xl font-bold pl-2`}>{title}</Text>
      </View>
      {callEnabled && (
        <TouchableOpacity
          style={tw`rounded-full mr-4 bg-red-200 w-11 h-11 flex items-center justify-center`}
        >
          <Foundation name="telephone" size={20} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
