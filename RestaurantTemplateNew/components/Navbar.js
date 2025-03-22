import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <View style={styles.navContent}>
        <Text style={styles.logo}>Restaurant</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.navLinks}>
          <Link href="/" asChild>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.navLinkText}>Home</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/menu" asChild>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.navLinkText}>Menu</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/about" asChild>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.navLinkText}>About</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/contact" asChild>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.navLinkText}>Contact</Text>
            </TouchableOpacity>
          </Link>
        </ScrollView>
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
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  navContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  navLinks: {
    flexDirection: 'row',
  },
  navLink: {
    marginLeft: 20,
  },
  navLinkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
}); 