import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import SelectedDish from './DishdetailComponent';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedDish : null
        };
    }
    onDishSelect(dish){
        this.setState({selectedDish : dish})
    }
    renderDish(dish){
        if(dish != null){
            return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card tag="li" onClick={() => this.onDishSelect(dish)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>  
                <SelectedDish dish={this.state.selectedDish}></SelectedDish>
            </div>
        );
    }
}
export default Menu