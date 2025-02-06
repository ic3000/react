
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            dislikes: 0,
            totalRatings: 0,
            handleLike: () => {
                this.setState((prevState) => ({
                    likes: prevState.likes + 1,
                    totalRatings: prevState.totalRatings + 1
                }));
            },

            handleDislike: () => {
                this.setState((prevState) => ({
                    dislikes: prevState.dislikes + 1,
                    totalRatings: prevState.totalRatings + 1,

                }));
            }
        }
    }
    render() {
        return (
            <div className='content-rating'>
                <p>
                    The output, as shown in the provided screenshot,
                    will display the total number of ratings as 9 when
                    there are 5 likes and 4 dislikes.
                    Clicking on either the like or dislike button will
                    increment the total ratings accordingly.
                </p>
                <div className='rating-buttons'>
                    <button className="like-button" onClick={this.state.handleLike}>
                        Like ({this.state.likes})
                    </button>
                    <button className="dislike-button" onClick={this.state.handleDislike}>
                        Dislike ({this.state.dislikes})
                    </button>
                    <p>Total Ratings: {this.state.totalRatings}</p>
                </div>
            </div>
        );
    }
}

export default ContentRating;
