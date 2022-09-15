import { FlatList, Image, View } from 'react-native';

import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

import logoImg from '../../assets/logo-nlw-esports.png';
import { GAMES } from '../../utils/games';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title='Encontre seu duo'
        subtitle='Selecione o game que deseja jogar...'
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <GameCard
            id={item.id}
            ads={item.ads}
            name={item.name}
            cover={item.cover}
          />
        )}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
