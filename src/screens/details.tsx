import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
//navigation
import {NativeStackScreenProps}from "@react-navigation/native-stack"
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';
type DetailsProps=NativeStackScreenProps<RootStackParamList, 'Details'>
import{NativeStackNavigationProp} from "@react-navigation/native-stack"


const Details= ({ route }: DetailsProps) => {
  const {productId}=route.params

 const navigation= useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details:{productId}</Text>
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Details;
const styles=StyleSheet.create({
    container:{


    flex:1,
    alignItems:"center",
    justifyContent:"center",
    
    },
    smallText:{
        color:"#000000"
    }
})
