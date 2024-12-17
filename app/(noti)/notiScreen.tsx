import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, View, Text, Image, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function NotiCard() {
  return (
    <View
      style={{
        width: "90%",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: 20,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        padding: 20,
        alignSelf: "center",
        marginBottom: 10,
        marginTop: 10,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: "black",
        }}
      >
        Thông báo về việc A
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: 400,
          color: "gray",
        }}
      >
        Ngày đăng tải: 10/12/2024
      </Text>
      <Text
        style={{
          flexWrap: "wrap",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only...
      </Text>
    </View>
  );
}

export default function NotiView() {
  return (
    <View
      style={{
        backgroundColor: "#4ccd99",
        flex: 1,
      }}
    >
      <View className="container mt-16 flex-row content-center justify-between align-baseline mb-5 pl-5 pr-5">
        <Link href="/(noti)" asChild>
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
          Thông báo
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
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <ScrollView>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "black",
            }}
          >
            Thông báo về việc A
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: "gray",
            }}
          >
            Ngày đăng tải: 10/12/2024
          </Text>
          <Text
            style={{
              flexWrap: "wrap",
              fontSize: 16,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text
            style={{
              marginTop: 20,
              flexWrap: "wrap",
              fontSize: 16,
            }}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
