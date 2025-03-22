import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        centerComponent={{ 
          text: 'Restaurant Name', 
          style: styles.headerText 
        }}
        containerStyle={styles.header}
      />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Welcome to Our Restaurant</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Today's Special</Text>
            <Text style={styles.cardText}>Chef's signature dish with seasonal ingredients</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Featured Dish</Text>
            <Text style={styles.cardText}>Our most loved dish by customers</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f4511e',
    justifyContent: 'space-around',
    borderBottomWidth: 0,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#f4511e',
  },
  cardText: {
    fontSize: 16,
    color: '#666',
  },
}); 