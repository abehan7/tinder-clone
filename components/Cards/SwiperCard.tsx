import React, { FC, RefObject, useRef } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import tw from "tailwind-react-native-classnames";
import { fakeUsers } from "../../db/dummy";
import { IUser } from "../../interfaces";

interface IProps {
  swipeRef: RefObject<Swiper<any>>;
}

const SwiperCard: FC<IProps> = ({ swipeRef }) => {
  const renderCard = (card: IUser) => {
    console.log(card);
    return card ? <ShowProfile card={card} /> : <NoMoreProfile />;
  };

  return (
    <View style={tw`flex-1 mt-6`}>
      <Swiper
        ref={swipeRef}
        containerStyle={styles.swiper}
        cards={fakeUsers}
        stackSize={5}
        cardIndex={0}
        verticalSwipe={false}
        animateCardOpacity={true}
        renderCard={(card) => renderCard(card)}
      />
    </View>
  );
};

export default SwiperCard;

const NoMoreProfile = () => {
  return (
    <View
      style={[
        tw`bg-white h-3/4 rounded-xl relative items-center justify-center`,
        styles.cardShadow,
      ]}
    >
      <Text style={tw`text-xl font-bold pb-5`}>No more profiles</Text>
      <Image
        source={{ uri: "https://links.papareact.com/6gb" }}
        style={[tw` h-20 w-full`, { resizeMode: "contain" }]}
        height={100}
        width={100}
      />
    </View>
  );
};

const ShowProfile = ({ card }: { card: IUser }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
