import React from 'react';
import { useContext } from 'react';
import { FaMailBulk, FaOrcid } from 'react-icons/fa'
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext)

    const handleEdit = () => {
        const name = prompt('Type Your New Name Here');
        const photoURL = prompt('Type Your New Photo Url Here')
        updateProfile(user, { displayName: name, photoURL: photoURL })
            .then(() => {
                // Profile updated!
                toast.success('Profile Edited')
                toast.success('Reaload The Page')
            }).catch((error) => {
                // An error occurred
                const errorMessage = error.message;
                toast.warning(errorMessage)
            });
    }
    return (
        <div>
            {
                (user && user?.emailVerified) ? <>
                    <h1 className='text-5xl font-bold text-center underline'>User Profile</h1>
                    <div className="w-[80%] md:w-[40%] mx-auto my-32 p-8 bg-gray-200 text-black">
                        <div className="flex-shrink-0  mb-6 h-44">
                            <img src={user.photoURL} alt={user?.displayName} className=" w-40 h-40 mx-auto rounded bg-gray-500" />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div>
                                <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                            </div>
                            <div className="space-y-1">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                        <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                    </svg>
                                    <span className="text-black">{user?.email}</span>
                                </span>
                                <span className="flex items-center space-x-2">
                                    <FaMailBulk />
                                    <span className="text-black">Email Status :{user?.emailVerified ? 'Verified' : 'Not Verfied'} </span>
                                </span>
                                <span className="flex items-center space-x-2">
                                    <FaOrcid />
                                    <span className="text-black">{user?.uid} </span>
                                </span>
                                <span>
                                    <button onClick={handleEdit} type="button" className="px-8 py-3 font-semibold border rounded border-black text-violet-700 mt-4">Edit Profile</button>
                                </span>

                            </div>
                        </div>
                    </div>
                </> :
                    <>
                        <h1 className='text-5xl font-bold text-center underline'>User Profile</h1>
                        <div className="w-[80%] md:w-[40%] mx-auto my-32 p-8 bg-gray-200 text-black">
                            <h1>Verify Your Email Address First. Then Reload This Page again. To See Your Profile Information</h1>
                        </div>
                    </>
            }

        </div>

    );
};

export default Profile;