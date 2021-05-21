import React from 'react'
import dateFormate from 'dateformat'

const LoadComments = props => {
    return (
        props.comments.map(comment =>{
            return(
                <div key={comment.id}>
                    <h4>{comment.author}</h4>
                    <p>{comment.comment}</p>
                    <p>{dateFormate(comment.date, "dddd, mmmm d, yyyy, h:MM TT")}</p>
                    <br/>
                </div>
            )
        })
       
    );
}

export default LoadComments
