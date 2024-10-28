import {StyleSheet, Text, View } from 'react-native';
import AllColors from './AllColors';

export default function TheHeader() {

    return (
        <View style={styles.container}>
            <Text style={styles.head}>Graine de Saint</Text>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        marginTop: 10,
        alignContent:"center",
        height:"10%"
    },
    head: {
        color: AllColors.blanc,
        backgroundColor: AllColors.bordeau,
        fontSize: 40,
        textAlign:"center",
        height: "100%",
        fontFamily: "Playfair"
    }
});
