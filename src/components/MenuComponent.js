import React, { Component } from 'react';
import '../MenuComponent.css';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
           selectedDish: null
        }
    }
    componentDidMount() {

    }
    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    render() {
        const menu = this.props.dishes.map((dish => {
              return(
                <div key={dish.id} className='col-12 col-md-5 m-2'>
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle className='text-center'>{dish.name.toUpperCase()}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
              );
        }));

        return (
            <div className='container'>
                <div className='row mt-3 menu'>
                        {menu}
                </div>
               
                    <DishDetail dish={this.state.selectedDish}/>
              
            </div>
        );
    }

}

export default Menu;