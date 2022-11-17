import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { getBooks, getUser, createPost } from '../queries.js'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  secondContainer: {
    borderTopWidth: 1,
    borderTopColor: 'black',
    width: '100%',
    marginTop: 40,
  },
  button: {
    marginHorizontal: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#5ebfa8',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const BooksScreen = () => {
  const [userId, setUserId] = React.useState();
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();


  const handleClickGetUser = () => {
    // TODO: Ejercicio 2
  }

  const addNewPost = () => {
    if (title && description) {
      // TODO: Ejercicio 3
    }
  }


  return (
    <View style={styles.container}>
      {/** 1. Render list of books*/}
      <Text>Render the list of books:</Text>
      {/** TODO: Ejercicio 1 */}

      {/* {(<View>
          {map((book, index) => (
            <Text>{`${index}. ${book.title} - ${book.author}`}</Text>
          ))}
        </View>) }
      */}
      {/** 2. Uncomment next part after finishing part 1*/}
      {/* <View style={styles.secondContainer}>
        <Text>Insert a number</Text>
        <TextInput
          style={styles.input}
          onChangeText={(userId) => setUserId(userId)}
          value={userId}
          keyboardType='numeric'
          maxLength={1}
        />
        <Pressable style={styles.button} onPress={() =>
          handleClickGetUser()
        }>
          <Text style={styles.buttonText}>Click to get User</Text>
        </Pressable>
        {
          <View>
            <Text>{`Id: `}</Text>
            <Text>{`Username: `}</Text>
            <Text>{`Email: `}</Text>
          </View>
        }
      </View> */}
      {/** 3. Uncomment next part after finishing part 2 */}
      {/* <View style={styles.secondContainer}>
        <View>
          <Text>Titulo: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(title) => setTitle(title)}
            value={title}
            maxLength={60}
          />
        </View>
        <View>

          <Text>Contenido: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(description) => setDescription(description)}
            value={description}
            multiline
          />
        </View>
        <Pressable style={styles.button} onPress={() =>
          addNewPost()
        }>
          <Text style={styles.buttonText}>Create post</Text>
        </Pressable>

        {
          <View>
            <Text>{`Id: `}</Text>
            <Text>{`Title: `}</Text>
            <Text>{`Description: `}</Text>
          </View>
        }
      </View> */}


    </View>
  )
};

export default BooksScreen