import { Alert, Button, TextInput, View, Modal, Text, Pressable, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

export default function AddProduct({ setData }) {

    const [newProduct, setNewProduct] = useState("")
    const [countVoidProduct, setCountVoidProduct] = useState(0)
    const [showModal, setShowModal] = useState(false)

    const gestionData = () => {
        if (newProduct.length < 2) {
            //setShowModal(true)
            //     Alert.alert(
            //         "Attention",
            //         "Le nom de votre produit n'est pas assez explicite",
            //         [
            //             {
            //                 text: "D'accord",
            //             },
            //         ],

            //         { cancelable: true }
            //     )
            //     setCountVoidProduct(countVoidProduct + 1);
            return;
        }
        setData(infoData => [{ id: Date.now(), title: newProduct }, ...infoData])
        setNewProduct("")
    }

    // useEffect(() => {

    //     // if (countVoidProduct === 3) {
    //     //     Alert.alert(
    //     //         "Rapport de mission",
    //     //         "Vous avez échoué",
    //     //         [
    //     //             {
    //     //                 text: "Réessayer",
    //     //             },
    //     //         ],

    //     //         { cancelable: true }
    //     //     )

    //     //     setData([])
    //     // }
    // },
    //     // [countVoidProduct]
    // );

    return (
        <View>

            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>OUPS!</Text>
                        <Text style={styles.modalText}>Le nom du produit doit avoir au minimium 2 caractères</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setShowModal(!showModal)}>
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </View>

            </Modal> */}

            <TextInput
                placeholder="Nouveau produit"
                value={newProduct}
                onChangeText={text => setNewProduct(text)}
            />

            <Button
                onPress={gestionData}
                // disabled ={newProduct.length<2}
                title="Valider"
            />
        </View >

    );

}

// const styles = StyleSheet.create({
//     centeredView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 22,
//     },
//     modalView: {
//         margin: 20,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     button: {
//         borderRadius: 20,
//         padding: 10,
//         elevation: 2,
//     },
//     buttonClose: {
//         backgroundColor: '#2196F3',
//     },
//     textStyle: {
//         color: 'white',
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     modalText: {
//         marginBottom: 15,
//         textAlign: 'center',
//     },
// }
// );
