import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ImageProfile } from "../components/imageProfile.component"
import * as Clipboard from 'expo-clipboard';
import Toast from "react-native-root-toast";

export const HomeScreen = ({ navigation }: any) => {
    const handleGithub = () => {
        const url = 'https://github.com/AlcenirSantos';
        Linking.openURL(url)
            .catch((err) => console.error('Failed to open URL:', err));
    };
    const handleLinkedin = () => {
        const url = 'https://www.linkedin.com/in/alcenir-santos/';
        Linking.openURL(url)
            .catch((err) => console.error('Failed to open URL:', err));
    };
    const handleEmail = () => {
        Clipboard.setStringAsync('alcenir.santos.dev@gmail.com')
        Toast.show('Email copiado!', {
            duration: Toast.durations.LONG,
            position: Toast.positions.TOP
        })
    };
    const handleSkills = () => {
        navigation.navigate('skills')
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerImage}>
                <ImageProfile />
                <Text style={styles.text}>Alcenir Barbosa dos Santos</Text>
                <View style={styles.containerButton}>
                    <TouchableOpacity onPress={handleGithub} style={styles.button}><Text style={styles.textButton}>GITHUB</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleLinkedin} style={styles.button}><Text style={styles.textButton}>Linkedin</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleEmail} style={styles.button}><Text style={styles.textButton}>E-MAIL</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleSkills} style={styles.button}><Text style={styles.textButton}>SKILLS</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00072D',
        height: '100%',
        paddingTop: 56,
    },
    containerImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 30
    },
    containerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        width: '100%',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
        height: 60,
        marginBottom: 30,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 15,
    },
    textButton: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "500",
        textAlign: 'center',


    }
})