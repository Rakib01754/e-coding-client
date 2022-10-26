import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const SingleCourse = () => {
    const course = useLoaderData();
    const { title, detail_pic, details, skills, duration, name } = course
    return (
        <section>
            <div className="bg-violet-400">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <div className='flex justify-between items-center'>
                        <h1 className="text-3xl md:text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">{title}
                        </h1>
                        <span>
                            <Pdf targetRef={ref} filename="details.pdf">
                                {({ toPdf }) => <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50" onClick={toPdf}>Download</button>}
                            </Pdf>
                        </span>
                    </div>
                    <div ref={ref}>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">{details}</p>

                        <h4 className='font-bold text-xl md:text-2xl underline text-left'>You Will Gain Those Skills From This Course</h4>
                        {
                            skills.map((skill, idx) => <li key={idx} className='font-bold text-left md:text-xl my-2'>{skill}</li>)
                        }
                        <h4 className='font-bold text-xl text-white my-5'>Course Duration <span className='border-2 border-black p-2'>{duration}</span></h4>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Get Premium Access</button>
                    </div>
                </div>
            </div>
            <img src={detail_pic} alt={name} className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
        </section>
    );
};

export default SingleCourse;