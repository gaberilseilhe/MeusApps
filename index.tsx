import { Image, StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
     

      {/* Container para os botões fixados na parte inferior */}
      <View style={styles.bottomButtonsContainer}>
        <View style={styles.bottomButton}>
          <Link href='/Configuracao'>
            <Pressable>
              <Image 
                source={require('@/assets/images/Configuracao.png')} 
                style={styles.image} 
              />
              <Text style={styles.Text}>Configuração</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.bottomButton}>
          <Link href='/Home'>
            <Pressable>
              <Image 
                source={require('@/assets/images/Home.png')} 
                style={styles.image} 
              />
              <Text style={styles.Text}>Home</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.bottomButton}>
          <Link href='/Imagens'>
            <Pressable>
              <Image 
                source={require('@/assets/images/Imagens.png')} 
                style={styles.image} 
              />
              <Text style={styles.Text}>Imagens</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.bottomButton}>
          <Link href='/Menu'>
            <Pressable>
              <Image 
                source={require('@/assets/images/Menu.png')} 
                style={styles.image} 
              />
              <Text style={styles.Text}>Menu</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: '4%',
    flexGrow: 1,
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
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 1,
  },
  ViewImg: {
    alignItems: 'center',
  },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#696969',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  bottomButton: {
    alignItems: 'center',
  },
});
