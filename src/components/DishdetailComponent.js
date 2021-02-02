import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderComments({comments}) {

       const comm = comments.map(comments=>{
          return(

             <li key={comments.id}>
                <p>{comments.comment}</p>
                <p>-- {comments.author}, 
                       {new Intl.DateTimeFormat('en-US', {
                       day: '2-digit',
                       month: 'short',
                       year: 'numeric'

                  }).format(new Date(Date.parse(comments.date)))}
                </p>
             </li>
          )
       })

       return (

            <div className='col-12 col-md-3 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                   {comm}
                </ul>
            </div>

        );
    }

    function RenderDish({dish}) {
            if(dish!=null)
                {
                    return (
                       <div className="col-12 col-md-5 m-1">
                        <Card >
                          <CardImg width="100%" top src={dish.image} alt={dish.name} />
                           <CardBody>
                              <CardTitle>{dish.name}</CardTitle>
                              <CardText>{dish.description}</CardText>
                           </CardBody>
                        </Card> 
                       </div>
                   );
                 }
                 else 
                   return(
                      <div></div>
                   );
        }

     
     const DishDetail = (props) => {

           const dish = props.dish

           if(dish==null) {
               return(
                   <div></div>
               );
            }
     
            const dishId = <RenderDish dish = {props.dish} />
            const commentDish = <RenderComments comments = {props.comments} />

            return(
               <div className = "container">
                 <div className="row">

                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>

                     <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>   

                    <div className="row">
                         <div className="col-12 col-md-5 m-1">
                               {dishId}
                         </div>
                         <div className="col-12 col-md-5 m-1">
                              {commentDish}
                         </div>
                   </div>

                </div>
              </div>
            );

     }



export default DishDetail;
