import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import Navbar from '../components/Navbar';

const MenuItem = ({ name, price, description }) => (
  <View style={styles.menuItem}>
    <Text style={styles.itemName}>{name}</Text>
    <Text style={styles.itemPrice}>${price}</Text>
    <Text style={styles.itemDescription}>{description}</Text>
  </View>
);

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Experience Fine Dining</Text>
        <Text style={styles.heroSubtitle}>Crafted with passion, served with excellence</Text>
        <TouchableOpacity style={styles.heroButton}>
          <Text style={styles.heroButtonText}>Reserve a Table</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Menu Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Menu</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuScroll}>
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

      {/* Location Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Find Us</Text>
        <View style={styles.locationContent}>
          <View style={styles.locationInfo}>
            <Text style={styles.locationTitle}>Visit Our Restaurant</Text>
            <Text style={styles.locationAddress}>123 Dining Street</Text>
            <Text style={styles.locationAddress}>Foodville, FD 12345</Text>
            <TouchableOpacity style={styles.directionButton}>
              <Text style={styles.directionButtonText}>Get Directions</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Hours Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hours</Text>
        <View style={styles.hoursGrid}>
          <View style={styles.hourRow}>
            <Text style={styles.dayText}>Monday - Friday</Text>
            <Text style={styles.timeText}>11:00 AM - 10:00 PM</Text>
          </View>
          <View style={styles.hourRow}>
            <Text style={styles.dayText}>Saturday</Text>
            <Text style={styles.timeText}>10:00 AM - 11:00 PM</Text>
          </View>
          <View style={styles.hourRow}>
            <Text style={styles.dayText}>Sunday</Text>
            <Text style={styles.timeText}>10:00 AM - 9:00 PM</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Restaurant. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSection: {
    height: Platform.OS === 'web' ? 600 : 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'web' ? 48 : 64,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  heroSubtitle: {
    fontSize: 24,
    color: '#fff',
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 40,
  },
  heroButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  heroButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    padding: 40,
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  menuScroll: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  menuItem: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 16,
    color: '#666',
  },
  locationContent: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  locationInfo: {
    alignItems: 'center',
  },
  locationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  locationAddress: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  directionButton: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  directionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  hoursGrid: {
    maxWidth: 500,
    marginHorizontal: 'auto',
    width: '100%',
  },
  hourRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dayText: {
    fontSize: 18,
    color: '#333',
  },
  timeText: {
    fontSize: 18,
    color: '#666',
  },
  footer: {
    padding: 40,
    backgroundColor: '#f5f5f7',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
}); 