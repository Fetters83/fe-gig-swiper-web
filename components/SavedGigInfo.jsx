import { useContext } from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";
import { LikedGigContext } from "../contexts/LikedGigContext";
import UseAuth from "../hooks/UserAuth";
import { removeGig } from "../api";

export function SavedGigInfo(currentGig) {

  const {setLikedGigs}= useContext(LikedGigContext)
  const {id, description, date, doorsopening, doorsclosing, lastentry, location, postcode, town, link} = currentGig.currentGig
  const { user } = UseAuth()
  

  function removeLikedGig(selectedId) {
    console.log(selectedId)
    if(user){
      removeGig(user.email,selectedId).then(()=>{
        setLikedGigs(oldValues =>{
          return oldValues.filter((gig) => gig.id !== selectedId)
        })
      })
    }

  }

  return (
      <>
        <View style={styles.section}>
          <Text style={styles.largeText}>Description:</Text>
          <Text>{description}</Text>
        </View>
          
        <View style={styles.section}>
          <Text style={styles.largeText}>Timings:</Text>
          <Text>{date}</Text>
          <Text>Doors Open: {doorsopening}</Text>
          <Text>Doors Close: {doorsclosing}</Text>
          <Text>Last Entry: {lastentry}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.largeText}>Venue Details:</Text>
          <Text>{location}, {postcode}</Text>
          <Text>{town}</Text>
        </View>

        <View style={styles.section}>
          <Button style={styles.section} title={"GET TICKETS"} onPress={() => Linking.openURL(link)} />
        </View>

        <View style={styles.section}>
          <Button style={styles.section} color={'red'} title={"REMOVE"} onPress={() => removeLikedGig(id)} />
        </View>
      </>
      )
}

const styles = StyleSheet.create({
  section: {
    margin: 20,
  },
  largeText: {
    fontSize: 18,
  },
});
