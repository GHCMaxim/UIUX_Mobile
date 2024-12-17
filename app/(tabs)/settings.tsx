import { View, Text } from "react-native";

export default function SettingsView() {
  return (
    <View className="container mt-16 flex-row content-center justify-between align-baseline pl-5 pr-5">
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 36,
            fontWeight: 600,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Cài đặt
        </Text>

        <View
          style={{
            marginHorizontal: 20,
            height: 1.5,
            marginTop: 10,
            backgroundColor: "black",
          }}
        />
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            Ngôn ngữ
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "gray",
            }}
          >
            Ngôn ngữ sử dụng của ứng dụng
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            Tiêu chuẩn bảng mã
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "gray",
            }}
          >
            Chọn bảng mã Braille sử dụng
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            Hướng dẫn sử dụng
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "gray",
            }}
          >
            Tài liệu hướng dẫn sử dụng phần mềm
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            Thông tin nhà phát triển
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "gray",
            }}
          >
            Thông tin nhà phát triển
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            Giftcode
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "gray",
            }}
          >
            Nhập giftcode nhận quà
          </Text>
        </View>
      </View>
    </View>
  );
}
