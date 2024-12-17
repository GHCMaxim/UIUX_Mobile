import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const RegularContent = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={regularContentStyles.text}>a</Text>
    </View>
  );
};

const regularContentStyles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 80,
    fontWeight: 500,
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
  },
});

const FlippedContent = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text style={flippedContentStyles.text}>Flipped content 🚀</Text> */}
      <Image
        style={{
          width: 150,
          height: 150,
        }}
        resizeMode="contain"
        source={require("../../assets/images/Braille.png")}
      />
    </View>
  );
};

const flippedContentStyles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#001a72",
  },
});

const FlipCard = ({
  isFlipped,
  cardStyle,
  direction = "y",
  duration = 500,
  RegularContent,
  FlippedContent,
}) => {
  const isDirectionX = direction === "x";

  const regularCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
    };
  });

  const flippedCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          flipCardStyles.regularCard,
          cardStyle,
          regularCardAnimatedStyle,
        ]}
      >
        {RegularContent}
      </Animated.View>
      <Animated.View
        style={[
          flipCardStyles.flippedCard,
          cardStyle,
          flippedCardAnimatedStyle,
        ]}
      >
        {FlippedContent}
      </Animated.View>
    </View>
  );
};

const flipCardStyles = StyleSheet.create({
  regularCard: {
    position: "absolute",
    zIndex: 1,
  },
  flippedCard: {
    backfaceVisibility: "hidden",
    zIndex: 2,
  },
});

export default function FlashcardView() {
  const [cardAmount, setCardAmount] = useState(1);
  const [maxCards, setMaxCards] = useState(8);
  const isFlipped = useSharedValue(false);
  return (
    <View
      style={{
        backgroundColor: "#4ccd99",
        flex: 1,
      }}
    >
      <View className="container mt-16 flex-row content-center justify-between align-baseline pl-5 pr-5">
        <Link href="/(flashcard)" asChild>
          <Pressable
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="chevron-back" size={40} color="#007f73" />
          </Pressable>
        </Link>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "white",
            alignSelf: "center",
          }}
        >
          Flashcard #1
        </Text>

        <Image
          style={{
            borderRadius: 100,
            width: 50,
            height: 50,
          }}
          source={require("../../assets/images/lph.jpg")}
        />
      </View>

      <View
        style={{
          backgroundColor: "white",
          borderRadius: 27,
          padding: 20,
          marginHorizontal: 20,
          marginTop: 20,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "black",
          }}
        >
          Thẻ: {cardAmount}/{maxCards}
        </Text>
      </View>
      <Pressable
        onPress={() => {
          isFlipped.value = !isFlipped.value;
        }}
      >
        <FlipCard
          isFlipped={isFlipped}
          cardStyle={{
            width: "90%",
            height: 500,
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 16,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
          }}
          RegularContent={<RegularContent />}
          FlippedContent={<FlippedContent />}
        />
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#007F73",
            width: "48%",
            padding: 10,
            alignSelf: "center",
            borderRadius: 10,
            elevation: 5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={cardAmount > 1 ? () => setCardAmount(cardAmount - 1) : null}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "white",
            }}
          >
            Trước
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#007F73",
            width: "48%",
            padding: 10,
            alignSelf: "center",
            borderRadius: 10,
            elevation: 5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={
            cardAmount < maxCards ? () => setCardAmount(cardAmount + 1) : null
          }
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "white",
            }}
          >
            Sau
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
