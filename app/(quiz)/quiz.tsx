import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState, useMemo } from "react";
import { Pressable, View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function QuizTestLayout() {
  const [questionIndex, setQuestionIndex] = useState(1);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  });
  const correctAnswers = [1, 2, 1, 3, 4, 2, 3, 1, 2, 4];
  const [marked, setMarked] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(0);
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        disabled: submitted,
        id: "1",
        color: "#444",
        borderColor: "#444",
        label:
          submitted && correctAnswers[questionIndex - 1] == 1 ? (
            <View
              style={{
                flexDirection: "row",
                marginLeft: 20,
              }}
            >
              <Text>a</Text>
              <Ionicons name="checkmark-sharp" color="green" />
            </View>
          ) : submitted &&
            answers[questionIndex] == 1 &&
            answers[questionIndex] != correctAnswers[questionIndex - 1] ? (
            <View className="flex-row">
              <Text>a</Text>
              <Ionicons name="close-sharp" color="red" />
            </View>
          ) : (
            "a"
          ),
        value: "1",
      },
      {
        disabled: submitted,
        id: "2",
        label:
          submitted && correctAnswers[questionIndex - 1] == 2 ? (
            <View className="flex-row">
              <Text>a</Text>
              <Ionicons name="checkmark-sharp" color="green" />
            </View>
          ) : submitted &&
            answers[questionIndex] == 2 &&
            answers[questionIndex] != correctAnswers[questionIndex - 1] ? (
            <View className="flex-row">
              <Text>a</Text>
              <Ionicons name="close-sharp" color="red" />
            </View>
          ) : (
            "a"
          ),
        value: "2",
      },
      {
        disabled: submitted,
        id: "3",
        label:
          submitted && correctAnswers[questionIndex - 1] == 3 ? (
            <View className="flex-row">
              <Text>a</Text>
              <Ionicons name="checkmark-sharp" color="green" />
            </View>
          ) : submitted &&
            answers[questionIndex] == 3 &&
            answers[questionIndex] != correctAnswers[questionIndex - 1] ? (
            <View className="flex-row">
              <Text>a</Text>
              <Ionicons name="close-sharp" color="red" />
            </View>
          ) : (
            "a"
          ),
        value: "3",
      },
      {
        disabled: submitted,
        id: "4",
        label:
          submitted && correctAnswers[questionIndex - 1] == 4 ? (
            <View className="flex-row">
              <Text>a</Text>
              <Ionicons name="checkmark-sharp" color="green" />
            </View>
          ) : submitted &&
            answers[questionIndex] == 4 &&
            answers[questionIndex] != correctAnswers[questionIndex - 1] ? (
            <View className="flex-row">
              <Text>a</Text>
              <Ionicons name="close-sharp" color="red" />
            </View>
          ) : (
            "a"
          ),
        value: "4",
      },
    ],
    []
  );

  function countCorrectAnswers() {
    let count = 0;
    for (let i = 1; i <= 10; i++) {
      if (answers[i] == correctAnswers[i - 1]) count++;
    }
    return count;
  }

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
        <Link href="/(quiz)" asChild>
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
          Quiz #1
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
          marginTop: 20,
          padding: 20,
          borderRadius: 20,
          flexDirection: "row",
          height: 130,
          alignContent: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable style={{ alignSelf: "center" }}>
          <Ionicons name="chevron-back" size={40} color="#007f73" />
        </Pressable>
        <PagerView style={{ flex: 1 }} initialPage={0}>
          <View
            key="1"
            style={{
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FlatList
              data={[1, 2, 3, 4, 5, 6]}
              renderItem={({ item }) => {
                return (
                  <Pressable
                    style={{
                      backgroundColor:
                        submitted && answers[item] == correctAnswers[item - 1]
                          ? "#007f7c"
                          : submitted &&
                            answers[item] != correctAnswers[item - 1]
                          ? "#FF3636"
                          : questionIndex == item
                          ? "#4ccd99"
                          : marked[item]
                          ? "#FFAF36"
                          : answers[item] != 0
                          ? "#007f7C"
                          : "#EAEAEA",
                      borderRadius: 100,
                      marginRight: 20,
                      marginLeft: 20,
                      marginBottom: 10,
                      width: 40,
                      height: 40,
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => {
                      setQuestionIndex(item);
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        alignSelf: "center",
                        lineHeight: 25,
                        fontSize: 20,
                      }}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              }}
              numColumns={3}
            ></FlatList>
          </View>
          <View key="2">
            <FlatList
              data={[7, 8, 9, 10]}
              renderItem={({ item }) => {
                return (
                  <Pressable
                    style={{
                      backgroundColor: "#007f73",
                      borderRadius: 100,
                      marginRight: 20,
                      marginLeft: 20,
                      marginBottom: 10,
                      width: 40,
                      height: 40,
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        alignSelf: "center",
                        lineHeight: 25,
                        fontSize: 20,
                      }}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              }}
              numColumns={3}
            ></FlatList>
          </View>
        </PagerView>
        <Ionicons
          style={{ alignSelf: "center" }}
          name="chevron-forward"
          size={40}
          color="#007f73"
        />
      </View>
      {submitted ? (
        <View
          style={{
            backgroundColor: "white",
            marginTop: 20,
            padding: 20,
            borderRadius: 20,
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: 600,
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            {result}/10
          </Text>
        </View>
      ) : null}
      <View
        style={{
          backgroundColor: "white",
          marginTop: 20,
          padding: 20,
          borderRadius: 20,
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Câu hỏi {questionIndex}:
        </Text>
        <Image
          style={{
            marginVertical: 20,
            alignSelf: "center",
          }}
          source={require("../../assets/images/Braille.png")}
        />
        <RadioGroup
          containerStyle={{
            alignSelf: "flex-start",
            marginLeft: 20,
          }}
          radioButtons={radioButtons}
          onPress={(data) => {
            setAnswers({ ...answers, [questionIndex]: parseInt(data) });
          }}
          selectedId={
            answers[questionIndex] == 0 ? "" : answers[questionIndex].toString()
          }
        />
        <Pressable
          style={{
            width: "90%",
            backgroundColor: "#FFAF36",
            borderRadius: 10,
            alignContent: "center",
            alignSelf: "center",
            padding: 10,
            elevation: 5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            marginTop: 20,
          }}
          onPress={() => {
            setMarked({ ...marked, [questionIndex]: !marked[questionIndex] });
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Đánh dấu
          </Text>
        </Pressable>
        <View className="flex-row align-middle justify-center gap-10">
          <Pressable
            style={{
              width: "40%",
              backgroundColor: "#007F73",
              borderRadius: 10,
              alignContent: "center",
              alignSelf: "center",
              padding: 10,
              elevation: 5,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              marginTop: 20,
            }}
            onPress={() => {
              if (questionIndex > 1) setQuestionIndex(questionIndex - 1);
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Trước
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: "40%",
              backgroundColor: "#007F73",
              borderRadius: 10,
              alignContent: "center",
              alignSelf: "center",
              padding: 10,
              elevation: 5,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              marginTop: 20,
            }}
            onPress={() => {
              if (questionIndex < 10) setQuestionIndex(questionIndex + 1);
              else {
                setSubmitted(true);
                setResult(countCorrectAnswers());
              }
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {questionIndex == 10 ? "Nộp bài" : "Sau"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
