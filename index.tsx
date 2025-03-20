import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, Pressable, ScrollView, Dimensions, Switch } from 'react-native';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const [ModoEscuro, setModoEscuro] = useState(false);

  const botao_apertado = () => setModoEscuro(previousState => !previousState);

  const estilodinamico = ModoEscuro ? StylesModoEscuro : lightModeStyles;

  return (
    <View style={[styles.container, estilodinamico.container]}>
      <View style={[styles.header, estilodinamico.header]}>
        <Text style={[styles.title, estilodinamico.title]}>Cuidado do Cabelo</Text>
        <Text style={[styles.segundotitulo1, estilodinamico.segundotitulo1]}>Dicas e cuidados para seu cabelo perfeito!</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={[styles.primeirocontainer, estilodinamico.primeirocontainer]}>
          <Text style={[styles.primeirotitulo, estilodinamico.primeirotitulo]}>Como seu cabelo funciona?</Text>
          <Text style={[styles.primeirotexto, estilodinamico.primeirotexto]}>Aqui você pode ter uma ideia de como seu cabelo funciona.</Text>
          <View style={styles.viewquiz}>
            <View style={styles.bottomquiz}>
              <Link href='/Quiz'>
                <Pressable>
                  <View>
                    <Text style={[styles.segundotitulo1, estilodinamico.segundotitulo1]}>ir para quiz</Text>
                  </View>
                </Pressable>
              </Link>
            </View>
          </View>

        </View>

        <View style={[styles.segundocontainer, estilodinamico.segundocontainer]}>
          <Text style={[styles.segundotitulo2, estilodinamico.segundotitulo2]}>Seu Tipo de Cabelo</Text>
          <Text style={[styles.infoText, estilodinamico.infoText]}>Aqui você pode visualizar o tipo do seu cabelo com exemplos de pessoas ou escanear com AI.</Text>
          <View style={{flexDirection:'row-reverse'}}>
          <View style={styles.bottomButton}>
            <Image
              source={require('@/assets/images/Camera.png')}
              style={styles.image}
            />
          </View>
          <Link href='/Fotos'>
            <Pressable>
          <View style={styles.bottomButton2}>
            <Image
              source={require('@/assets/images/Imagens.png')}
              style={styles.image}
            />
            
          </View>
          </Pressable>
          </Link>
          </View>
          
        </View>
      </ScrollView>

      <View style={styles.bottomButtonsContainer}>
        <View style={styles.bottomButton}>
          <Link href='/Configuracao'>
            <Pressable>
              <View style={styles.viewimage}>
                <Image
                  source={require('@/assets/images/Configuracao.png')}
                  style={styles.image}
                />
              </View>

              <Text style={[styles.Text, estilodinamico.Text]}>Configuração</Text>
            </Pressable>
          </Link>
        </View>

        <View style={styles.bottomButton}>

          <Link href='/Home'>
            <Pressable>
              <View style={styles.viewimage}>
                <Image
                  source={require('@/assets/images/Home.png')}
                  style={styles.image}
                />
              </View>

              <Text style={[styles.Text, estilodinamico.Text]}>Home</Text>
            </Pressable>
          </Link>
        </View>
        <View style={styles.bottomButton}>

          <Link href='/Menu'>
            <Pressable>
              <View style={styles.viewimage}>
                <Image
                  source={require('@/assets/images/Menu.png')}
                  style={styles.image}
                />
              </View>

              <Text style={[styles.Text, estilodinamico.Text]}>Menu</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* Botão de alternância de tema */}
      <View style={styles.botaodetroca}>
        <Text style={estilodinamico.texto_botao_troca}>Modo Escuro</Text>
        <Switch
          value={ModoEscuro}
          onValueChange={botao_apertado}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={ModoEscuro ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
    </View>
  );
}

const lightModeStyles = StyleSheet.create({
  header: {
    backgroundColor: '#0E0D0D',
  },
});

const StylesModoEscuro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  header: {
    backgroundColor: '#1A1A1A',
  },
  
  segundocontainer: {
    backgroundColor: '#555555',
  },
  segundotitulo2: {
    color: '#FFFFFF',
  },
  infoText: {
    color: '#FFFFFF',
  },
  Text: {
    color: '#FFFFFF',
  },
  texto_botao_troca: {
    color: '#FFFFFF',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  header: {
    backgroundColor: '#0E0D0D',
    paddingTop: height * 0.1,
    paddingBottom: height * 0.05,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: width * 0.065,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  segundotitulo1: {
    color: 'white',
    fontSize: width * 0.035,
    textAlign: 'center',
  },
  scrollview: {
    paddingHorizontal: '4%',
    paddingBottom: height * 0.1,
  },
  primeirocontainer: {
    backgroundColor: '#0E0D0D',
    borderRadius: 10,
    borderWidth: 2,
    padding: '5%',
    marginVertical: 20,
    shadowRadius: 5,
  },
  primeirotitulo: {
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
  primeirotexto: {
    color: 'white',
    fontSize: width * 0.04,
    marginTop: 5,
  },
  segundocontainer: {
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    padding: '5%',
    marginVertical: 10,
    shadowRadius: 5,
    shadowColor: 'black',
  },
  segundotitulo2: {
    color: '#0E0D0D',
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
  infoText: {
    color: '#0E0D0D',
    fontSize: width * 0.04,
    marginTop: 5,
  },
  Text: {
    color: 'white',
    fontSize: width * 0.04,
    marginTop: 5,
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: '#F3F3F3',
    borderRadius: 6,
    borderWidth: 1,
  },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#696969',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: height * 0.02,
    paddingHorizontal: 10,
  },
  bottomButton: {
    alignItems: 'flex-start',
  },
  bottomButton2: {
    alignItems: 'flex-start',
  },
  viewquiz: {
    alignItems: 'flex-end',
  },
  bottomquiz: {
    width: width * 0.2,
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
  },
  viewimage: {
    alignItems: 'center',
  },
  botaodetroca: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding:'30%',
  },
});

