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
        inputStyle={styles.input}
        inputContainerStyle={styles.inputContainer}
        searchIcon={<Icon name="search" size={20} style={styles.searchIcon} />}
        placeholder="Try books or writers..."
        onChangeText={updateSearch}
        value={search}
      />
    </>
  );
};

export default SearchInput;
