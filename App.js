import { useState } from 'react';
import { StyleSheet, View, FlatList, TextInput, Touchable, TouchableWithoutFeedback, Keyboard, Modal, Pressable, Text, Button, Image, ImageBackground } from 'react-native';
import Product from '../ShoppingList/composant/Product';
import AddProduct from './composant/AddProduct';
import GestionKeyBoard from './composant/GestionKeyBoard';
import GestionButton from './composant/GestionButton';
import TheHeader from './composant/TheHeader';
import AllColors from './composant/AllColors';
import GestionInputText from './composant/GestionInputText';
import { useFonts } from 'expo-font';

export default function App() {

  const [showModal, setShowModal] = useState(false)
  const AfficheModal = () => { setShowModal(true) }
  const [newProduct, setNewProduct] = useState("")
  const [loaded, error] = useFonts({
    Playfair: require("./assets/Fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf")
  })

  const [data, setData] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Vierge Marie',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Saint Joseph',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Saint Tarcisius',
    }

  ])

  const gestionData = () => {
    if (newProduct !== "") {
      setData(data => [{ id: Date.now().toString, title: newProduct }, ...data])
    }
    setShowModal(!showModal)
    setNewProduct("")
  }

  const regex = /[^a-zA-Z]/gi;

  if (!loaded) {
    return null
  }

  return (

    <GestionKeyBoard>
      <View style={styles.container}>
        <TheHeader />
        <ImageBackground source={require("../ShoppingList/assets/es.png")}
          resizeMode='cover'
          style={styles.container}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <GestionInputText
                  infoText={"Nouveau Saint"}
                  valeur={newProduct}
                  actionSurChangement={text => setNewProduct(text.replace(regex, ""))}
                />

                <Image style={styles.tinyLogo}
                  source={require("../ShoppingList/assets/sc.jpg")}></Image>

                <View style={styles.viewButton} >
                  <GestionButton textDeText={'Valider'}
                    actionButton={gestionData}
                    buttonStyle={styles.buttonValide}
                    textButton={styles.textValide}>
                  </GestionButton>

                  <GestionButton textDeText={'Annuler'}
                    actionButton={() => setShowModal(!showModal)}
                    buttonStyle={styles.buttonClose}
                    textButton={styles.textSuppr}>
                  </GestionButton>
                </View>

              </View>
            </View>

          </Modal>

          {/* <Button title='Ajouter un nouveau Saint' onPress={AfficheModal} /> */}
          <GestionButton textDeText={'Ajouter un nouveau Saint'}
            actionButton={AfficheModal}
            buttonStyle={styles.buttonValide}
            textButton={styles.textValide}></GestionButton>

          <View>
            {/* <TextInput secureTextEntry  placeholder="password"></TextInput>
          <TextInput editable={false}  placeholder="desactived"></TextInput> */}
            {/* <AddProduct setData={setData} /> */}
          </View>

          <FlatList
            data={data}
            renderItem={({ item }) =><Product item={item} setData={setData} />}
            keyExtractor={item => item.id}
            style={styles.tab}
          />
        </ImageBackground>
      </View>
    </GestionKeyBoard>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: 'space-between',
    marginTop: 10,
    height: "100%",
  },
  back: {
    flex: 1
  },
  tab: {
    padding: 10,
    display: "flex",
    gap: 16
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: AllColors.blanc,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonValide: {
    backgroundColor: AllColors.bleu,
  },
  buttonClose: {
    backgroundColor: AllColors.rouge,
  },
  textValide: {
    color: AllColors.blanc,
    textAlign: 'center',
    fontFamily: "Playfair"
  },
  textSuppr: {
    color: AllColors.blanc,
    textAlign: 'center',
    backgroundColor: 'red',
    fontFamily: "Playfair"
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  viewButton: {
    flexDirection: "row"
  }
});