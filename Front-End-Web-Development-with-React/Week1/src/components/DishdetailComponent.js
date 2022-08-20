import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };

    };
    convertDate(date){
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var date = date.split('T')
        var date = date[0].split('-')
        const month = monthNames[date[1]]
        const day = date[2]
        const year = date[0]
        const res = '' + month + ' ' + day + ' ' + year
        return res
    }
    render(){
        if(this.props.dish != null){
            {console.log(this.props.dish.comments)}
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <><br/>
                    {comment.comment}<br/><br/>
                    -- {comment.author} , {this.convertDate(comment.date)}<br/>
                    </>
                )
            })
            return(
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                            <CardTitle><b>{this.props.dish.name}</b></CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <b>Comments</b>
                        {comments}
                    </div>
                </div>
            )
        }
        else{
            
        }
    }
}

export default DishdetailComponent;