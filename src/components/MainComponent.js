import { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
class Main extends Component{
    
    constructor(props){
      super(props);
      this.state = {
        dishes : DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS
      };
    }
    render(){
        const LoadHome = (arg1) => {
            //posting arg1 as an example of whatever you are wanting to do.
                return <Home 
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                    />;
          };
        return(
            <div>
            <Header/>
            <Routes>
                <Route path="/home" element={LoadHome('Home')} />  
                <Route path="*" element={LoadHome('Home')} />
                <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
                <Route exact path='/contactus' element={<Contact/>} />
            </Routes>
            <Footer/>
            </div>
        )
    };

}
export default Main;
