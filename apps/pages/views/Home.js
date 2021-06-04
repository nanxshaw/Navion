import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Json from '../../json/Json';
import StateVar from '../../providers/stateVar/StateVar';
import Styles from '../../styles/Styles';

const styles = Styles;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_data:[],
        };
    }

    componentDidMount = () => {
        let list_data = Json.list_data;
        this.setState({
            list_data
        })
    }

    render() {
        const {list_data} = this.state;
        return (
            <View style={{flex:1}}>
                <FlatList 
                    data={list_data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <View style={styles.list_data}>
                            <View style={styles.profile_horizontal}>
                                <Image style={styles.profile_img} resizeMethod="resize" source={{uri:item.user.image}}  />
                                <Text style={styles.profile_text}>{StateVar.textLimit(item.user.name,30)}</Text>
                            </View>
                            <Image resizeMethod="resize" resizeMode="cover" source={{uri:item.image}} style={styles.list_img} />
                            <View style={styles.list_box}>
                                <Text style={styles.text}>{StateVar.textLimit(item.title,30)}</Text>
                                <Text style={styles.desc}>{StateVar.textLimit(item.desc,100)}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}

export default Home;
