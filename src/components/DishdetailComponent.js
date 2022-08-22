import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

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

const DishDetail = (props) => {
    let {dishId} = useParams();
    console.log(dishId)
    const dish = props.dishes.filter((dish) => dish.id == dishId)[0]
    const comment = props.comments.filter((comment) => comment.dishId  == dishId)
    console.log(dish)
    if(dish != null){
        return(
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to={`/home`}>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to={`/menu`}>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{dish.name}</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish = {dish}/>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <b>Comments</b>
                        <RenderComments comments = {comment}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default DishDetail;