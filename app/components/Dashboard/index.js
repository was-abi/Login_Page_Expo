import React from "react";
import { View, Text} from "react-native";

class Dashboard extends React.Component {

	static navigationOptions = {
		header:null
	}
	render() {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Dashboard</Text>
			</View>
			);
	}
}
export default Dashboard