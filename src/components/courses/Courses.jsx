/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

const Courses = () => {

    const[allCourses, setAllCourses] = useState([]);

    useEffect(()=>{
        fetch("../../../public/Course.json")
        .then((res) => res.json())
        .then((data) => setAllCourses(data));

    },[]);

    return (
        <div className="flex">

        <div className="container mx-auto grid grid-cols-3"> 
           {
            allCourses.map(course=>(
                <div className="mt-20">
                <div className="card w-96 bg-base-100 shadow-xl">
                     <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex text-center">
                    <p>saje</p>
                    <p>sang</p>
                </div>
                <div className="card-actions justify-center">
                     <button className="btn btn-primary bg-[#2F80ED] w-full text-white">Buy Now</button>
                    </div>
                    </div>
                    </div>
                </div>
            ))
           }
        </div>
        </div>
    );
};

export default Courses;