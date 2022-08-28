import { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchComments, fetchDishes, fetchLeaders, fetchPromos, postComment, postFeedback } from '../redux/ActionCreators';
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

const mapDispatchToProps = (dispatch) => ({
  postComment : (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback : (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),
  fetchDishes : () => {dispatch(fetchDishes())},
  fetchLeaders : () => {dispatch(fetchLeaders())},
  fetchComments : () => {dispatch(fetchComments())},
  fetchPromos : () => {dispatch(fetchPromos())},
  resetFeedbackForm : () => {dispatch(actions.reset('feedback'))}
})
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
    componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
      this.props.fetchLeaders();
    }
    render(){
        return(
            <div>
            <Header/>
            <Routes location={this.props.location}>
                <Route exact path="/home" element={ <Home dishes = {this.props.dishes.dishes} 
                                               leaders = {this.props.leaders.leaders} 
                                               leadersLoading = {this.props.leaders.isLoading}
                                               leadersErrMess = {this.props.leaders.errMess}
                                               promotions = {this.props.promotions.promotions}
                                               promosLoading = {this.props.promotions.isLoading}
                                               promosErrMess = {this.props.promotions.errMess}
                                               dishesLoading = {this.props.dishes.isLoading}
                                               dishesErrMess = {this.props.dishes.errMess} /> } />

                <Route path="*" element={<Home dishes = {this.props.dishes.dishes} 
                                               leaders = {this.props.leaders.leaders} 
                                               leadersLoading = {this.props.leaders.isLoading}
                                               leadersErrMess = {this.props.leaders.errMess}
                                               promotions = {this.props.promotions.promotions}
                                               promosLoading = {this.props.promotions.isLoading}
                                               promosErrMess = {this.props.promotions.errMess}
                                               dishesLoading = {this.props.dishes.isLoading}
                                               dishesErrMess = {this.props.dishes.errMess} /> } />

                <Route exact path='/menu' element={ <Menu dishes={this.props.dishes.dishes}
                                                          dishesLoading = {this.props.dishes.isLoading}
                                                          dishesErrMess = {this.props.dishes.errMess} /> } />

                <Route exact path='/aboutus' element={ <About leaders = {this.props.leaders.leaders} 
                                               leadersLoading = {this.props.leaders.isLoading}
                                               leadersErrMess = {this.props.leaders.errMess} /> } />

                <Route path='/menu/:dishId' element={ <DishDetail dishes ={this.props.dishes.dishes} 
                                                                 postComment={this.props.postComment}  
                                                                 comments={this.props.comments.comments}
                                                                 dishesLoading = {this.props.dishes.isLoading}
                                                                 dishesErrMess = {this.props.dishes.errMess} 
                                                                 commentsErrMess = {this.props.comments.errMess} />} />

                <Route exact path='/contactus' element={ <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}   /> } />
            </Routes>
            <Footer/>
            </div>
        )
    };

}

// Redux way to wrap component so that it uses state with props
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
