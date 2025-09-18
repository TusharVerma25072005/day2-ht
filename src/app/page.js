"use client"
import PersonalDetails from "@/components/personalInfoBox";
import React from "react";
import { BackDisplayButton } from "@/components/buttons";
import { ForwardDisplayButton } from "@/components/buttons";
import ReviewForm from "@/components/reviewBox";
import { Selection } from "@/components/selection";
import { Feedback } from "@/components/feedbackBox";


export default function Home() {
  const [page , setPage] = React.useState(0)
  const [Department, setDepartment] = React.useState('');
  const [Name, setName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [RollNo, setRollNo] = React.useState('');
  const [Hostel, setHostel] = React.useState('');
  const [Pref , setPref] = React.useState('Veg');
  const [MenuReview , setMenuReview] = React.useState([])
  const [preferences , setPreferences] = React.useState([])
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8">
          <div className="flex justify-center space-x-2 mb-4">
            {[0, 1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  step <= page ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="text-center text-gray-600 text-sm">
            Step {page + 1} of 4
          </div>
        </div>

        
        <div className="relative">
          <div className={`transform transition-all duration-500 ease-in-out ${
            page !== 0 ? "opacity-0 scale-95 pointer-events-none absolute inset-0" : "opacity-100 scale-100"
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Personal Details</h2>
                <p className="text-gray-600">Let's start with your basic information</p>
              </div>
              <PersonalDetails  
                Department={Department} setDepartment={setDepartment} 
                Hostel={Hostel} setHostel={setHostel} 
                Pref={Pref} setPref={setPref} 
                Name={Name} setName={setName} 
                RollNo={RollNo} setRollNo={setRollNo} 
                Email={Email} setEmail={setEmail}
              />
            </div>
          </div>

          <div className={`transform transition-all duration-500 ease-in-out ${
            page !== 1 ? "opacity-0 scale-95 pointer-events-none absolute inset-0" : "opacity-100 scale-100"
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Menu Review</h2>
                <p className="text-gray-600">Share your thoughts on the menu</p>
              </div>
              <ReviewForm setMenuReview={setMenuReview}/>
            </div>
          </div>

          <div className={`transform transition-all duration-500 ease-in-out ${
            page !== 2 ? "opacity-0 scale-95 pointer-events-none absolute inset-0" : "opacity-100 scale-100"
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Preferences</h2>
                <p className="text-gray-600">Select your food preferences</p>
              </div>
              <Selection pref={Pref} preferences={preferences} setPreferences={setPreferences}/>
            </div>
          </div>

          <div className={`transform transition-all duration-500 ease-in-out ${
            page !== 3 ? "opacity-0 scale-95 pointer-events-none absolute inset-0" : "opacity-100 scale-100"
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Feedback</h2>
                <p className="text-gray-600">Your feedback helps us improve</p>
              </div>
              <Feedback />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex justify-between items-center">
            <BackDisplayButton 
              setPage={() => {
                if(page > 0) {
                  setPage(page - 1)
                }
              }} 
            />
            <div className="text-sm text-gray-500">
              {page < 3 ? 'Continue' : 'Submit'}
            </div>
            <ForwardDisplayButton  
              setPage={() => {
                if(page >= 4) return;
                if(Name === '' || Email === '' || Department === '' || Hostel === '' || RollNo === '') {
                  alert("Enter the full details")
                  return
                }
                if(page === 3) {
                  console.log({
                    Name, Email, Department, Hostel, RollNo, Pref, MenuReview, preferences
                  });
                  console.log("Form Submitted")
                }
                setPage(page + 1)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
