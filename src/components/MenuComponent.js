import React from 'react';
import '../MenuComponent.css';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

    function RenderMenuItem({dish, onClick}) {
        return(
            <Card>
               <CardImg width='100%' src={dish.image} alt={dish.name} />
               <CardImgOverlay>
                  <CardTitle className='text-center'>{dish.name.toUpperCase()}</CardTitle>
               </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return(
              <div key={dish.id} className='col-12 col-md-5 m-1'>
                <RenderMenuItem dish={dish} onClick={props.onClick} />
              </div>
            );
      });

      return (
          <div className='container'>
              <div className='row mt-3 menu'>
                      {menu}
              </div>
          </div>
      );
    }


export default Menu;