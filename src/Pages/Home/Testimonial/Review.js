import React from 'react';

const Review = ({ review }) => {
    const { name, img, description, location } = review;
    return (
        <div>
            <div className="card  shadow-xl">
                <div className="card-body">
                    <p>{description}</p>
                    <div className="flex mt-6">
                        <div className="avatar">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-6">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className="text-gray-600">{name}</div>
                            <div className="text-gray-400">{location}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;