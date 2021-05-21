import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm'


const DishDetail = props => {
    return (
        <div>
            <Card style={{margin:"35px"}}>
                <CardImg  top src={props.dish.image} alt={props.dish.name}/>
                <CardBody style={{textAlign:"left"}}>
                    <CardTitle><h2>{props.dish.name}</h2></CardTitle>
                        <CardText>
                            {props.dish.description}
                        </CardText>
                        <CardText>
                            {props.dish.price}/-
                            <hr/>
                            <LoadComments comments={props.comments} />
                            <hr/>
                            <CommentForm dishId={props.dish.id}/> 
                        </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail
