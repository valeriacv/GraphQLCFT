/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HomeScreen from './screens/home.js';
import BooksScreen from './screens/books.js';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Books" component={BooksScreen} />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
