import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {
 

    renderDish(dish) {
        if(dish != null) {
            return (
               
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>
                            {this.props.dish.description}
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
    
    renderComments(comments) {
        const comms = comments.map(comment => {
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- <i>{comment.author}</i>, &nbsp;
                      {new Intl.DateTimeFormat('en-US',
                      {
                      year:'numeric',
                      month:'long',
                      day:'2-digit'
                      }).format(new Date(comment.date))}
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

    render() {
        const dish = this.props.dish;

        if(dish != null) {
            return(
                <div className='row my-3'>
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                </div>
            );
        } else {
            return(<div></div>);
        }

    }
}

export default DishDetail;