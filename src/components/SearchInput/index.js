import React, {useState} from 'react';
import {Icon, SearchBar} from 'react-native-elements';
import COLORS from '../../configs/colors';
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
        searchIcon={
          <Icon
            name="search-outline"
            type="ionicon"
            size={20}
            style={styles.searchIcon}
            color={COLORS.DARK_BLUE}
          />
        }
        placeholder="Try books or writers..."
        onChangeText={updateSearch}
        value={search}
      />
    </>
  );
};

export default SearchInput;
