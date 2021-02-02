import React, { Component } from 'react';
//importing navbar from reactstrap
import {Navbar, NavbarBrand} from 'reactstrap';
//importing Menu Component from Components folder
import Menu from './MenuComponent';
import Contact from './ContactComponent';
//import Home Component
import Home from './HomeComponent';
//importing dishes from shared folder
import DishDetail from './DishdetailComponent';
import  About  from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

//importing router applications
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

   constructor(props) {
     super(props);    
     this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
     };
   }

  

render() {

  //Homepage Function
  const HomePage = () => {
      return(
        
          <Home 
                dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}
                leader = {this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
  }

   const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

  return (
    <div>
       {/*to render the menu on the screen*/}
       <Header />
          <Switch>
              <Route path='/home' component = {HomePage} />
              <Route exact path='/menu' component = {() => <Menu dishes={this.state.dishes} />}/>   
                         /*function is used in order to pass the props*/
              <Route exact path='/contactus' component = {Contact}/>  
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/aboutus' component = {()=><About leaders = {
this.state.leaders}/>} />  
              <Redirect to="/home" />
                         /*if path does not match to home or menu component then it will redirect to home page*/
          </Switch>
       <Footer />
    </div>
  );
}
}

export default Main;
