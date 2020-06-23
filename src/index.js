import React from 'react';
import { StatusBar } from "react-native";
import 'react-native-gesture-handler';
import Root from "./router";

const App: () => React$Node = () => {
    return (
        <>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <Root />
        </>
    );
};


export default App;
