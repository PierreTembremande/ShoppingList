import { useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

export default function GestionKeyBoard({ children }) {
    useEffect(() => {

        const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {

            Alert.alert(
                "Attention",
                "Votre clavier est visible",
                [
                    {
                        text: "D'accord",
                    },
                ],

                { cancelable: true }
            )

        })

        const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {

            Alert.alert(
                "Attention",
                "Votre clavier va disparaitre",
                [
                    {
                        text: "Oh no!",
                    },
                ],

                { cancelable: true }
            )

        })

        return ()=>{
            keyboardShowListener.remove();
            keyboardHideListener.remove();
        }



    }, [])
    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
        </TouchableWithoutFeedback>
    );

}
