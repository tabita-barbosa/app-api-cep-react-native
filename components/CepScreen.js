import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

class CepScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: '',
      addressData: [],
    };
  }

  handleCepChange = (text) => {
    this.setState({ cep: text });
  }

  handleSearchCep = () => {
    const { cep } = this.state;
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          Alert.alert('Error', 'CEP não encontrado');
        } else {
          this.setState({ addressData: data });
        }
      })
      .catch((error) => {
        console.error('API request error:', error);
        Alert.alert('Error', 'Failed to fetch data');
      });
  }

  handleClearSearch = () => {
    this.setState({ cep: '', addressData: [] });
  }

  render() {
    const { cep, addressData } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Digite o CEP abaixo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP, somente números"
          onChangeText={this.handleCepChange}
          value={cep}
          keyboardType="numeric"
          maxLength={8}
        />
        <Button
          title="Buscar CEP"
          onPress={this.handleSearchCep}
          disabled={cep.length !== 8}
        />
        {/* {addressData && ( */}
          <View style={styles.addressData}>
            <View style={styles.input}>
                <TextInput
                placeholder='CEP'
                value={addressData.cep}/>
            </View>
            <View style={styles.input}>
                <TextInput
                placeholder='Logradouro'
                value={addressData.logradouro}/>
            </View>
            <View style={styles.input}>
                <TextInput
                placeholder='Complemento'
                value={addressData.complemento}/>
            </View>
            <View style={styles.input}>
                <TextInput
                placeholder='Bairro'
                value={addressData.bairro}/>
            </View>
            <View style={styles.input}>
                <TextInput
                placeholder='Localidade'
                value={addressData.localidade}/>
            </View>
            <View style={styles.input}>
                <TextInput
                placeholder='UF'
                value={addressData.uf}/>
            </View>
            <View style={styles.input}>
                <TextInput
                placeholder='IBGE'
                value={addressData.ibge}/>
            </View>
            <View style={styles.input}>
                <TextInput
                placeholder='GIA'
                value={addressData.gia}/>
            </View>
            <View style={styles.input}>
                <TextInput
                placeholder='DDD'
                value={addressData.ddd}/>
            </View>
          </View>
        {/* )} */}
        <Button
          title="Limpar Busca"
          onPress={this.handleClearSearch}
          style={styles.clearButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 44,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  addressData: {
    marginTop: 16,
  },
  clearButton: {
    marginTop: 16,
  },
});

export default CepScreen;
