import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products: [],
        loading: true
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
}

componentDidMount() {
    firebase
        .firestore()
        .collection('products')
        .get()
        .then((snapshot) => {
            // snapshot.docs.map((doc) => {
            //     console.log(doc.data());
            // })
            const products = snapshot.docs.map((doc) => {
                const data = doc.data();
                data['key'] = doc.id;
                return data;
            })
            this.setState({
                products,
                loading: false
            })
        });
        
        

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
    const { products,loading } = this.state;
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
        { loading && <h1>Poducts Loading...</h1> }
        <div className = "cartTotal">
            <b>TOTAL CART VALUE : </b>
            RS { this.getCartTotal() }.00
        </div>
      </div>
    );
  }
}

export default App;
