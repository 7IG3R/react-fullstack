import { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import About from './AboutComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';


// Creating a WithRouter with new functions as it is not supported in latest React Router Dom
const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
}

// Redux Function to map State as props
const mapStateToProps = (state) => {
    return{
        dishes: state.dishes,
        promotions: state.promotions,
        leaders: state.leaders,
        comments: state.comments
    }
}
class Main extends Component{
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
      super(props);
    }
    render(){
        // console.log(this.props);
        // const LoadHome = (arg1) => {
        //         return <Home 
        //             dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
        //             promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
        //             leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        //             />;
        //   };
        // const LoadDish = ({match}) =>{
        //     return <DishDetail 
        //         dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10)[0])}
        //         comments = {this.props.comments.filter((comment) => comment.dishId  === parseInt(match.params.dishId,10))}
        //         />;
        // }
        return(
            <div>
            <Header/>
            <Routes>
                <Route exact path="/home" element={<Home dishes = {this.props.dishes} leaders = {this.props.leaders} promotions = {this.props.promotions} />}/>
                <Route path="*" element={<Home dishes = {this.props.dishes} leaders = {this.props.leaders} promotions = {this.props.promotions} />}/>
                <Route exact path='/menu' element={<Menu dishes={this.props.dishes} />} />
                <Route exact path='/aboutus' element={<About leaders={this.props.leaders} />} />
                <Route path='/menu/:dishId' element={<DishDetail dishes ={this.props.dishes} comments={this.props.comments}/>}></Route>
                <Route exact path='/contactus' element={<Contact/>} />
            </Routes>
            <Footer/>
            </div>
        )
    };

}

// Redux way to wrap component so that it uses state with props
export default withRouter(connect(mapStateToProps)(Main));
