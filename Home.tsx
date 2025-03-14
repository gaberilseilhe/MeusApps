import { Image, StyleSheet, Platform, View, Text, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.ViewSecundaria}>
        <Text style={styles.title}>Pagina Home</Text>
        <Text style={styles.subtitle}>??????</Text>
        <Text style={styles.paragraph}>
          Aqui provavelmente terá um textinho e algumas imagens
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Seção 1</Text>
        <Text style={styles.cardText}>
          imagem aqui talvez e texto do lado
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Seção 2</Text>
        <Text style={styles.cardText}>
         merma coisa
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Scroll: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  ViewSecundaria: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
    marginBottom: 15,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#555',
  },
});
