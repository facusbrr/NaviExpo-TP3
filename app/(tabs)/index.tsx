import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView edges={["right", "left"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>¡Bienvenido!</Text>
          <Text style={styles.subText}>Dashboard de la aplicación</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Resumen</Text>
          <Text style={styles.cardContent}>Texto de Ejemplo</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Actividad Reciente</Text>
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>Inicio de sesión exitoso</Text>
            <Text style={styles.activityTime}>Hace un momento</Text>
          </View>
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>Perfil actualizado</Text>
            <Text style={styles.activityTime}>Ayer</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  subText: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  cardContent: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  activityItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  activityText: {
    fontSize: 14,
    color: "#333",
  },
  activityTime: {
    fontSize: 12,
    color: "#999",
  },
});
