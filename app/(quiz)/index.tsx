import { View, Text, Pressable, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { LineChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";

function Chart() {
  return (
    <LineChart
      data={{
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            data: [
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
            ],
          },
        ],
      }}
      width={Dimensions.get("window").width - 50}
      height={Dimensions.get("window").height / 5}
      chartConfig={{
        backgroundColor: "rgba(255,255,255,0)",
        backgroundGradientFrom: "rgba(255,255,255,0)",
        backgroundGradientTo: "rgba(255,255,255,0)",
        backgroundGradientToOpacity: 0,
        backgroundGradientFromOpacity: 0,
        fillShadowGradient: "rgba(255,255,255,0)",
        fillShadowGradientOpacity: 0,
        fillShadowGradientFrom: "rgba(255,255,255,0)",
        fillShadowGradientTo: "rgba(255,255,255,0)",
        fillShadowGradientFromOpacity: 0,
        fillShadowGradientToOpacity: 0,
        decimalPlaces: 0,

        color: (opacity = 1) => `rgba(237, 125, 50, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      }}
      // Render value of the dot
      renderDotContent={({ x, y, index, indexData }) => (
        <Text
          key={index}
          style={{
            position: "absolute",
            top: y - 20,
            left: x,
            fontSize: 10,
            fontWeight: "bold",
            color: "black",
          }}
        >
          {indexData.toFixed(0)}
        </Text>
      )}
      style={{
        marginLeft: -15,
        alignSelf: "flex-start",
        alignContent: "center",
        justifyContent: "center",
      }}
    />
  );
}

function QuizCard({ showScore, score }: { showScore: boolean; score: number }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: showScore ? 10 : 0,
        paddingHorizontal: 20,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          Quiz #1
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "gray",
          }}
        >
          Luyện tập a,b,c
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
        }}
      >
        {showScore ? (
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            {score.toString()}/10
          </Text>
        ) : null}
      </View>
    </View>
  );
}

export default function QuizLayout() {
  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#4ccd99",
        flex: 1,
      }}
    >
      <View className="container mt-16 flex-row content-center justify-between align-baseline">
        <Link href="/(tabs)" asChild>
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
          Làm quiz
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
      <ScrollView>
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 10,
            marginTop: "5%",
            backgroundColor: "white",
            shadowColor: "black",
            elevation: 5,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            borderRadius: 20,
          }}
        >
          <Chart />
          <View
            style={{
              height: 2,
              marginHorizontal: 20,
              backgroundColor: "black",
              opacity: 0.6,
            }}
          />
          <QuizCard showScore={true} score={8} />
          <QuizCard showScore={true} score={8} />
          <QuizCard showScore={true} score={8} />
          <Text
            style={{
              marginRight: 20,
              marginVertical: 10,
              alignContent: "flex-end",
              alignSelf: "flex-end",
              fontWeight: 600,
              textDecorationLine: "underline",
              fontSize: 20,
            }}
          >
            Xem tất cả
          </Text>
        </View>
        <Link href="/(quiz)/quiz" asChild>
          <Pressable
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              marginTop: "5%",
              backgroundColor: "white",
              shadowColor: "black",
              elevation: 5,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              borderRadius: 20,
              justifyContent: "center",
            }}
          >
            <QuizCard showScore={false} score={0} />
          </Pressable>
        </Link>
        <Link href="/(quiz)/quiz" asChild>
          <Pressable
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              marginTop: "5%",
              backgroundColor: "white",
              shadowColor: "black",
              elevation: 5,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              borderRadius: 20,
              justifyContent: "center",
            }}
          >
            <QuizCard showScore={false} score={0} />
          </Pressable>
        </Link>
        <Link href="/(quiz)/quiz" asChild>
          <Pressable
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              marginTop: "5%",
              backgroundColor: "white",
              shadowColor: "black",
              elevation: 5,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              borderRadius: 20,
              justifyContent: "center",
            }}
          >
            <QuizCard showScore={false} score={0} />
          </Pressable>
        </Link>
        <Link href="/(quiz)/quiz" asChild>
          <Pressable
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              marginTop: "5%",
              backgroundColor: "white",
              shadowColor: "black",
              elevation: 5,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              borderRadius: 20,
              justifyContent: "center",
            }}
          >
            <QuizCard showScore={false} score={0} />
          </Pressable>
        </Link>
        <Link href="/(quiz)/quiz" asChild>
          <Pressable
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              marginTop: "5%",
              backgroundColor: "white",
              shadowColor: "black",
              elevation: 5,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              borderRadius: 20,
              justifyContent: "center",
            }}
          >
            <QuizCard showScore={false} score={0} />
          </Pressable>
        </Link>
      </ScrollView>
    </View>
  );
}
