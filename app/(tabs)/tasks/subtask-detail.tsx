import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function SubtaskDetailScreen() {
  const { subtarea } = useLocalSearchParams<{ subtarea: string }>();
  const data = subtarea ? JSON.parse(subtarea) : {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.titulo}</Text>
      <Text style={styles.label}>Descripcion:</Text>
      <Text style={styles.text}>{data.descripcion}</Text>
      <Text style={styles.label}>Estado:</Text>
      <Text style={styles.text}>{data.estado}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  label: { fontSize: 16, fontWeight: "600", marginTop: 12 },
  text: { fontSize: 16, marginTop: 4 },
});
