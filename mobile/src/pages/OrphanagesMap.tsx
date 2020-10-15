import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import mapMarker from '../images/map-marker.png';
import { useNavigation } from '@react-navigation/native';

export default function OrphanageMap() {
    const navegation = useNavigation();
    
    function handleNavegatoToOrphanage(){
        navegation.navigate('OrphanageDetails');
    }


    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -25.487444,
            longitude: -54.5759393,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008
          }}
        >
          <Marker
            calloutAnchor={{
              x: 2.7,
              y: 0.8
            }}
            icon={mapMarker}
            coordinate={{
              latitude: -25.487444,
              longitude: -54.5759393
            }}
          >
            <Callout tooltip={true} onPress={handleNavegatoToOrphanage}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>LAr wrt</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
  
        <View style={styles.footer}>
          <Text style={styles.footerText}> 2aaa</Text>
          <TouchableOpacity style={styles.createOrphanageButton} onPress={() => { }}>
            <Feather name="plus" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },
    calloutText: {
      fontFamily: 'Nunito_700Bold',
      color: '#0089a5',
      fontSize: 14
    },
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 3
    },
    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: '#8FA7B3'
    },
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  