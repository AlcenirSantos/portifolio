import { ScrollView, StyleSheet, Text, View } from "react-native"
import { ImageProfile } from "../components/imageProfile.component"
import { Stars } from "../components/star.components"

export const SkillsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerImage}>
                <ImageProfile />
                <Text style={styles.text}>Alcenir Barbosa dos Santos</Text>
                <Text style={styles.text}>Pricipais habilidades</Text>
                <View>
                    <Stars name="ReactJS" value={5} />
                    <Stars name="React Native" value={3.5} />
                    <Stars name="C#" value={4.5} />
                    <Stars name="Typescript" value={5} />
                    <Stars name="JavaScript" value={5} />
                    <Stars name="Flutter" value={4} />
                    <Stars name="PostgreSQL" value={4.7} />
                    <Stars name="NestJs" value={5} />
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