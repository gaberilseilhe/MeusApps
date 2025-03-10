import { Image, StyleSheet, Platform, View, Text, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, Tabs } from 'expo-router';

export default function Home() {
  return (
<View style={styles.View}>
<Pressable>
    <Text>
        Essa pagina é o Home
    </Text>
    </Pressable>
</View>
  );
}
const styles = StyleSheet.create({
  Voltar: {

  },
  View:{
    flex:1,
alignItems:'center',
padding:130
  },
  });
  