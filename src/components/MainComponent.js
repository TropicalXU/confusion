import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchComments, fetchDishes, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

//dispatch(thunk) needs to be dispatched into mapDispatchToProps so that dispatch dishes becomes avail - for main comp to make use of in lifecycle method(componentDidMount())
const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment)),

    fetchDishes: () => {
        dispatch(fetchDishes())//call to fetchDishes(thunk)func that has been imported
    },

    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},

    fetchComments: () => {
        dispatch(fetchComments())
    },

    fetchPromos: () => {
        dispatch(fetchPromos())
    }
});

class Main extends Component {

    constructor(props) {
        super(props);

    }

    //whatever is in this lifecycle method will be called when this comp is mounted to the view
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    render() {

        const HomePage = () => {
            return(
                <Home //dish={calling on props.dishes.dishes from dishes.js in Redux folder}
                    dish={ this.props.dishes.dishes.filter( (dish)=>dish.featured )[0] }
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMsg={this.props.dishes.errMsg}
                    promotion={this.props.promotions.promotions.filter( (promotion)=>promotion.featured )[0] }
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMsg={this.props.promotions.errMsg}
                    leader={this.props.leaders.filter( (leader)=>leader.featured )[0] }
                />
            );
        };

        const DishWithId = ({match}) => {
            return(
                <DishDetail 
                dish={this.props.dishes.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId, 10))[0] } 
                isLoading={this.props.dishes.isLoading}
                errMsg={this.props.dishes.errMsg}
                comments={this.props.comments.comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
                commentsErrMsg={this.props.comments.errMsg}
                addComment={this.props.addComment} 
                
                
                />
            );
        };

        const AboutUs = () => {
            return(
                <About leaders={this.props.leaders} />
            )
        }



        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={ HomePage } />
                    <Route exact path="/aboutus" component={ AboutUs } />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/> }/>
                    <Route path="/menu/:dishId" component={ DishWithId } />
                    <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div> 
        );

    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));