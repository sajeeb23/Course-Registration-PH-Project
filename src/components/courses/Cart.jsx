/* eslint-disable react/prop-types */

const Cart = (props) => {
    console.log(props.selectedCourse);
    return (
        <div className="w-96">
            <h1 className="text-4xl font-bold">Credit Hour Remaining {} hr</h1>
            <hr/>
            <h1 className="text-4xl font-bold">Course Name</h1>
                <ol>
                    <li></li>
                </ol>
            <hr />
            <p>Total Credit Hour : </p>
            <hr />
            <p>Total Price :  USD</p>
        </div>
    );
};

export default Cart;