import { createDrawerNavigator } from "@react-navigation/drawer"
import { HomeScreen } from "../screens/home.screen";
import { SkillsScreen } from "../screens/skills.screen";

const { Navigator, Screen } = createDrawerNavigator();
export const DrawerRoutes = () => {
    return (<Navigator
        screenOptions={{
            headerShown: false,
            headerStyle: {
                marginTop: 120
            }
        }}
    >
        <Screen name="home"
            options={{
                title: "Home",
            }}
            component={HomeScreen}
        />
        <Screen name="skills"
            options={{
                title: "Habilidades",
            }}
            component={SkillsScreen}
        />
    </Navigator>)
}