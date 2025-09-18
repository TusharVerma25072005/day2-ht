"use client"
import { useState, useEffect } from "react"
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
const breakfastv = [
    { name: "Idli Sambar", pick: false },
    { name: "Masala Dosa", pick: false },
    { name: "Poha", pick: false },
    { name: "Upma", pick: false },
    { name: "Aloo Paratha", pick: false },
    { name: "Chole Bhature", pick: false },
    { name: "Uttapam", pick: false },
    { name: "Medu Vada", pick: false },
    { name: "Rava Kesari", pick: false },
    { name: "Pongal", pick: false },
    { name: "Dhokla", pick: false },
    { name: "Stuffed Paratha", pick: false },
    { name: "Semiya Upma", pick: false },
    { name: "Vegetable Sandwich", pick: false },
]

const lunchv = [
    { name: "Dal Rice", pick: false },
    { name: "Rajma Chawal", pick: false },
    { name: "Chole Rice", pick: false },
    { name: "Palak Paneer", pick: false },
    { name: "Aloo Gobi", pick: false },
    { name: "Baingan Bharta", pick: false },
    { name: "Matar Paneer", pick: false },
    { name: "Vegetable Biryani", pick: false },
    { name: "Sambar Rice", pick: false },
    { name: "Lemon Rice", pick: false },
    { name: "Vegetable Pulao", pick: false },
    { name: "Paneer Butter Masala", pick: false },
    { name: "Mixed Vegetable Curry", pick: false },
    { name: "Kadhi Chawal", pick: false },
]

const dinnerv = [
    { name: "Chapati with Dal", pick: false },
    { name: "Vegetable Curry", pick: false },
    { name: "Paneer Tikka", pick: false },
    { name: "Vegetable Fried Rice", pick: false },
    { name: "Aloo Matar", pick: false },
    { name: "Bhindi Masala", pick: false },
    { name: "Cabbage Poriyal", pick: false },
    { name: "Vegetable Soup", pick: false },
    { name: "Jeera Rice", pick: false },
    { name: "Gobi Manchurian", pick: false },
    { name: "Vegetable Noodles", pick: false },
    { name: "Paneer Paratha", pick: false },
    { name: "Mixed Dal", pick: false },
    { name: "Vegetable Khichdi", pick: false },
]

const breakfastnv = [
    { name: "Egg Curry", pick: false },
    { name: "Chicken Sandwich", pick: false },
    { name: "Egg Paratha", pick: false },
    { name: "Chicken Sausage", pick: false },
    { name: "Fish Fry", pick: false },
    { name: "Egg Biryani", pick: false },
    { name: "Chicken Dosa", pick: false },
    { name: "Mutton Keema", pick: false },
    { name: "Egg Bhurji", pick: false },
    { name: "Chicken Upma", pick: false },
    { name: "Fish Curry", pick: false },
    { name: "Egg Fried Rice", pick: false },
    { name: "Chicken Uttapam", pick: false },
    { name: "Prawn Masala", pick: false },
]

const lunchnv = [
    { name: "Chicken Curry", pick: false },
    { name: "Mutton Biryani", pick: false },
    { name: "Fish Curry Rice", pick: false },
    { name: "Chicken Biryani", pick: false },
    { name: "Egg Curry Rice", pick: false },
    { name: "Mutton Curry", pick: false },
    { name: "Prawn Curry", pick: false },
    { name: "Chicken Fried Rice", pick: false },
    { name: "Fish Fry Meals", pick: false },
    { name: "Chicken Pulao", pick: false },
    { name: "Mutton Pulao", pick: false },
    { name: "Egg Biryani", pick: false },
    { name: "Chicken Tikka Masala", pick: false },
    { name: "Fish Biryani", pick: false },
]

const dinnernv = [
    { name: "Chicken Tandoori", pick: false },
    { name: "Mutton Chops", pick: false },
    { name: "Fish Grilled", pick: false },
    { name: "Chicken Butter Masala", pick: false },
    { name: "Egg Masala", pick: false },
    { name: "Prawn Fry", pick: false },
    { name: "Chicken Noodles", pick: false },
    { name: "Mutton Korma", pick: false },
    { name: "Fish Tikka", pick: false },
    { name: "Chicken Manchurian", pick: false },
    { name: "Egg Fried Noodles", pick: false },
    { name: "Mutton Biryani", pick: false },
    { name: "Chicken Soup", pick: false },
    { name: "Fish Curry", pick: false },
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
