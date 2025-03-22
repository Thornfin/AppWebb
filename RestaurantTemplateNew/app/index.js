import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, Platform, Animated } from 'react-native';
import Navbar from '../components/Navbar';

const MenuItem = ({ title, description, price, image, isFullMenu, style, index }) => (
  <Animated.View style={[styles.menuItem, isFullMenu && styles.menuItemFull, style]}>
    <Image source={{ uri: image }} style={[styles.menuItemImage, isFullMenu && styles.menuItemImageFull]} />
    <View style={[styles.menuItemContent, isFullMenu && styles.menuItemContentFull]}>
      <Text style={styles.menuItemTitle}>{title}</Text>
      <Text style={styles.menuItemDescription}>{description}</Text>
      {isFullMenu && <Text style={styles.menuItemPrice}>{price}</Text>}
    </View>
  </Animated.View>
);

export default function Home() {
  const [isFullMenu, setIsFullMenu] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const menuSectionRef = useRef(null);
  const scrollViewRef = useRef(null);

  const toggleMenu = () => {
    setIsFullMenu(!isFullMenu);
    if (!isFullMenu) {
      // Animate to full menu
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0.7,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Animate back to popular items and scroll to menu section
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
      
      // Scroll to menu section
      menuSectionRef.current?.measure((x, y, width, height, pageX, pageY) => {
        scrollViewRef.current?.scrollTo({ y: pageY, animated: true });
      });
    }
  };

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
    <ScrollView 
      ref={scrollViewRef}
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
    >
      <Navbar />
      
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Welcome to Our Restaurant</Text>
        <Text style={styles.heroSubtitle}>Experience the finest dining in town</Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>View Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Section */}
      <View ref={menuSectionRef} style={styles.menuSection}>
        <Text style={[styles.sectionTitle, { color: '#000' }]}>Popular Items</Text>
        <View style={styles.menuContainer}>
          {!isFullMenu ? (
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={true}
              style={styles.menuScroll}
              contentContainerStyle={styles.menuScrollContent}
            >
              {menuItems.slice(0, 10).map((item, index) => (
                <MenuItem 
                  key={index}
                  {...item}
                  isFullMenu={false}
                  index={index}
                />
              ))}
            </ScrollView>
          ) : (
            <View style={styles.fullMenuGrid}>
              {menuItems.map((item, index) => (
                <MenuItem 
                  key={index}
                  {...item}
                  isFullMenu={true}
                  index={index}
                  style={{
                    transform: [
                      { scale: scaleAnim },
                      { translateY: translateY.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 50]
                      })}
                    ],
                  }}
                />
              ))}
            </View>
          )}
        </View>
        <TouchableOpacity 
          style={styles.viewMenuButton}
          onPress={toggleMenu}
        >
          <Text style={styles.viewMenuButtonText}>
            {isFullMenu ? 'Show Popular Items' : 'View Full Menu'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Culture Section */}
      <View style={styles.cultureSection}>
        <Text style={[styles.sectionTitle, { color: '#fff' }]}>Our Culture</Text>
        <View style={styles.cultureGrid}>
          <View style={styles.cultureItem}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4' }}
              style={styles.cultureImage}
            />
            <Text style={styles.cultureTitle}>Traditional Values</Text>
            <Text style={styles.cultureText}>We preserve authentic recipes passed down through generations.</Text>
          </View>
          <View style={styles.cultureItem}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9' }}
              style={styles.cultureImage}
            />
            <Text style={styles.cultureTitle}>Modern Innovation</Text>
            <Text style={styles.cultureText}>Blending traditional flavors with contemporary techniques.</Text>
          </View>
          <View style={styles.cultureItem}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1559339352-11d035aa65de' }}
              style={styles.cultureImage}
            />
            <Text style={styles.cultureTitle}>Community Focus</Text>
            <Text style={styles.cultureText}>Supporting local farmers and sustainable practices.</Text>
          </View>
        </View>
      </View>

      {/* Location Section */}
      <View style={styles.locationSection}>
        <Text style={[styles.sectionTitle, { color: '#fff' }]}>Find Us</Text>
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
        <Text style={styles.address}>123 Restaurant Street, City, Country</Text>
      </View>

      {/* Reviews Section */}
      <View style={styles.reviewsSection}>
        <Text style={[styles.sectionTitle, { color: '#000' }]}>What Our Customers Say</Text>
        <View style={styles.reviewCard}>
          <Text style={styles.reviewText}>"Amazing food and great service! The atmosphere is perfect for a romantic dinner."</Text>
          <Text style={styles.reviewAuthor}>- John Doe</Text>
          <Text style={styles.reviewRating}>★★★★★</Text>
        </View>
        <View style={styles.reviewCard}>
          <Text style={styles.reviewText}>"A must-visit place for food lovers. The chef's special is always a treat!"</Text>
          <Text style={styles.reviewAuthor}>- Jane Smith</Text>
          <Text style={styles.reviewRating}>★★★★★</Text>
        </View>
      </View>

      {/* Hours Section */}
      <View style={styles.hoursSection}>
        <Text style={[styles.sectionTitle, { color: '#000' }]}>Opening Hours</Text>
        <Text style={styles.hoursText}>Monday - Friday: 11:00 AM - 10:00 PM</Text>
        <Text style={styles.hoursText}>Saturday - Sunday: 10:00 AM - 11:00 PM</Text>
      </View>

      {/* Footer with Social Links */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Connect With Us</Text>
        <View style={styles.socialLinks}>
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => Linking.openURL('https://facebook.com')}
          >
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => Linking.openURL('https://instagram.com')}
          >
            <Text style={styles.socialButtonText}>Instagram</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.copyright}>© 2024 Our Restaurant. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1,
    width: '100%',
  },
  heroSection: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
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
  menuContainer: {
    width: '100%',
    overflow: 'hidden',
  },
  menuScroll: {
    width: '100%',
  },
  menuScrollContent: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'flex-start',
  },
  menuItem: {
    width: 400,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  menuItemFull: {
    width: '19.9%',
    marginBottom: 1,
    marginHorizontal: '0.02%',
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
    height: 250,
    resizeMode: 'cover',
  },
  menuItemImageFull: {
    height: 200,
  },
  menuItemContent: {
    padding: 20,
  },
  menuItemContentFull: {
    padding: 15,
  },
  menuItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  menuItemDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  menuItemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 8,
  },
  viewMenuButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 30,
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
  hoursSection: {
    padding: 40,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  hoursText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    color: '#000',
  },
  footer: {
    padding: 40,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  socialLinks: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  socialButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  copyright: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  fullMenuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: '100%',
    maxWidth: 3000,
    gap: 0,
  },
}); 