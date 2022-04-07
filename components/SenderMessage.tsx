import React, { FC } from "react";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

interface ISenderMessageProps {
  text: string;
}
const SenderMessage: FC<ISenderMessageProps> = ({ text }) => {
  return (
    <View
      style={[
        tw`bg-purple-600 rounded-lg rounded-tr-none px-5 py-3 mx-3 my-2 justify-start`,
        { marginLeft: "auto" },
      ]}
    >
      <Text style={tw`text-white`}>{text}</Text>
    </View>
  );
};

export default SenderMessage;
