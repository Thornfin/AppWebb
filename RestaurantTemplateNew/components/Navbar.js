import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Link } from 'expo-router';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'Français' }
  ];

  const selectLanguage = (langCode) => {
    setLanguage(langCode);
    setShowDropdown(false);
  };

  return (
    <View style={styles.navbar}>
      <View style={styles.navContent}>
        <View style={styles.leftSection}>
          <Text style={styles.logo}>Restaurant</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.navLinks}>
            <Link href="/" asChild>
              <TouchableOpacity style={styles.navLink}>
                <Text style={styles.navLinkText}>{t('home')}</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/menu" asChild>
              <TouchableOpacity style={styles.navLink}>
                <Text style={styles.navLinkText}>{t('menu')}</Text>
              </TouchableOpacity>
            </Link>
          </ScrollView>
        </View>
        <View>
          <TouchableOpacity 
            style={styles.languageButton}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={styles.languageText}>{language}</Text>
          </TouchableOpacity>
          <Modal
            visible={showDropdown}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setShowDropdown(false)}
          >
            <TouchableOpacity 
              style={styles.modalOverlay}
              activeOpacity={1}
              onPress={() => setShowDropdown(false)}
            >
              <View style={styles.dropdownMenu}>
                {languages.map((lang) => (
                  <TouchableOpacity
                    key={lang.code}
                    style={[
                      styles.dropdownItem,
                      language === lang.code && styles.selectedItem
                    ]}
                    onPress={() => selectLanguage(lang.code)}
                  >
                    <Text style={[
                      styles.dropdownText,
                      language === lang.code && styles.selectedText
                    ]}>
                      {lang.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableOpacity>
          </Modal>
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
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 20,
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
  languageButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  languageText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 80,
    paddingRight: 20,
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    minWidth: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  selectedItem: {
    backgroundColor: '#f0f0f0',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    fontWeight: '600',
  },
}); 