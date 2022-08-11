import React from 'react';
import {Loader} from '../components/Loader';
import {useGetCharacters} from '../hooks/useGetCharacters';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

export const SSRErrorsScreen = () => {
  const {data, isLoading} = useGetCharacters();

  if (isLoading) {
    return <Loader size="large" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        style={styles.list}
        data={data?.results || []}
        keyExtractor={item => item.id}
        ListEmptyComponent={ListEmptyComponent}
        renderItem={({item}) => <ListItem key={item.id} {...{item}} />}
      />
    </View>
  );
};

const ListEmptyComponent = () => (
  <View style={styles.emptyBox}>
    <Text>No results</Text>
  </View>
);
const ListItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  list: {width: '100%'},
  item: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    alignItems: 'center',
  },
  image: {height: 180, width: '100%'},
  title: {paddingTop: 5},
  emptyBox: {
    height: Dimensions.get('window').height - 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
