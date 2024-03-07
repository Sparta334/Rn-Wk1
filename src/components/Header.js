import React from "react";
import { StyleSheet, Text, View } from "react-native";
            
const Header = () =>{
            
	return(
							
		<View style={styles.headerStyle}>
			<Text style={styles.textStyle} > 
				呂秀蓮仔湯 
			</Text>
		</View>
											
	);
            
            
            
};
            
const styles = StyleSheet.create({
            
  headerStyle: {
  	backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    elevation: 4

  },

  textStyle:{
    fontSize: 20
  },
              
});

export default Header;