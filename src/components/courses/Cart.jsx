/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({selectedCourse, remaining}) => {
    
    console.log(selectedCourse);

    return (
        <div className="w-96 mt-20 bg-white shadow-xl p-12">
            <h1 className="text-4xl font-bold text-[#2F80ED] mb-4">Credit Hour Remaining {remaining} hr</h1>
            <hr className="my-4"/>
            <h1 className="text-4xl font-bold my-4">Course Name</h1>
            <ol style={{ listStyleType: 'decimal' }}>
                 {selectedCourse.map((course) => (
                     <li key={course.id} className="text-2xl">
                     {course.title}
                     </li>
                ))}
            </ol>


            <hr className="my-4" />
            <p className="font-bold text-3xl my-3">Total Credit Hour : </p>
            <hr className="my-4" />
            <p className="font-bold text-3xl my-3">Total Price :  USD</p>
        </div>
    );
};

export default Cart;