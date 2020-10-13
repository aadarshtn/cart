import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products: [
            {
                title: 'Xiaomi Redmi Note 7 Pro',
                price: 9999,
                qty: 1,
                img: 'https://i.pinimg.com/564x/11/d1/b8/11d1b8bfd6eba6d43595ab0f73812d33.jpg',
                id: 1
            },
            {
                title: 'Casio G7 Series Watch',
                price: 799,
                qty: 1,
                img: 'https://www.askmea2z.com/inventory_images/193.jpg',
                id: 2
            },
            {
                title: 'Acer Aspire 5 G2915 Laptop',
                price: 45999,
                qty: 1,
                img: 'https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=http://images.icecat.biz/img/gallery/76518349_0022300466.jpg&height=550&width=550',
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
getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
        count += product.qty;
    })
    return count;
}
getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.forEach((product) => {
        cartTotal = cartTotal + (product.qty * product.price);
    } )
    return cartTotal;
}

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar 
            count = { this.getCartCount() }
        />
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div className = "cartTotal">
            <b>TOTAL CART VALUE : </b>
            RS { this.getCartTotal() }.00
        </div>
      </div>
    );
  }
}

export default App;
