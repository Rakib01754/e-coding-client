import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const navigate = useNavigate()
    const { title, duration, detail_pic, name } = course;

    const handlePayButton = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const cardNumber = form.number.value;
        console.log(name, email, cardNumber);
        navigate('/');

    }
    return (

        <div class="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">

            <div class="flex flex-col justify-start items-start w-full space-y-9">
                <div class="flex justify-start flex-col items-start space-y-2">
                    <button class="flex flex-row items-center text-gray-600 dark:text-white hover:text-gray-500 space-x-1">
                        <svg class="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.91681 7H11.0835" stroke="currentColor" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-sm leading-none">Back</p>
                    </button>
                    <p class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">Checkout</p>
                </div>

                <div class="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                    <div class=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10">
                        <div class="flex flex-col justify-start items-center w-full space-y-4">
                            <p class="text-3xl md:text-4xl leading-normal text-gray-800 dark:text-gray-50 font-bold">Course Name: {title}</p>
                            <p class="text-base font-semibold leading-none text-gray-600 dark:text-white">$520.00</p>
                        </div>
                        <div class="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                            <img src={detail_pic} alt="{name}" />
                        </div>
                    </div>

                    <form onSubmit={handlePayButton} class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">

                        <div class="mt-8">
                            <input class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="email" id="" placeholder="Email" required />
                        </div>

                        <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Card details</label>
                        <div class="mt-2 flex-col">
                            <div>
                                <input class="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="number" name="number" id="" placeholder="0000 1234 6549 15151" required />
                            </div>
                            <div class="flex-row flex">
                                <input class="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="date" name="date" id="" placeholder="MM/YY" />
                                <input class="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name="cvc" id="" placeholder="CVC" required />
                            </div>
                        </div>

                        <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Name on card</label>
                        <div class="mt-2 flex-col">
                            <div>
                                <input class="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name="name" id="" placeholder="Name on card" required />
                            </div>
                        </div>
                        <button class="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                            <div>
                                <p class="text-base leading-4">Pay </p>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default CheckOut;