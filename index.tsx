import { Image, StyleSheet, Platform, View, Text, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, Tabs } from 'expo-router';
export default function HomeScreen() {
  return (

    <View style={styles.MainView}>
      <View style={styles.v0}>
        <Link href='/Home'>
        <Pressable>
          <View style={styles.ViewImg}>
            <Image source={require('@/assets/images/Home.png')}
              style={styles.image} />
          </View>
          <Text style={styles.Text}>
            Home
          </Text>
        </Pressable>
        </Link>
      </View>

      <View style={styles.v0}>
          <Link href='/Configuracao'>
        <Pressable>

          <View style={styles.ViewImg}>
            <Image source={require('@/assets/images/Configuracao.png')}
              style={styles.image} />
          </View>
          <Text style={styles.Text}>
            Configuração
          </Text>
        </Pressable>
        </Link>
      </View>

      <View style={styles.v0}>
        <Link href='/Imagens'>
        <Pressable>
          <View style={styles.ViewImg}>
            <Image source={require('@/assets/images/Imagens.png')}
              style={styles.image} />
          </View>
          <Text style={styles.Text}>
            Imagens
          </Text>
        </Pressable>
        </Link>
      </View>

      <View style={styles.v0}>
        <Link href='/Menu'>
        <Pressable>
          <View style={styles.ViewImg}>
            <Image source={require('@/assets/images/Menu.png')}
              style={styles.image} />
          </View>
          <Text style={styles.Text}>
            Menu
          </Text>
        </Pressable>
        </Link>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  MainView: {

    backgroundColor: '#A9A9A9',
    paddingVertical: 2,
    paddingHorizontal: '3%',
    flexDirection: 'row',
    borderWidth: 1,
  },
  v0: {
    backgroundColor: '#696969',
    borderRadius: 10,
    borderWidth: 2,
    padding: '2%',
    margin: 10,
  },
  Text: {
    color: 'white',
  },
  image: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 1,
  },
  ViewImg: {
    alignItems: 'center',
  }
});
