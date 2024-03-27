import React from "react";
import { CloseIcon, LogoLight } from "./Media";

const InputField = ({ type, placeholder }) => {
    return (
        <div className="border-2 px-3 pt-2 pb-[6px] mb-5 w-[200%] rounded-md">
            <div class="relative z-0 group">
                <input type={type} id="floating" class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">{placeholder}</label>
            </div>
        </div>
    )
}

const SignUpModal = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>

            <button
                className='h-10 bg-sky-500 hover:bg-sky-600 rounded-full mt-3 w-[19rem] text-white text-base font-bold'
                type="button"
                onClick={() => setShowModal(true)}
            >
                Create Account
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="grid grid-cols-2 m-2 w-[67%]">
                                    <div className="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center" onClick={() => setShowModal(false)}>
                                        <CloseIcon />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <LogoLight className='size-8' />
                                    </div>
                                    <div className="w-screen px-32 mt-6">
                                        <div className="text-3xl font-bold">Create your account</div>
                                    </div>
                                </div>
                                <div className="flex ml-24 mt-5">
                                    <form action="" method="post">
                                        <InputField type={"email"} placeholder={"Email Address"} />
                                        <InputField type={"text"} placeholder={"Name"} />
                                        <InputField type={"text"} placeholder={"Username"} />
                                        <InputField type={"password"} placeholder={"Password"} />
                                        <button type="submit" className="p-3 mb-14 text-white bg-black rounded-full px-10 mt-5 ml-[132%]">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default SignUpModal