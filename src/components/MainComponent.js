import { Component, useEffect } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
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
                return <Home 
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                    />;
          };
        const LoadDish = ({match}) =>{
            return <DishDetail 
                dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10)[0])}
                comments = {this.state.comments.filter((comment) => comment.dishId  === parseInt(match.params.dishId,10))}
                />;
        }
        return(
            <div>
            <Header/>
            <Routes>
                <Route exact path="/home" element={LoadHome('Home')} />  
                <Route path="*" element={LoadHome('Home')} />
                <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
                <Route path='/menu/:dishId' element={<DishDetail dishes ={this.state.dishes} comments={this.state.comments}/>}></Route>
                <Route exact path='/contactus' element={<Contact/>} />
            </Routes>
            <Footer/>
            </div>
        )
    };

}
export default Main;
