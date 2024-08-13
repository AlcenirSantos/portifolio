import { NavigationContainer } from "@react-navigation/native"
import { DrawerRoutes } from "./drawer.routes"
import { StatusBar } from "react-native"

export const Routes = () => {
    return (<NavigationContainer>
        <DrawerRoutes />
    </NavigationContainer>)
}