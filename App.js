import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
    const pickImageAsync = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            alert("Привет из чата");
        }
    };

    const [showAppOptions, setShowAppOptions] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer
                    placeholderImageSource={PlaceholderImage}
                    selectedImage={selectedImage}
                />
            </View>
            <View style={styles.footerContainer}>
                <Button
                    theme='primary'
                    label='Choose a photo'
                    onPress={pickImageAsync}
                />
                <Button label='Use this photo' />
            </View>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
});
