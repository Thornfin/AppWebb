import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, Platform, Animated } from 'react-native';
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

export default function Home() {
  const { t } = useLanguage();
  const menuSectionRef = useRef(null);
  const scrollViewRef = useRef(null);

  const [menuItems] = useState([
    {
      title: "Signature Pasta",
      description: "Homemade pasta with truffle cream sauce",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856"
    },
    {
      title: "Grilled Salmon",
      description: "Fresh Atlantic salmon with seasonal vegetables",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
    },
    {
      title: "Beef Tenderloin",
      description: "8oz tenderloin with red wine reduction",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947"
    },
    {
      title: "Mushroom Risotto",
      description: "Creamy Arborio rice with wild mushrooms",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371"
    },
    {
      title: "Seafood Paella",
      description: "Traditional Spanish rice with fresh seafood",
      price: "$27.99",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172789d"
    },
    {
      title: "Chicken Marsala",
      description: "Pan-seared chicken in Marsala wine sauce",
      price: "$23.99",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
    },
    {
      title: "Vegetable Curry",
      description: "Spicy coconut curry with fresh vegetables",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe"
    },
    {
      title: "Pizza Margherita",
      description: "Classic Neapolitan style pizza",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
    },
    {
      title: "Lobster Thermidor",
      description: "Classic French lobster dish with cream sauce",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445"
    },
    {
      title: "Duck Confit",
      description: "Slow-cooked duck leg with crispy skin",
      price: "$32.99",
      image: "https://images.unsplash.com/photo-1580477371194-4593e3c7c4cf"
    },
    // Additional items for full menu
    {
      title: "Wagyu Steak",
      description: "Premium Japanese beef with truffle butter",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef"
    },
    {
      title: "Truffle Risotto",
      description: "Black truffle risotto with parmesan",
      price: "$31.99",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371"
    },
    {
      title: "Scallop Linguine",
      description: "Fresh scallops with white wine sauce",
      price: "$28.99",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8"
    },
    {
      title: "Rack of Lamb",
      description: "Herb-crusted lamb with mint sauce",
      price: "$36.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947"
    },
    {
      title: "Wild Mushroom Soup",
      description: "Creamy soup with assorted wild mushrooms",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371"
    },
    {
      title: "Branzino",
      description: "Mediterranean sea bass with herbs",
      price: "$33.99",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
    },
    {
      title: "Beef Wellington",
      description: "Classic beef wellington with mushroom duxelles",
      price: "$42.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947"
    },
    {
      title: "Truffle Mac & Cheese",
      description: "Creamy mac with black truffle and aged cheddar",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856"
    },
    {
      title: "Sea Bass Ceviche",
      description: "Fresh sea bass with citrus marinade",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
    },
    {
      title: "Chocolate Lava Cake",
      description: "Warm chocolate cake with vanilla ice cream",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    }
  ]);

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView 
        ref={scrollViewRef}
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.restaurantName}>{t('restaurantName')}</Text>
          <Text style={styles.tagline}>{t('tagline')}</Text>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4' }}
            style={styles.restaurantLogo}
          />
        </View>

        {/* Menu Section */}
        <View ref={menuSectionRef} style={styles.menuSection}>
          <Text style={[styles.sectionTitle, { color: '#000' }]}>{t('ourMenu')}</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={true}
            style={styles.menuScroll}
            contentContainerStyle={styles.menuScrollContent}
            scrollEventThrottle={16}
          >
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index}
                {...item}
              />
            ))}
          </ScrollView>
          <TouchableOpacity 
            style={styles.viewFullMenuButton}
            onPress={() => router.push('/menu')}
          >
            <Text style={styles.viewFullMenuText}>{t('viewFullMenu')}</Text>
          </TouchableOpacity>
        </View>

        {/* Culture Section */}
        <View style={styles.cultureSection}>
          <Text style={[styles.sectionTitle, { color: '#fff' }]}>{t('ourCulture')}</Text>
          <View style={styles.cultureGrid}>
            <View style={styles.cultureItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4' }}
                style={styles.cultureImage}
              />
              <Text style={styles.cultureTitle}>{t('traditionalValues')}</Text>
              <Text style={styles.cultureText}>{t('traditionalValuesDesc')}</Text>
            </View>
            <View style={styles.cultureItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9' }}
                style={styles.cultureImage}
              />
              <Text style={styles.cultureTitle}>{t('modernInnovation')}</Text>
              <Text style={styles.cultureText}>{t('modernInnovationDesc')}</Text>
            </View>
            <View style={styles.cultureItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1559339352-11d035aa65de' }}
                style={styles.cultureImage}
              />
              <Text style={styles.cultureTitle}>{t('communityFocus')}</Text>
              <Text style={styles.cultureText}>{t('communityFocusDesc')}</Text>
            </View>
          </View>
        </View>

        {/* Location Section */}
        <View style={styles.locationSection}>
          <Text style={[styles.sectionTitle, { color: '#fff' }]}>{t('findUs')}</Text>
          <View style={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531983!3d-37.81732767983171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sRestaurant!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: 15 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </View>
          <Text style={styles.address}>{t('address')}</Text>
        </View>

        {/* Reviews Section */}
        <View style={styles.reviewsSection}>
          <Text style={[styles.sectionTitle, { color: '#000' }]}>{t('customerReviews')}</Text>
          <View style={styles.reviewCard}>
            <Text style={styles.reviewText}>{t('review1')}</Text>
            <Text style={styles.reviewAuthor}>- John Doe</Text>
            <Text style={styles.reviewRating}>★★★★★</Text>
          </View>
          <View style={styles.reviewCard}>
            <Text style={styles.reviewText}>{t('review2')}</Text>
            <Text style={styles.reviewAuthor}>- Jane Smith</Text>
            <Text style={styles.reviewRating}>★★★★★</Text>
          </View>
        </View>

        {/* Opening Hours Section */}
        <View style={styles.infoSection}>
          <View style={styles.hoursContainer}>
            <Text style={styles.hoursTitle}>{t('openingHours')}</Text>
            <View style={styles.hoursRow}>
              <Text style={styles.hoursLabel}>{t('mondayFriday')}</Text>
              <Text style={styles.hoursText}>{t('hoursWeekday')}</Text>
            </View>
            <View style={styles.hoursRow}>
              <Text style={styles.hoursLabel}>{t('saturday')}</Text>
              <Text style={styles.hoursText}>{t('hoursSaturday')}</Text>
            </View>
            <View style={styles.hoursRow}>
              <Text style={styles.hoursLabel}>{t('sunday')}</Text>
              <Text style={styles.hoursText}>{t('hoursSunday')}</Text>
            </View>
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
    width: '100%',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  heroSection: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
    marginTop: 0, // Remove the margin to allow navbar overlay
  },
  restaurantName: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'serif',
  },
  tagline: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
    opacity: 0.9,
  },
  restaurantLogo: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#fff',
  },
  ctaButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  menuSection: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  menuScroll: {
    width: '100%',
    overflow: 'auto',
  },
  menuScrollContent: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'flex-start',
    minWidth: 'min-content',
  },
  menuItem: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
    flexShrink: 0,
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
  viewMenuButton: {
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    alignSelf: 'center',
  },
  viewMenuButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cultureSection: {
    padding: 40,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  cultureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
    width: '100%',
    maxWidth: 1200,
  },
  cultureItem: {
    width: '31%',
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    transition: 'transform 0.3s ease',
    alignItems: 'center',
  },
  cultureImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  cultureTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
    color: '#000',
  },
  cultureText: {
    fontSize: 16,
    color: '#666',
    padding: 15,
    textAlign: 'center',
    lineHeight: 24,
  },
  locationSection: {
    padding: 40,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  mapContainer: {
    width: '100%',
    maxWidth: 1200,
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
  },
  address: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  reviewsSection: {
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  reviewCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    width: '100%',
    maxWidth: 800,
    alignItems: 'center',
  },
  reviewText: {
    fontSize: 16,
    marginBottom: 10,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#000',
  },
  reviewAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  reviewRating: {
    color: '#FFD700',
    fontSize: 16,
  },
  infoSection: {
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  hoursContainer: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    width: '100%',
    maxWidth: 400,
  },
  hoursTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  hoursLabel: {
    fontSize: 16,
    color: '#666',
  },
  hoursText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
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
  fullMenuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    maxWidth: 1200,
    gap: 0,
  },
  viewFullMenuButton: {
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    alignSelf: 'center',
  },
  viewFullMenuText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 