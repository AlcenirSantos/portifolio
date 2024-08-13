import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
interface Props {
    name: string;
    value: number;
}

export const Stars = ({ name, value }: Props) => {
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 >= 0.5;

    const stars = Array.from({ length: 5 }, (_, index) => {
        if (index < fullStars) {
            return (
                <FontAwesome
                    key={index}
                    name="star"
                    size={24}
                    color="gold"
                    style={styles.star}
                />
            );
        }
        if (index === fullStars && hasHalfStar) {
            return (
                <View key={index} style={styles.starContainer}>
                    <FontAwesome
                        name="star-half"
                        size={24}
                        color="gold"
                        style={styles.star}
                    />
                </View>
            );
        }
        return (
            <FontAwesome
                key={index}
                name="star"
                size={24}
                color="gray"
                style={styles.star}
            />
        );
    });

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.starsContainer}>{stars}</View>
            <Text style={styles.rating}>{value.toFixed(1)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "700",
        marginRight: 12,
        width: '40%'
    },
    starsContainer: {
        flexDirection: 'row',
    },
    star: {
        marginHorizontal: 2,
    },
    starContainer: {
        overflow: 'hidden',
        width: 24,
        height: 24,
        justifyContent: 'center',
    },
    rating: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "700",
        width: '10%',
        marginLeft: 12
    }
});
