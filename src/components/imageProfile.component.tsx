import ImgProfile from '../../assets/profile.jpg'
import { Image, StyleSheet, View } from "react-native"
export const ImageProfile = () => {
    return (<View>
        <Image style={styles.image} source={ImgProfile} />
    </View>)
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 30,
        marginBottom: 30
    }
})