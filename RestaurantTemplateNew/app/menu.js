import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const MenuItem = ({ name, price, description }) => (
  <View style={styles.menuItem}>
    <Text style={styles.itemName}>{name}</Text>
    <Text style={styles.itemPrice}>${price}</Text>
    <Text style={styles.itemDescription}>{description}</Text>
  </View>
);

export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/" style={styles.backLink}>
          <Text style={styles.backText}>← Back</Text>
        </Link>
        <Text style={styles.headerTitle}>Our Menu</Text>
      </View>
      <ScrollView style={styles.menuList}>
        <MenuItem 
          name="Signature Pasta"
          price="18.99"
          description="Fresh homemade pasta with our special sauce"
        />
        <MenuItem 
          name="Grilled Salmon"
          price="24.99"
          description="Fresh Atlantic salmon with seasonal vegetables"
        />
        <MenuItem 
          name="Classic Burger"
          price="16.99"
          description="Premium beef patty with all the fixings"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f4511e',
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  backLink: {
    marginBottom: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 18,
  },
  menuList: {
    padding: 20,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 18,
    color: '#f4511e',
    marginTop: 5,
  },
  itemDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
}); 