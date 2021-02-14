import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './index.styles';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const updateSearch = (searchValue) => setSearch(searchValue);
  return (
    <>
      <SearchBar
        containerStyle={styles.container}
        lightTheme={true}
        platform="android"
        searchIcon={<Icon name="search" size={28} style={{marginLeft: 6}} />}
        placeholder="Try books or writers..."
        onChangeText={updateSearch}
        value={search}
      />
    </>
  );
};

export default SearchInput;
