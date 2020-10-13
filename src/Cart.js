import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor () {
        super();
        this.state = {
            products: [
                {
                    title: 'Xiaomi Redmi Note 7 Pro',
                    price: 9999,
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    title: 'Casio G7 Series Watch',
                    price: 799,
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    title: 'Acer Aspire 5 G2915 Laptop',
                    price: 45999,
                    qty: 1,
                    img: '',
                    id : 3
                }
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    handleIncreaseQuantity = (product) => {
        console.log('Hey Increase The Qty of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        
        products[index].qty += 1;

        this.setState({
            products: products
        })
    }
    handleDecreaseQuantity = (product) => {
        console.log('Decrease The Qty Of ', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){
            return;
        }else{
            products[index].qty -= 1;
        }

        this.setState({
            products
        })
    }
    handleDeleteProduct = (productId) => {
        // console.log('Delete :', productId);
        const { products } = this.state;
        const items = products.filter((item) =>  item.id !== productId );

        this.setState({
            products: items 
        })
        
    }

    render () {
        const { products } = this.state;
        return (
            <div className="cart">
                { products.map((product) => {
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id} 
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            onDecreaseQuantity = {this.handleDecreaseQuantity}
                            onDeleteProduct = {this.handleDeleteProduct}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;