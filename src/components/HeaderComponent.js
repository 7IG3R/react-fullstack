import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component{
    render() {
        return(
            <>
            <Navbar className='navbar-dark'>
                <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            {/* As Jumbotron is no longer used by Bootstrap */}
            <div className="container-fluid p-5 jumbotron">
                <div className="container p-5">
                    <h1>Restorante Con Fusion</h1>
                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                </div>
            </div>
            </>
        );
    }
}

export default Header;