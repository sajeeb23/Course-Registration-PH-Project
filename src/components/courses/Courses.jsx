/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { BsCurrencyDollar } from 'react-icons/bs';
import { BiBookOpen } from 'react-icons/bi';
import Cart from "./cart";

const Courses = () => {

    const[allCourses, setAllCourses] = useState([]);
    const[selectedCourse, setSelectedCourse] = useState([]);

    useEffect(()=>{
        fetch("../../../public/Course.json")
        .then((res) => res.json())
        .then((data) => setAllCourses(data));

    },[]);
    const handleSelect = (course) =>{
        setSelectedCourse([...selectedCourse, course]);
    }
    
    return (
        <div className="flex">
        <div className="container mx-auto grid grid-cols-3"> 
           {
            allCourses.map(course=>(
                <div key={course.id} className="mt-20">
                <div className="card w-80 h-full bg-white shadow-xl">
                     <figure className="bg-white w-full pt-4 mx-auto"><img src={course.image} alt="Shoes" /></figure>
                <div className=" card-body bg-white">
                    <h2 className="card-title font-bold bg-white">{course.title}</h2>
                    <p className="bg-white">{course.description}</p>
                <div className="flex text-center text-lg">
                    <p className="flex items-center gap-2 bg-white"><BsCurrencyDollar className="bg-white"/>Price : {course.price}</p>
                    <p className="flex items-center gap-2 bg-white"><BiBookOpen className="bg-white"/>Credit : {course.credit}</p>
                </div>
                <div className="card-actions justify-center">
                     <button onClick={()=>handleSelect(course)} className="btn btn-primary bg-[#2F80ED] w-full font-semibold text-white">Select</button>
                    </div>
                    </div>
                    </div>
                </div>
            ))
           }
        </div>
        <div className="w-96">
            <Cart selectedCourse={selectedCourse}></Cart>
        </div>
        </div>
    );
};

export default Courses;