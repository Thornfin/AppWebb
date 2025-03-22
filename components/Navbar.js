import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Link } from 'expo-router';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <View style={styles.navContent}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Text style={styles.logo}>Restaurant</Text>
          </TouchableOpacity>
        </Link>
        
        <View style={styles.navLinks}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.orderButton]}>
            <Text style={styles.orderButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Platform.OS === 'web' ? 48 : 64,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
  },
  navContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: '100%',
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  navText: {
    fontSize: 16,
    color: '#1d1d1f',
    opacity: 0.8,
  },
  orderButton: {
    backgroundColor: '#000',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
}); 