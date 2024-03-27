import React from "react";
import { LogoLight } from './Media';
import GoogleIcon from '../assets/google-icon.webp';
import AppleLogo from '../assets/apple-logo.png';
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";


const GoogleSignup = () => {
    return (
        <div className="rounded-full border border-slate-300 p-1 w-fit px-16 hover:bg-slate-200">
            <div className="flex">
                <img src={GoogleIcon} className="w-8" />
                <div className="flex items-center justify-center">Sign up with Google</div>
            </div>
        </div>
    )
}

const AppleSignup = () => {
    return (
        <div className="rounded-full border border-slate-300 p-1 w-fit px-16 hover:bg-slate-200">
            <div className="flex">
                <div className="h-8 w-9 flex items-center justify-center">
                    <img src={AppleLogo} className="flex items-center justify-center w-5 h-5" />
                </div>
                <div className="flex items-center justify-center font-semibold">Sign up with Apple</div>
            </div>
        </div>
    )
}


const Login = () => {
    return (
        <div>
            <div className="grid content-around grid-cols-2">
                <div className="grid w-auto content-center ml-12 items-center justify-center mt-20">
                    <LogoLight className='flex size-80' />
                </div>
                <div className="ml-20">
                    <div className="font-bold text-7xl font-serif mt-20">Happening now</div>
                    <div className="mt-16 font-bold font-serif text-3xl">Join Today.</div>
                    <div className="grid mt-8 gap-2">
                        <GoogleSignup />
                        <AppleSignup />
                    </div>
                    <div className="flex items-center justify-center mt-2 w-[19rem]">
                        <div className="w-full h-[1px] bg-slate-100"></div>
                        <div className="text-center mx-2">or</div>
                        <div className="w-full h-[1px] bg-slate-100"></div>
                    </div>
                    <SignUpModal />
                    <div className="w-[19rem] text-xs mt-2 text-slate-500">
                        By signing up, you agree to the <span className="text-sky-600">Terms of Service</span> and <span className="text-sky-600">Privacy Policy</span>, including <span className="text-sky-600">Cookie Use</span>.
                    </div>
                    <div className="grid mt-12 gap-2">
                        <div className="font-bold">Already have an account?</div>
                        <LoginModal />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login