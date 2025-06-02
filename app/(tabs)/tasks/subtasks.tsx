import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function SubtasksScreen() {
  const router = useRouter();
  const { subtareas, tareaTitulo } = useLocalSearchParams<{
    subtareas: string;
    tareaTitulo: string;
  }>();
  const subtareasArr = subtareas ? JSON.parse(subtareas) : [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subtareas de {tareaTitulo}</Text>
      <FlatList
        data={subtareasArr}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.subtaskItem}
            onPress={() =>
              router.push({
                pathname: "/tasks/subtask-detail",
                params: { subtarea: JSON.stringify(item) },
              })
            }
          >
            <Text style={styles.subtaskTitle}>{item.titulo}</Text>
            <Text style={styles.subtaskStatus}>Estado: {item.estado}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  subtaskItem: { padding: 14, borderBottomWidth: 1, borderBottomColor: "#eee" },
  subtaskTitle: { fontSize: 17 },
  subtaskStatus: { color: "#555", fontSize: 14 },
});
