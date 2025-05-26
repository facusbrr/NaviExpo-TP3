import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/login");
  };

  return (
    <SafeAreaView edges={["right", "left"]} style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.profileName}>Usuario </Text>
        <Text style={styles.profileEmail}>usuario@ejemplo.com</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Información Personal</Text>

        <View style={styles.menuItem}>
          <Ionicons name="person-outline" size={22} color="#666" />
          <Text style={styles.menuItemText}>Editar Perfil</Text>
          <Ionicons name="chevron-forward" size={22} color="#ccc" />
        </View>

        <View style={styles.menuItem}>
          <Ionicons name="notifications-outline" size={22} color="#666" />
          <Text style={styles.menuItemText}>Notificaciones</Text>
          <Ionicons name="chevron-forward" size={22} color="#ccc" />
        </View>

        <View style={styles.menuItem}>
          <Ionicons name="settings-outline" size={22} color="#666" />
          <Text style={styles.menuItemText}>Configuración</Text>
          <Ionicons name="chevron-forward" size={22} color="#ccc" />
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Cuenta</Text>

        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={22} color="#FF3B30" />
          <Text style={[styles.menuItemText, { color: "#FF3B30" }]}>
            Cerrar Sesión
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  profileHeader: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  profileEmail: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  sectionContainer: {
    backgroundColor: "white",
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginVertical: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuItemText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: "#333",
  },
});
