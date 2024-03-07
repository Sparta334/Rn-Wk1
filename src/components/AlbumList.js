import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import albumData from "../json/albumData.json"
            
const AlbumList = () =>{
            
  return(
            
    <ScrollView>
      <View style={styles.cardSectionStyle} >
				<View style={[styles.thumbnailContainerStyle ,styles.cardSectionStyle]}>
					<Image style={styles.thumbnailStyle} source={{uri:albumData[0].url}} />
					<View style={styles.headersContextStyle}>
						<Text style={styles.TextStyle}>{albumData[0].title}</Text>
						<Text style={styles.subTextStyle}>{albumData[0].artist}</Text>
					</View>
				</View>
				<View style={styles.cardSectionStyle}>
					<Image style={styles.imageStyle} source={{uri:albumData[0].image}} />
		
				</View>
			</View>


			<View style={styles.cardSectionStyle} >
				<View style={[styles.thumbnailContainerStyle ,styles.cardSectionStyle]}>
					<Image style={styles.thumbnailStyle} source={{uri:albumData[1].url}} />
					<View style={styles.headersContextStyle}>
						<Text style={styles.TextStyle}>{albumData[1].title}</Text>
						<Text style={styles.subTextStyle}>{albumData[1].artist}</Text>
					</View>
				</View>
				<View style={styles.cardSectionStyle}>
					<Image style={styles.imageStyle} source={{uri:albumData[1].image}} />
		
				</View>
			</View>

			<View style={styles.cardSectionStyle} >
				<View style={[styles.thumbnailContainerStyle ,styles.cardSectionStyle]}>
					<Image style={styles.thumbnailStyle} source={{uri:albumData[2].url}} />
					<View style={styles.headersContextStyle}>
						<Text style={styles.TextStyle}>{albumData[2].title}</Text>
						<Text style={styles.subTextStyle}>{albumData[2].artist}</Text>
					</View>
				</View>
				<View style={styles.cardSectionStyle}>
					<Image style={styles.imageStyle} source={{uri:albumData[2].image}} />
		
				</View>
			</View>

			<View style={styles.cardSectionStyle} >
				<View style={[styles.thumbnailContainerStyle ,styles.cardSectionStyle]}>
					<Image style={styles.thumbnailStyle} source={{uri:albumData[3].url}} />
					<View style={styles.headersContextStyle}>
						<Text style={styles.TextStyle}>{albumData[3].title}</Text>
						<Text style={styles.subTextStyle}>{albumData[3].artist}</Text>
					</View>
				</View>
				<View style={styles.cardSectionStyle}>
					<Image style={styles.imageStyle} source={{uri:albumData[3].image}} />
		
				</View>
			</View>

			<View style={styles.cardSectionStyle} >
				<View style={[styles.thumbnailContainerStyle ,styles.cardSectionStyle]}>
					<Image style={styles.thumbnailStyle} source={{uri:albumData[4].url}} />
					<View style={styles.headersContextStyle}>
						<Text style={styles.TextStyle}>{albumData[4].title}</Text>
						<Text style={styles.subTextStyle}>{albumData[4].artist}</Text>
					</View>
				</View>
				<View style={styles.cardSectionStyle}>
					<Image style={styles.imageStyle} source={{uri:albumData[4].image}} />
		
				</View>
			</View>

    </ScrollView>
                    
  );         
    
	
};
            
const styles = StyleSheet.create({
            
  cardSectionStyle: {
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderBottomWidth: 1,
		fontWeight: 'bold',
  },

	thumbnailContainerStyle: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},

	thumbnailStyle: {
		height: 50,
		width: 50,
		borderRadius:15,
	},

	headersContextStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},

	imageStyle: {
		height: 300,
		width: null,
		borderRadius:15,
	},

	TextStyle: {

		fontSize:20,
		paddingLeft: 10,

	},

	subTextStyle: {

		fontSize:15,
		paddingLeft: 10,

	}
              
});

export default AlbumList;