/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({selectedCourse}) => {
    
    console.log(selectedCourse);

    return (
        <div className="w-96 mt-20">
            <h1 className="text-4xl font-bold text-[#2F80ED] mb-4">Credit Hour Remaining {} hr</h1>
            <hr/>
            <h1 className="text-4xl font-bold my-4">Course Name</h1>
            <ol style={{ listStyleType: 'decimal' }}>
                 {selectedCourse.map((course) => (
                     <li key={course.id} className="text-2xl">
                     {course.title}
                     </li>
                ))}
            </ol>


            <hr />
            <p className="font-bold text-3xl my-3">Total Credit Hour : </p>
            <hr />
            <p className="font-bold text-3xl my-3">Total Price :  USD</p>
        </div>
    );
};

export default Cart;