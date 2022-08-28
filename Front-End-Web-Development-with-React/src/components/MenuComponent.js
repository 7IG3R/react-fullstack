import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';


function RenderMenuItem({dish,onClick}){
    return(
        <Card tag="li">
            <Link to ={`/menu/` + dish.id}>
                <CardImg width='100%' src={baseUrl + dish.image} alt={dish.name}></CardImg>
                <CardImgOverlay className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    console.log(props);
    if(props.dishesLoading){
        return( 
           <div className='row'>
              <div className='col-12'>
                 <Loading/>
              </div>
           </div>
        );
      }
    else if(props.dishesErrMess) {
        return( 
           <div className='row'>
              <div className='col-12'>
                 <h4>{props.dishesErrMess}</h4>
              </div>
           </div>
        );
    }
    else{
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish = {dish} onClick = {props.onClick}/>
            </div>
        )
    });
    return (
        <div className="container">
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to={`/home`}>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><Link to={`/menu`}>Menu</Link></BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>Menu</h3>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>  
        </div>
    );
    }
}

export default Menu