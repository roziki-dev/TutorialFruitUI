import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, StatusBar, Dimensions, TouchableNativeFeedback } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
const screen = Dimensions.get('window')

class AddFruit extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { data } = this.props.route.params
        console.log(data);

        return (
            <View style={[styles.conntainer, { backgroundColor: data.color }]}>
                <StatusBar backgroundColor={data.color} barStyle={'dark-content'} />
                <View style={styles.header}>
                    <View>
                        <TouchableNativeFeedback onPress={() => this.props.navigation.goBack()}>
                            <View style={[styles.btnBox, styles.btnBack]}>
                                <Image source={require('../assets/img/back.png')} style={styles.imgBtn} resizeMode={'contain'} />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View>
                        <View style={styles.btnBox}>
                            <Image source={require('../assets/img/menu.png')} style={styles.imgBtnMenu} resizeMode={'contain'} />
                        </View>
                    </View>
                </View>
                <View style={styles.containerHeader}>
                    <View style={styles.boxSlider}>
                        <Image source={data.img}
                            style={styles.imgHeader}
                            resizeMode={'contain'}
                        />
                        <View style={styles.dotContainer}>
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                        </View>
                    </View>
                </View>
                <View style={styles.description}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.unit}>{data.unit == 'each' ? '1 ' + data.unit : data.unit}</Text>
                        <View style={styles.containProduc}>
                            <View style={styles.stapperContainer}>
                                <View style={styles.removeContaint}>
                                    <Icon name={'ios-remove'} color={styles.remove.color} size={24} />
                                </View>
                                <View style={styles.qtyContaint}>
                                    <Text style={styles.qty}>1</Text>
                                </View>
                                <View style={styles.addContaint}>
                                    <Icon name={'ios-add'} color={styles.add.color} size={24} />
                                </View>
                            </View>
                            <Text style={styles.price}>{data.price}</Text>
                        </View>

                        <Text style={styles.pdesc}>Product Description</Text>
                        <Text style={styles.desc}>{data.description}</Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.loveContain}>
                            <Image source={require('../assets/img/love.png')}
                                style={styles.love}
                                resizeMode={'contain'}
                            />
                        </View>

                        <View style={styles.btnAddtocart}>
                            <Text style={styles.addCart}>Add to cart</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conntainer: {
        flex: 1,
        backgroundColor: '#FFE08E'
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
    containerHeader: {
        height: screen.height * .3
    },
    boxSlider: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgHeader: {
        height: (screen.height * .3) * .8,
        width: (screen.height * .3)
    },
    dotContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 100,
        backgroundColor: '#000000',
        opacity: .15,
        margin: 2.5
    },
    description: {
        flex: 1,
        padding: 28,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff'
    },
    title: {
        fontFamily: 'quicksand',
        fontWeight: 'bold',
        fontSize: 42,
        color: '#3F3D3D'
    },
    unit: {
        fontFamily: 'quicksand',
        fontSize: 18,
        color: '#3F3D3D'
    },
    price: {
        fontFamily: 'quicksand',
        fontWeight: 'bold',
        fontSize: 38,
        color: '#3F3D3D'
    },
    containProduc: {
        marginVertical: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    stapperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderRadius: 14,
        padding: 8,
        paddingVertical: 5

    },
    remove: {
        color: '#5E5858',
    },
    qty: {
        color: '#3F3D3D',
        fontFamily: 'quicksand',
        fontSize: 24,
        fontWeight: 'bold'
    },
    add: {
        color: '#5E5858'
    },
    removeContaint: {
        width: 38,
        alignItems: 'center'
    },
    qtyContaint: {
        width: 52,
        alignItems: 'center'
    },
    addContaint: {
        width: 38,
        alignItems: 'center'
    },
    pdesc: {
        fontFamily: 'quicksand',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#3F3D3D'
    },
    desc: {
        marginTop: 8,
        fontFamily: 'quicksand',
        fontSize: 14,
        lineHeight: 17,
        color: '#3F3D3D'
    },
    footer: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center'
    },
    loveContain: {
        height: 65,
        width: 65,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#FFCC3F',
        justifyContent: 'center', alignItems: 'center'
    },
    love: {
        height: 32,
        width: 32
    },
    btnAddtocart: {
        height: 65,
        flex: 1,
        marginLeft: 18,
        backgroundColor: '#FFCC3F',
        justifyContent: 'center',
        borderRadius: 16
    },
    addCart: {
        textAlign: 'center',
        fontFamily: 'quicksand',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#272626'
    }
})

export default AddFruit
