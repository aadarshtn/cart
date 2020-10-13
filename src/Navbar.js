import React from 'react';

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img src = "https://www.flaticon.com/svg/static/icons/svg/1077/1077999.svg" alt = "cart-icon" style={styles.cartIcon}></img>
                <span style={styles.cartCount}><code>{ props.count }</code></span>
            </div>
        </div>
    );
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative',
      marginRight: 10
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
};


export default Navbar;