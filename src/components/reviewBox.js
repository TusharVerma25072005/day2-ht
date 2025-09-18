"use client"

import React, { useState } from 'react'
import Rating from '@mui/material/Rating'

const Menu = [
    {
        day: "Monday",
        items: [
            { name: "Breakfast", rating: 2.5 },
            { name: "Lunch", rating: 2.5 },
            { name: "Dinner", rating: 2.5 }
        ]
    },
    {
        day: "Tuesday",
        items: [
            { name: "Breakfast", rating: 2.5 },
            { name: "Lunch", rating: 2.5 },
            { name: "Dinner", rating: 2.5 }
        ]
    },
    {
        day: "Wednesday",
        items: [
            { name: "Breakfast", rating: 2.5 },
            { name: "Lunch", rating: 2.5 },
            { name: "Dinner", rating: 2.5 }
        ]
    },
    {
        day: "Thursday",
        items: [
            { name: "Breakfast", rating: 2.5 },
            { name: "Lunch", rating: 2.5 },
            { name: "Dinner", rating: 2.5 }
        ]
    },
    {
        day: "Friday",
        items: [
            { name: "Breakfast", rating: 2.5 },
            { name: "Lunch", rating: 2.5 },
            { name: "Dinner", rating: 2.5 }
        ]
    },
    {
        day: "Saturday",
        items: [
            { name: "Breakfast", rating: 2.5 },
            { name: "Lunch", rating: 2.5 },
            { name: "Dinner", rating: 2.5 }
        ]
    },
    {
        day: "Sunday",
        items: [
            { name: "Breakfast", rating: 2.5 },
            { name: "Lunch", rating: 2.5 },
            { name: "Dinner", rating: 2.5 }
        ]
    }
]

export default function ReviewForm({ setMenuReview }) {
    const [data, setData] = useState(Menu);

    const handleRatingChange = (dayIndex, itemIndex, newRating) => {
        const newData = [...data];
        newData[dayIndex].items[itemIndex].rating = newRating;
        setData(newData);
        setMenuReview(newData);
    };

    return (
        <div className="w-full p-4 bg-gray-50">
            {data.map((Day, dayIndex) => (
                <div key={Day.day} className="flex flex-col p-6 border-2 border-gray-200 rounded-lg shadow-lg my-4 bg-white hover:bg-gray-100 transition duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">{Day.day}</h3>
                    {Day.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between mb-4">
                            <span className="text-lg text-gray-600">{item.name}</span>
                            <Element
                                item={item.name}
                                rating={item.rating}
                                setRating={(val) => handleRatingChange(dayIndex, itemIndex, val)}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

const Element = ({ item, rating, setRating }) => {
    return (
        <div className="flex items-center space-x-2">
            <Rating
                name="half-rating"
                value={rating}
                precision={0.5}
                onChange={(event, newValue) => setRating(newValue)}
                className="text-yellow-500"
            />
        </div>
    );
};
