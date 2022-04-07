import { useNavigation, useRoute } from "@react-navigation/native";
import { FC, useLayoutEffect, useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";

import { messages as dummy } from "../db/dummy";

import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Header";
import { IMessage } from "../interfaces";
import SenderMessage from "../components/SenderMessage";
import ReceiverMessage from "../components/ReceiverMessage";

const Item = ({ text, user }: { text: string; user: string }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

const user = {
  name: "Zendaya",
  uid: "1",
  photoURL:
    "https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjdfMjI4/MDAxNTU4OTM0NTg0MzMy.Yz35m5FAkyu23n2iIC0ExqHV6YssTzSG94CNhdPuBS8g.OGKG16wdioA9E_QszrvO7bb8jRChRTFmxlP-d_tp0k4g.JPEG.blue8015/IMG_3573.JPG?type=w800",
  createdAt: new Date(),
  gender: "female",
};

const ChatScreen: FC = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>(dummy);
  const { params } = useRoute();
  const onPress = () => {};
  const sendMessage = () => {};
  const navigation = useNavigation();

  useLayoutEffect(() => navigation.setOptions({ headerShown: false }), []);

  // const renderItem = ({ item }: any) => (
  //   <Item text={item.text} user={item.user} />
  // );

  return (
    <SafeAreaView>
      <Header title={user.name} callEnabled={true} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // style={tw`flex-1`}
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={messages}
            style={tw`pl-4`}
            keyExtractor={(message) => message.id}
            renderItem={({ item: message }) =>
              message?.uid === user.uid ? (
                <SenderMessage key={message.id} text={message.text} />
              ) : (
                <ReceiverMessage
                  key={message.id}
                  text={message.text}
                  photoURL={user.photoURL}
                />
              )
            }
          />
        </TouchableWithoutFeedback>

        <View
          style={tw`flex-row bg-white justify-between items-center border-t border-gray-200 py-2`}
        >
          <TextInput
            style={tw`h-10 text-lg`}
            placeholder="Sned a Message..."
            onChangeText={setInput}
            value={input}
            onSubmitEditing={sendMessage}
          />
          <Button title="Send" color="#FF5864" onPress={onPress} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
