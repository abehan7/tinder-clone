import React, { FC } from "react";
import { Image, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

interface IReceiverMessageProps {
  text: string;
  photoURL: string;
}
const ReceiverMessage: FC<IReceiverMessageProps> = ({ text, photoURL }) => {
  return (
    <View
      style={[
        tw`bg-red-400 rounded-lg rounded-tl-none px-5 py-3 mx-3 my-2 ml-14 justify-start`,
        { alignSelf: "flex-start" },
      ]}
    >
      <Image
        style={tw`h-12 w-12 rounded-full absolute top-0 -left-14`}
        source={{ uri: photoURL }}
      />
      <Text style={tw`text-white`}>{text}</Text>
    </View>
  );
};

export default ReceiverMessage;
