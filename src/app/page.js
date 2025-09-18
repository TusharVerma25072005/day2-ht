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
    <div className="flex flex-col justify-center items-center pt-8 ">
        <div className={`w-full md:w-1/2  rounded-md flex flex-col justify-center items-center shadow-xl ${page !=0 ? "hidden" : "block"}`}>
          <PersonalDetails  Department={Department} setDepartment={setDepartment} Hostel={Hostel} setHostel={setHostel} Pref={Pref} setPref={setPref} Name={Name} setName={setName} RollNo ={RollNo} setRollNo={setRollNo} Email={Email} setEmail = {setEmail}/>
        </div>
        <div className={`w-full md:w-1/2  rounded-md flex flex-col justify-center items-center shadow-xl ${page !=1 ? "hidden" : "block"}`}>
          <ReviewForm setMenuReview ={setMenuReview}/>
        </div>
        <div className={`w-full md:w-1/2  rounded-md flex flex-col justify-center items-center shadow-xl ${page !=2 ? "hidden" : "block"}`}>
          <Selection pref={Pref} preferences={preferences} setPreferences={setPreferences}/>
        </div>
        <div className={`w-full md:w-1/2  rounded-md flex flex-col justify-center items-center shadow-xl ${page !=3 ? "hidden" : "block"}`}>
          <Feedback />
        </div>



        <div className="w-full md:w-1/2 flex justify-around p-4 flex-row">
          <BackDisplayButton setPage={()=>{
              if(page >0){

                setPage(page-1)
              }
            }} 
            />
          <ForwardDisplayButton  setPage={()=>{
              if(page >=4)return;
              if(Name == '' || Email=='' || Department == '' || Hostel == '' || RollNo == ''){
                alert("Enter the full details")
                return
              }
              if(page == 3){
                console.log({
                  Name, Email, Department, Hostel, RollNo , Pref , MenuReview , preferences
                })

              }
              setPage(page+1)
            }}
            />
        </div>
    </div>
  );
}
