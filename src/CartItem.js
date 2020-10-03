import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            title: 'Xiaomi Redmi Note 7 Pro',
            price: 9999,
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        console.log(this.state);
        // setState Form 1 - Object Form
        // this.setState({
        //     qty: this.state.qty + 1
        // })

        // setState form 2 - Function form - If prevState Required
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        })
    }

    decreaseQuantity = () => {
        // setState Form 2
        this.setState(() => {
            return {
                qty: this.state.qty - 1
            }
        })
    }

    render () {
        const { title, price, qty } = this.state;
        return (
            <div className = "cart-item">
                <div className = "left-block">
                    <img style = {styles.image}/>
                </div>
                <div className = "right-block">
                    <div style = { { fontSize: 30 } }>{ title }</div>
                    <div style = { { color: '#777' } }>Rs { price }</div>
                    <div style = { { color: '#777' } }>Qty: { qty }</div>
                    <div className = "cart-item-actions">
                        <img 
                            alt = "increase" 
                            className = "action-icons" 
                            src = "https://www.flaticon.com/svg/static/icons/svg/992/992651.svg" 
                            onClick={ this.increaseQuantity }
                        />
                        <img
                            alt = "increase" 
                            className = "action-icons" 
                            src = "https://www.flaticon.com/svg/static/icons/svg/992/992683.svg" 
                            onClick = { this.decreaseQuantity }
                        />    
                        <img 
                            alt = "increase" 
                            className = "action-icons" 
                            src = "https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 100,
        width: 100,
        background: '#ccc',
        borderRadius: 5
    },

}

export default CartItem;