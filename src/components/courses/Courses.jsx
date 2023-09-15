/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from 'react-icons/bs';
import { BiBookOpen } from 'react-icons/bi';
import { Toaster, toast } from 'react-hot-toast';
import Cart from "./cart";

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    fetch("../../../public/Course.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const calculateTotalCredit = (courses) => {
    let totalCredit = 0;
    for (const course of courses) {
      totalCredit += course.credit;
    }
    return totalCredit;
  };

  const handleSelect = (course) => {
    const isExist = selectedCourse.find((item) => item.id === course.id);
    const currentTotalCredit = calculateTotalCredit(selectedCourse);

    if (isExist) {
      toast.error('Course is already selected!');
    } else {
      if (currentTotalCredit + course.credit <= 20) {
        setSelectedCourse([...selectedCourse, course]);
        setTotalCredit(currentTotalCredit + course.credit);
        setRemaining(20 - (currentTotalCredit + course.credit));
        toast.success('Course added to the cart!');
      } else {
        toast.error('Already used 20 credit hours!');
      }
    }
  };

  return (
    <div className="flex">
      <div className="container mx-auto grid grid-cols-3">
        {allCourses.map((course) => (
          <div key={course.id} className="mt-20">
            <div className="card w-80 h-full bg-white shadow-xl">
              <figure className="bg-white w-full pt-4 mx-auto"><img src={course.image} alt="Shoes" /></figure>
              <div className="card-body bg-white">
                <h2 className="card-title font-bold bg-white">{course.title}</h2>
                <p className="bg-white">{course.description}</p>
                <div className="flex text-center text-lg">
                  <p className="flex items-center gap-2 bg-white"><BsCurrencyDollar className="bg-white" />Price : {course.price}</p>
                  <p className="flex items-center gap-2 bg-white"><BiBookOpen className="bg-white" />Credit : {course.credit}</p>
                </div>
                <div className="card-actions justify-center">
                  <button onClick={() => handleSelect(course)} className="btn btn-primary bg-[#2F80ED] w-full font-semibold text-white">Select</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-96">
        <Cart selectedCourse={selectedCourse} remaining={remaining} totalCredit={totalCredit} />
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Courses;
