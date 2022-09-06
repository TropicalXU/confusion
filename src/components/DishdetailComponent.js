import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

 
    function RenderDish({dish}) {
        if(dish != null) {
            return (
               
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                        </CardBody>
                    </Card>
                </div>

            );
        }else {
            return (
                <div></div>
            );
        }
    }
    
    function RenderComments({comments}) {
        const comms = comments.map(comment => {
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- <i>{comment.author}</i>, &nbsp; 
                    {comment.date}
                    </p>
                </li>
            );
        });
        if(comments != null) {
            return( 
                <div className='col-12 col-md-5 m-1'>
                   <h4>Comments</h4>
                   <ul className='list-unstyled'>
                      {comms}
                   </ul>
                </div>
            );
        }else {
            return(<div></div>);
        }
    }

    const DishDetail = (props) => {
        const dish = props.dish;
        if(dish != null) {
            return(
                <div className='container'>
                    <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                    <div className='row my-3'>
                       <RenderDish dish={props.dish} />
                       <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        } else {
            return(<div></div>);
        }

    }

export default DishDetail;