import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./Home";
import Serv from "./Serv";
import ServListar from "./ServListar";
import PrestListar from "./PrestListar";
import Prest from "./Prest";
import Aval from "./Aval";
import AvalListar from "./AvalListar";

const Drawer = createDrawerNavigator();

export default function Menu() {

    return (
        <Drawer.Navigator initialRouteName="Página Inicial">
            <Drawer.Screen name='Página Inicial' component={Home} />
            <Drawer.Screen name='Cadastro de Serviços' component={Serv} />
            <Drawer.Screen name='Lista de Serviços' component={ServListar} />
            <Drawer.Screen name='Cadastro de Prestadores' component={Prest} />
            <Drawer.Screen name='Lista de Prestadores' component={PrestListar} />
            <Drawer.Screen name='Avaliações' component={Aval} />
            <Drawer.Screen name='Lista de Avaliações' component={AvalListar} />
        </Drawer.Navigator>
    )
}