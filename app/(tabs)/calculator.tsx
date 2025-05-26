import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";

export default function SimpleLoanCalculatorScreen() {
  const [loanAmount, setLoanAmount] = useState("10000");
  const [interestRate, setInterestRate] = useState("5");
  const [loanTerm, setLoanTerm] = useState("36");
  const [monthlyPayment, setMonthlyPayment] = useState("0");
  const [totalPayment, setTotalPayment] = useState("0");

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100 / 12;
    const time = parseInt(loanTerm) || 0;

    if (principal <= 0 || rate <= 0 || time <= 0) {
      setMonthlyPayment("0");
      setTotalPayment("0");
      return;
    }

    const x = Math.pow(1 + rate, time);
    const monthly = (principal * x * rate) / (x - 1);

    const total = monthly * time;

    setMonthlyPayment(formatCurrency(monthly));
    setTotalPayment(formatCurrency(total));
  };

  const formatCurrency = (value: number) => {
    return `$${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  };

  const recalculate = () => {
    calculateLoan();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calculadora de Préstamos</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Monto del Préstamo</Text>
        <TextInput
          style={styles.input}
          value={loanAmount}
          onChangeText={setLoanAmount}
          keyboardType="numeric"
          placeholder="Ej: 10000"
        />
        <Slider
          style={styles.slider}
          minimumValue={1000}
          maximumValue={50000}
          step={1000}
          value={parseFloat(loanAmount) || 1000}
          onValueChange={(value) => setLoanAmount(value.toString())}
          minimumTrackTintColor="#007AFF"
          maximumTrackTintColor="#E0E0E0"
          thumbTintColor="#007AFF"
        />
        <View style={styles.sliderLabels}>
          <Text style={styles.sliderLabel}>$1,000</Text>
          <Text style={styles.sliderLabel}>$50,000</Text>
        </View>

        <Text style={[styles.label, styles.marginTop]}>
          Tasa de Interés Anual (%)
        </Text>
        <TextInput
          style={styles.input}
          value={interestRate}
          onChangeText={setInterestRate}
          keyboardType="numeric"
          placeholder="Ej: 5"
        />
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={15}
          step={0.5}
          value={parseFloat(interestRate) || 1}
          onValueChange={(value) => setInterestRate(value.toString())}
          minimumTrackTintColor="#007AFF"
          maximumTrackTintColor="#E0E0E0"
          thumbTintColor="#007AFF"
        />
        <View style={styles.sliderLabels}>
          <Text style={styles.sliderLabel}>1%</Text>
          <Text style={styles.sliderLabel}>15%</Text>
        </View>

        <Text style={[styles.label, styles.marginTop]}>
          Plazo del Préstamo (meses)
        </Text>
        <TextInput
          style={styles.input}
          value={loanTerm}
          onChangeText={setLoanTerm}
          keyboardType="numeric"
          placeholder="Ej: 36"
        />
        <Slider
          style={styles.slider}
          minimumValue={6}
          maximumValue={60}
          step={6}
          value={parseInt(loanTerm) || 6}
          onValueChange={(value) => setLoanTerm(value.toString())}
          minimumTrackTintColor="#007AFF"
          maximumTrackTintColor="#E0E0E0"
          thumbTintColor="#007AFF"
        />
        <View style={styles.sliderLabels}>
          <Text style={styles.sliderLabel}>6 meses</Text>
          <Text style={styles.sliderLabel}>60 meses</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={recalculate}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultsCard}>
        <Text style={styles.resultsTitle}>Resultados</Text>

        <View style={styles.resultItem}>
          <Text style={styles.resultLabel}>Cuota Mensual:</Text>
          <Text style={styles.resultValue}>{monthlyPayment}</Text>
        </View>

        <View style={styles.resultItem}>
          <Text style={styles.resultLabel}>Total a Pagar:</Text>
          <Text style={styles.resultValue}>{totalPayment}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  marginTop: {
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    height: 46,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 8,
  },
  slider: {
    height: 40,
    marginBottom: 8,
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  sliderLabel: {
    fontSize: 12,
    color: "#999",
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  resultsCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  resultLabel: {
    fontSize: 16,
    color: "#666",
  },
  resultValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
});
