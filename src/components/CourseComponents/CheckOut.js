import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const CheckOut = () => {
    const course = useLoaderData();
    const navigate = useNavigate()
    const { title, duration, detail_pic, price } = course;

    const handlePayButton = (event) => {
        event.preventDefault()

        Swal.fire({
            title: 'Are you sure?',
            text: "You are going to payment",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Success!',
                        'Your Order Confirmed',
                        'success'
                    )
                    navigate('/')
                }

            })
    }
    const goBack = () => {
        navigate(-1);
    }
    return (

        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
            <div className="flex flex-col justify-start items-start w-full space-y-9">
                <div className="flex justify-start flex-col items-start space-y-2">
                    <button className="flex flex-row items-center text-gray-600 dark:text-white hover:text-gray-500 space-x-1">
                        <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p onClick={goBack} className="text-sm leading-none">Back</p>
                    </button>
                    <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">Checkout</p>
                </div>

                <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                    <div className=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10">
                        <div className="flex flex-col justify-start items-center w-full space-y-4">
                            <p className="text-3xl md:text-4xl leading-normal text-gray-800 dark:text-gray-50 font-bold">Course Name: {title}</p>
                            <p className="text-base font-semibold leading-none text-gray-600 dark:text-white">Course Duration: {duration}</p>
                        </div>
                        <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                            <img src={detail_pic} alt="{name}" />
                        </div>
                        <p className='font-bold text-2xl text-black'>Course Price: {price}</p>
                    </div>

                    <form onSubmit={handlePayButton} className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">

                        <div className="mt-8">
                            <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="email" id="" placeholder="Email" required />
                        </div>

                        <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Card details</label>
                        <div className="mt-2 flex-col">
                            <div>
                                <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name="number" id="" placeholder="0000 1234 6549 15151" required />
                            </div>
                            <div className="flex-row flex">
                                <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="date" name="date" id="" placeholder="MM/YY" />
                                <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name="cvc" id="" placeholder="CVC" required />
                            </div>
                        </div>

                        <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Name on card</label>
                        <div className="mt-2 flex-col">
                            <div>
                                <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name="name" id="" placeholder="Name on card" required />
                            </div>
                        </div>
                        <button type='submit' className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                            <div>
                                <p className="text-base leading-4">Pay </p>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default CheckOut;