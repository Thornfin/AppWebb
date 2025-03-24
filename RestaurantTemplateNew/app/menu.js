import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';

const MenuItem = ({ title, description, price, image }) => (
  <View style={styles.menuItem}>
    <Image source={{ uri: image }} style={styles.menuItemImage} />
    <View style={styles.menuItemContent}>
      <Text style={styles.menuItemTitle}>{title}</Text>
      <Text style={styles.menuItemDescription}>{description}</Text>
      <Text style={styles.menuItemPrice}>{price}</Text>
    </View>
  </View>
);

export default function Menu() {
  const { t } = useLanguage();
  const menuItems = [
    {
      title: 'Classic Caesar Salad',
      description: 'Crisp romaine lettuce, parmesan cheese, croutons, and our signature Caesar dressing',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1'
    },
    {
      title: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with lemon butter sauce, served with seasonal vegetables',
      price: '$28.99',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288'
    },
    {
      title: 'Beef Tenderloin',
      description: '8oz tenderloin with red wine reduction sauce, mashed potatoes, and asparagus',
      price: '$34.99',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462'
    },
    {
      title: 'Mushroom Risotto',
      description: 'Creamy Arborio rice with wild mushrooms, parmesan, and fresh herbs',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371'
    },
    {
      title: 'Chicken Marsala',
      description: 'Pan-seared chicken breast in Marsala wine sauce with mushrooms',
      price: '$26.99',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b'
    },
    {
      title: 'Shrimp Scampi',
      description: 'Large shrimp sautéed in garlic butter sauce with linguine',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8'
    },
    {
      title: 'Vegetable Lasagna',
      description: 'Layers of pasta, ricotta, mozzarella, and fresh vegetables',
      price: '$22.99',
      image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853'
    },
    {
      title: 'Duck Breast',
      description: 'Pan-seared duck breast with cherry sauce and wild rice',
      price: '$32.99',
      image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369'
    },
    {
      title: 'Lobster Tail',
      description: 'Broiled lobster tail with drawn butter and lemon',
      price: '$45.99',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'
    },
    {
      title: 'Pork Tenderloin',
      description: 'Herb-crusted pork tenderloin with apple sauce and roasted potatoes',
      price: '$27.99',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
    },
    {
      title: 'Seafood Paella',
      description: 'Spanish rice with shrimp, mussels, and calamari in saffron broth',
      price: '$31.99',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172789d'
    },
    {
      title: 'Beef Wellington',
      description: 'Tenderloin wrapped in puff pastry with mushroom duxelles',
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e'
    },
    {
      title: 'Vegetable Curry',
      description: 'Mixed vegetables in coconut curry sauce with basmati rice',
      price: '$21.99',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe'
    },
    {
      title: 'Rack of Lamb',
      description: 'Herb-crusted rack of lamb with mint sauce and roasted vegetables',
      price: '$36.99',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
    },
    {
      title: 'Sea Bass',
      description: 'Pan-seared Chilean sea bass with citrus sauce and quinoa',
      price: '$33.99',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2'
    },
    {
      title: 'Beef Short Ribs',
      description: 'Braised short ribs with red wine sauce and mashed potatoes',
      price: '$35.99',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947'
    },
    {
      title: 'Vegetable Stir Fry',
      description: 'Fresh vegetables in ginger soy sauce with brown rice',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19'
    },
    {
      title: 'Chicken Piccata',
      description: 'Pan-seared chicken in lemon caper sauce with pasta',
      price: '$25.99',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
    },
    {
      title: 'Scallops',
      description: 'Pan-seared sea scallops with bacon and Brussels sprouts',
      price: '$30.99',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8'
    },
    {
      title: 'Beef Tenderloin',
      description: '8oz tenderloin with red wine reduction sauce, mashed potatoes, and asparagus',
      price: '$34.99',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462'
    },
    {
      title: 'Mushroom Risotto',
      description: 'Creamy Arborio rice with wild mushrooms, parmesan, and fresh herbs',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371'
    },
    {
      title: 'Chicken Marsala',
      description: 'Pan-seared chicken breast in Marsala wine sauce with mushrooms',
      price: '$26.99',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b'
    },
    {
      title: 'Shrimp Scampi',
      description: 'Large shrimp sautéed in garlic butter sauce with linguine',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8'
    },
    {
      title: 'Vegetable Lasagna',
      description: 'Layers of pasta, ricotta, mozzarella, and fresh vegetables',
      price: '$22.99',
      image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853'
    },
    {
      title: 'Duck Breast',
      description: 'Pan-seared duck breast with cherry sauce and wild rice',
      price: '$32.99',
      image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369'
    },
    {
      title: 'Lobster Tail',
      description: 'Broiled lobster tail with drawn butter and lemon',
      price: '$45.99',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'
    },
    {
      title: 'Pork Tenderloin',
      description: 'Herb-crusted pork tenderloin with apple sauce and roasted potatoes',
      price: '$27.99',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
    },
    {
      title: 'Seafood Paella',
      description: 'Spanish rice with shrimp, mussels, and calamari in saffron broth',
      price: '$31.99',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172789d'
    },
    {
      title: 'Beef Wellington',
      description: 'Tenderloin wrapped in puff pastry with mushroom duxelles',
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e'
    },
    {
      title: 'Vegetable Curry',
      description: 'Mixed vegetables in coconut curry sauce with basmati rice',
      price: '$21.99',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe'
    },
    {
      title: 'Rack of Lamb',
      description: 'Herb-crusted rack of lamb with mint sauce and roasted vegetables',
      price: '$36.99',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
    }
  ];

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>{t('ourMenu')}</Text>
          <View style={styles.menuGrid}>
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index}
                {...item}
              />
            ))}
          </View>
        </View>
        {/* Footer with Social Links */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>{t('connectWithUs')}</Text>
          <View style={styles.socialLinks}>
            <TouchableOpacity 
              style={styles.socialButton}
              onPress={() => Linking.openURL('https://facebook.com')}
            >
              <Text style={styles.socialIcon}>📘</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialButton}
              onPress={() => Linking.openURL('https://instagram.com')}
            >
              <Text style={styles.socialIcon}>📸</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialButton}
              onPress={() => Linking.openURL('https://tiktok.com')}
            >
              <Text style={styles.socialIcon}>🎵</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialButton}
              onPress={() => Linking.openURL('https://x.com')}
            >
              <Text style={styles.socialIcon}>𝕏</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>{t('getInTouch')}</Text>
            <View style={styles.contactDetails}>
              <Text style={styles.contactText}>{t('email')}</Text>
              <Text style={styles.contactText}>{t('phone')}</Text>
            </View>
          </View>
          <Text style={styles.copyright}>{t('copyright')}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  menuSection: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    marginTop: 80,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#000',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    maxWidth: 1200,
    gap: 20,
  },
  menuItem: {
    width: 'calc(33.33% - 20px)',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  menuItemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  menuItemContent: {
    padding: 15,
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 6,
  },
  footer: {
    backgroundColor: '#000',
    padding: 80,
    alignItems: 'center',
    width: '100%',
  },
  footerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  },
  socialIcon: {
    fontSize: 24,
  },
  contactInfo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 25,
    textAlign: 'center',
  },
  contactDetails: {
    alignItems: 'center',
    gap: 20,
  },
  contactText: {
    fontSize: 16,
    color: '#fff',
  },
  copyright: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    textAlign: 'center',
  },
}); 