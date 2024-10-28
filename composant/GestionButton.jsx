import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GestionButton({ textButton, buttonStyle, actionButton, textDeText }) {

    return (
        <View>
            <Pressable
                style={[styles.button, buttonStyle]}
                onPress={actionButton}>
                <Text style={textButton}>{textDeText}</Text>
            </Pressable>
        </View>

    );

}

const styles = StyleSheet.create({
   
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    }
});
