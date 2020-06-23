import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, TouchableNativeFeedback } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

const screen = Dimensions.get('window')

class home extends Component {
    render() {
        const menuList = [
            {
                title: 'Strawberries',
                unit: '1 lb',
                price: '$2.45',
                img: require('../assets/img/strawbery.png'),
                color: '#FFE3E5',
                height: screen.width * .32,
                description: 'mango is a juicy stone fruit (drupe) produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.'
            },
            {
                title: 'Mango',
                unit: 'each',
                price: '$1.01',
                img: require('../assets/img/mango.png'),
                color: '#FFE08E',
                height: screen.width * .25,
                description: 'mango is a juicy stone fruit (drupe) produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.'


            },
            {
                title: 'Blueberries',
                unit: '1 lb',
                price: '$4.6',
                img: require('../assets/img/blueberies.png'),
                color: '#E4E4FE',
                height: screen.width * .27,
                description: 'mango is a juicy stone fruit (drupe) produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.'

            },
            {
                title: 'Dragon Fruit',
                unit: '1 lb',
                price: '$5.23',
                img: require('../assets/img/dragon.png'),
                color: '#FFEEFE',
                height: screen.width * .26,
                description: 'mango is a juicy stone fruit (drupe) produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.'

            },
            {
                title: 'Blueberries',
                unit: '1 lb',
                price: '$4.6',
                img: require('../assets/img/blueberies.png'),
                color: '#E4E4FE',
                height: screen.width * .27,
                description: 'mango is a juicy stone fruit (drupe) produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.'


            },
            {
                title: 'Dragon Fruit',
                unit: '1 lb',
                price: '$5.23',
                img: require('../assets/img/dragon.png'),
                color: '#FFEEFE',
                height: screen.width * .26,
                description: 'mango is a juicy stone fruit (drupe) produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.'

            }
        ]
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <View style={[styles.btnBox, styles.btnBack]}>
                            <Image source={require('../assets/img/back.png')} style={styles.imgBtn} resizeMode={'contain'} />
                        </View>
                    </View>
                    <View>
                        <View style={styles.btnBox}>
                            <Image source={require('../assets/img/menu.png')} style={styles.imgBtnMenu} resizeMode={'contain'} />
                        </View>
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.containerSearch}>
                        <Text style={styles.headText}>Fruits and berries</Text>
                        <View style={styles.boxSearch}>
                            <Icon name={'ios-search'} size={28} color={'#000000'} />
                            <Text style={styles.txtSearch}>Search</Text>
                        </View>
                    </View>
                    <View style={styles.containerMenu}>
                        <View style={{ margin: 5 }}>
                            {
                                menuList.filter((o, i) => {
                                    return i % 2 == 0
                                }).map((item, index) =>
                                    <ItemMenu key={index}
                                        title={item.title}
                                        price={item.price}
                                        unit={item.unit}
                                        img={item.img}
                                        color={item.color}
                                        height={item.height}
                                        onPress={() => this.props.navigation.navigate('AddFruit', { data: item })}
                                    />
                                )
                            }
                        </View>

                        <View style={{ margin: 5 }}>
                            {
                                menuList.filter((o, i) => {
                                    return i % 2 == 1
                                }).map((item, index) =>
                                    <ItemMenu key={index}
                                        title={item.title}
                                        price={item.price}
                                        unit={item.unit}
                                        img={item.img}
                                        color={item.color}
                                        height={item.height}
                                        onPress={() => this.props.navigation.navigate('AddFruit', { data: item })}
                                    />
                                )
                            }
                        </View>

                    </View>
                </ScrollView>
            </View>
        )
    }
}

function ItemMenu({ onPress, title, unit, price, img, color, height }) {
    return (
        <View style={{ overflow: 'hidden', borderRadius: 25 }}>
            <TouchableNativeFeedback onPress={onPress}>
                <View style={[styles.card, { backgroundColor: color }]}>
                    <View style={styles.cardHeader}>
                        <View style={styles.descrip}>
                            <Text style={styles.title}>{title}</Text>
                            <View>
                                {
                                    unit == 'each' ?
                                        <View style={styles.each}>
                                            <Text style={[styles.price, { marginRight: 4 }]}>{price}</Text>
                                            <Text style={styles.label1}>{unit}</Text>
                                        </View>
                                        :
                                        <View>
                                            <Text style={styles.label1}>{unit}</Text>
                                            <Text style={styles.price}>{price}</Text>
                                        </View>
                                }

                            </View>
                        </View>
                        <View style={{ marginTop: 3 }}>
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                        </View>
                    </View>
                    <View style={styles.cardBody}>
                        <Image source={img}
                            style={[styles.imgFruit, { height: height }]}
                            resizeMode={'contain'}
                        />
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        width: '100%',
        height: 56,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnBox: {
        height: 42,
        width: 42,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnBack: {
        backgroundColor: '#F4F4F4',
        borderRadius: 14
    },
    btnMenu: {
        height: 42,
        width: 42,
    },
    imgBtn: {
        height: 14,
        width: 14
    },
    imgBtnMenu: {
        width: 32
    },
    containerSearch: {
        marginTop: 32,
        paddingHorizontal: 20
    },
    headText: {
        fontFamily: 'quicksand',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#2D2A2A'
    },
    boxSearch: {
        backgroundColor: '#F8F8F8',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        paddingHorizontal: 28,
        paddingVertical: 16,
        marginTop: 18
    },
    txtSearch: {
        fontFamily: 'quicksand',
        fontSize: 20,
        color: '#CEC9C9',
        marginLeft: 24
    },
    containerMenu: {
        padding: 10,
        marginVertical: 18,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    card: {
        backgroundColor: '#FFE3E5',
        borderRadius: 25,
        width: (screen.width * .5) - 30,
        padding: 17,
        margin: 5,
        marginVertical: 10
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    dot: {
        height: 5,
        width: 5,
        borderRadius: 100,
        backgroundColor: '#000000',
        opacity: .15,
        margin: 1.2
    },
    descrip: {
        flex: 1
    },
    title: {
        fontFamily: 'quicksand',
        fontWeight: 'bold',
        fontSize: 14
    },
    label1: {
        fontFamily: 'quicksand',
        fontSize: 12
    },
    each: {
        flexDirection: 'row', alignItems: 'center'
    },
    price: {
        fontFamily: 'quicksand',
        fontWeight: 'bold',
        fontSize: 14
    },
    cardBody: {
        flex: 1
    },
    imgFruit: {
        width: screen.width * .3,
        height: screen.width * .3,
    }
})

export default home
