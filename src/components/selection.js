"use client"
import { useState, useEffect } from "react"
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';

const breakfastv = [
    { name: "vegitem 1", pick: false },
    { name: "vegitem 2", pick: false },
    { name: "vegitem 3", pick: false },
    { name: "vegitem 4", pick: false },
    { name: "vegitem 5", pick: false },
    { name: "vegitem 6", pick: false },
    { name: "vegitem 7", pick: false },
    { name: "vegitem 8", pick: false },
    { name: "vegitem 9", pick: false },
    { name: "vegitem 10", pick: false },
    { name: "vegitem 11", pick: false },
    { name: "vegitem 12", pick: false },
    { name: "vegitem 13", pick: false },
    { name: "vegitem 14", pick: false },
]

const lunchv = [
    { name: "vegitem 1", pick: false },
    { name: "vegitem 2", pick: false },
    { name: "vegitem 3", pick: false },
    { name: "vegitem 4", pick: false },
    { name: "vegitem 5", pick: false },
    { name: "vegitem 6", pick: false },
    { name: "vegitem 7", pick: false },
    { name: "vegitem 8", pick: false },
    { name: "vegitem 9", pick: false },
    { name: "vegitem 10", pick: false },
    { name: "vegitem 11", pick: false },
    { name: "vegitem 12", pick: false },
    { name: "vegitem 13", pick: false },
    { name: "vegitem 14", pick: false },
]

const dinnerv = [
    { name: "vegitem 1", pick: false },
    { name: "vegitem 2", pick: false },
    { name: "vegitem 3", pick: false },
    { name: "vegitem 4", pick: false },
    { name: "vegitem 5", pick: false },
    { name: "vegitem 6", pick: false },
    { name: "vegitem 7", pick: false },
    { name: "vegitem 8", pick: false },
    { name: "vegitem 9", pick: false },
    { name: "vegitem 10", pick: false },
    { name: "vegitem 11", pick: false },
    { name: "vegitem 12", pick: false },
    { name: "vegitem 13", pick: false },
    { name: "vegitem 14", pick: false },
]

const breakfastnv = [
    { name: "nonvegitem 1", pick: false },
    { name: "nonvegitem 2", pick: false },
    { name: "nonvegitem 3", pick: false },
    { name: "nonvegitem 4", pick: false },
    { name: "nonvegitem 5", pick: false },
    { name: "nonvegitem 6", pick: false },
    { name: "nonvegitem 7", pick: false },
    { name: "nonvegitem 8", pick: false },
    { name: "nonvegitem 9", pick: false },
    { name: "nonvegitem 10", pick: false },
    { name: "nonvegitem 11", pick: false },
    { name: "nonvegitem 12", pick: false },
    { name: "nonvegitem 13", pick: false },
    { name: "nonvegitem 14", pick: false },
]

const lunchnv = [
    { name: "nonvegitem 1", pick: false },
    { name: "nonvegitem 2", pick: false },
    { name: "nonvegitem 3", pick: false },
    { name: "nonvegitem 4", pick: false },
    { name: "nonvegitem 5", pick: false },
    { name: "nonvegitem 6", pick: false },
    { name: "nonvegitem 7", pick: false },
    { name: "nonvegitem 8", pick: false },
    { name: "nonvegitem 9", pick: false },
    { name: "nonvegitem 10", pick: false },
    { name: "nonvegitem 11", pick: false },
    { name: "nonvegitem 12", pick: false },
    { name: "nonvegitem 13", pick: false },
    { name: "nonvegitem 14", pick: false },
]

const dinnernv = [
    { name: "nonvegitem 1", pick: false },
    { name: "nonvegitem 2", pick: false },
    { name: "nonvegitem 3", pick: false },
    { name: "nonvegitem 4", pick: false },
    { name: "nonvegitem 5", pick: false },
    { name: "nonvegitem 6", pick: false },
    { name: "nonvegitem 7", pick: false },
    { name: "nonvegitem 8", pick: false },
    { name: "nonvegitem 9", pick: false },
    { name: "nonvegitem 10", pick: false },
    { name: "nonvegitem 11", pick: false },
    { name: "nonvegitem 12", pick: false },
    { name: "nonvegitem 13", pick: false },
    { name: "nonvegitem 14", pick: false },
]

export const Selection = ({ pref, preferences, setPreferences }) => {
    const [breakfast, setBreakfast] = useState(breakfastv)
    const [lunch, setLunch] = useState(lunchv)
    const [dinner, setDinner] = useState(dinnerv)

    useEffect(() => {
        if (pref === "veg") {
            setBreakfast(breakfastnv)
            setLunch(lunchnv)
            setDinner(dinnernv)
        }
    }, [pref])

    const handleCheckboxChange = (meal, setMeal, index) => {
        const updatedMeal = [...meal]
        updatedMeal[index].pick = !updatedMeal[index].pick

        if (updatedMeal.filter(item => item.pick).length <= 7) {
            setMeal(updatedMeal)
        }
    }

    return (
        <div className="flex flex-col space-y-6">
            <MealCategory
                title="Breakfast"
                items={breakfast}
                setMeal={setBreakfast}
                meal={breakfast}
                handleCheckboxChange={handleCheckboxChange}
            />
            <MealCategory
                title="Lunch"
                items={lunch}
                setMeal={setLunch}
                meal={lunch}
                handleCheckboxChange={handleCheckboxChange}
            />
            <MealCategory
                title="Dinner"
                items={dinner}
                setMeal={setDinner}
                meal={dinner}
                handleCheckboxChange={handleCheckboxChange}
            />
        </div>
    )
}

const MealCategory = ({ title, items, setMeal, meal, handleCheckboxChange }) => {
    return (
        <div className="p-4 border rounded-lg shadow-lg bg-white border-gray-300">
            <h3 className="text-xl font-semibold mb-2">{title}:</h3>
            <div className="grid grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={item.pick}
                                    onChange={() => handleCheckboxChange(meal, setMeal, index)}
                                    color="primary"
                                />
                            }
                            label={item.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
