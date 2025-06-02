import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { tareas } from "../../constants/tareas";

export default function TasksTab() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas</Text>
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() =>
              router.push({
                pathname: "/tasks/subtasks",
                params: {
                  subtareas: JSON.stringify(item.subtareas),
                  tareaTitulo: item.titulo,
                },
              })
            }
          >
            <Text style={styles.taskTitle}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  taskItem: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#eee" },
  taskTitle: { fontSize: 18 },
});
