import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function convertDate(date){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    date = date.split('T')
    date = date[0].split('-')
    const month = monthNames[date[1]]
    const day = date[2]
    const year = date[0]
    const res = '' + month + ' ' + day + ' ' + year
    return res
}

function RenderComments({comments}){
    return comments.map((comment) => {
        return (
            <>
            <br/>
            {comment.comment}
            <br/><br/>
            -- {comment.author} , {convertDate(comment.date)}<br/>
            </>
        )
    })
}

function RenderDish({dish}){
    return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
            <CardTitle><b>{dish.name}</b></CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

const DishDetail = ({dish}) => {
    if(dish != null){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish = {dish}/>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <b>Comments</b>
                        <RenderComments comments = {dish.comments}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default DishDetail;