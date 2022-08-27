/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isModalOpen: false
      }
      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   toggleModal() {
      this.setState({ isModalOpen: !this.state.isModalOpen });
   }
   handleSubmit(values) {
      this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
      this.toggleModal();
   }
   render() {
      return(
         <div className="container">
            <div className="row mt-4 mb-4">
               <Button outline onClick={this.toggleModal}>
                  <span className="fa fa-pencil fa-lg"></span> Submit Comment
               </Button>                       
               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                  <ModalBody>
                     <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                           <Col md={12}>
                              <Label htmlFor="rating">Rating</Label>
                              <Control.select model=".rating" name="rating" className="form-control">
                                 <option>1</option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                                 <option>5</option>
                              </Control.select>
                           </Col>                          
                        </Row>
                        <Row className="form-group">
                           <Col md={12}>
                              <Label htmlFor="author">Your Name</Label>
                              <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control" 
                               validators={{
                                  required, minLength: minLength(3), maxLength: maxLength(15)
                               }}
                              />    
                              <Errors
                                 className="text-danger"
                                 model=".author"
                                 show="touched"
                                 messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                 }}
                              />                            
                           </Col>
                        </Row>
                        <Row className="form-group">
                           <Col md={12}>
                              <Label htmlFor="comment">Comment</Label>
                              <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />                           
                           </Col>
                        </Row>
                        <Row className="form-group">
                           <Col md={12}>
                              <Button type="submit" color="primary">
                                 Submit
                              </Button>
                           </Col>
                        </Row>
                     </LocalForm>
                  </ModalBody>
               </Modal>
            </div>
        </div>
      );
   }
}

function convertDate(date){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    date = date.split('T')
    date = date[0].split('-')
    const month = monthNames[parseInt(date[1])-1]
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
   const dish = props.dishes.filter((dish) => dish.id == dishId)[0]
   const comment = props.comments.filter((comment) => comment.dishId  == dishId)
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
    else if(dish != null){
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
                        <CommentForm addComment = {props.addComment} dishId={dishId}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default DishDetail;