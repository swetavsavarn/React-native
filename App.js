import { Text, View, Button } from "react-native";

function App() {
//   const handlePress = () => {
//     Alert.alert("Alert Title", "laura lahsun", [
//       { text: "OK", onPress: () => console.log("OK Pressed") }
//     ]);
//   };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>hELLO</Text>
      <Text style={{ fontSize: 30 }}>lahsun</Text>
      <Button title="daba"></Button>
      <Button title="na"></Button>
      <Button title="daba bhi de" onPress={()=>alert("laurA DE LAHSUN")}></Button>
    </View>
  );
}

export default App;
