import { Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import AllColors from './AllColors';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Product({ item, setData }) {

  return (
    // <TouchableOpacity activeOpacity={0.89}>

    <View >

      {/* <TouchableWithoutFeedback onPress = {()=>console.log(product.item)}>
        <Text style={styles.text}>{product.item.title} </Text>
        </TouchableWithoutFeedback> */}

      <Pressable delayLongPress={1000} onLongPress={() => setData(infoData => [...infoData.filter(objet => objet.id !== item.id)])}>
        <View style={styles.icon}>
          <AntDesign name="customerservice" size={24} color="black" />
          <View style={styles.allText}>
            <Text style={styles.text}>{item.title} </Text>
          </View>
        </View>


      </Pressable>


    </View>

    // </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    backgroundColor: 'transparent',
    fontSize: 20,
    textAlign: "center",
    //borderWidth: "2px",
    borderColor: AllColors.noir,
    fontFamily: "Playfair"

  },
  allText: {
    marginTop: 16
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",

  }
});
