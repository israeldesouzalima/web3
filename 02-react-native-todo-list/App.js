import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (idx) => {
    setTasks(
      tasks.map((task, i) => (i === idx ? { ...task, done: !task.done } : task))
    );
  };

  const removeTask = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar tarefa..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ width: "100%" }}
        data={tasks}
        keyExtractor={(_, idx) => idx.toString()}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhuma tarefa adicionada.</Text>
        }
        renderItem={({ item, index }) => (
          <View style={styles.taskRow}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => toggleTask(index)}
            >
              <Text style={[styles.taskText, item.done && styles.taskDone]}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeTask(index)}
            >
              <Text style={{ color: "#fff" }}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 24,
    width: "100%",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: "#3498db",
    paddingHorizontal: 16,
    justifyContent: "center",
    borderRadius: 6,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 6,
    padding: 10,
    elevation: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#222",
  },
  taskDone: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
  },
  empty: {
    color: "#888",
    textAlign: "center",
    marginTop: 24,
  },
});
