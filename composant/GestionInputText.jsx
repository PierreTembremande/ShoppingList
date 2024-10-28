import {TextInput} from 'react-native';

export default function GestionInputText({infoText, valeur, actionSurChangement, ...props}) {

    return (
        
        <TextInput
        placeholder={infoText}
        value={valeur}
        onChangeText={actionSurChangement}
        {...props}

        />

    );

}
