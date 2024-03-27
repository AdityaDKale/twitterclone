import React from "react";
import { LogoLight } from './Media';
import GoogleIcon from '../assets/google-icon.webp';
import AppleLogo from '../assets/apple-logo.png';

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
                <div className="grid w-auto content-center ml-12 items-center justify-center mt-40">
                    <LogoLight className='flex size-80' />
                </div>
                <div className="ml-20">
                    <div className="font-bold text-7xl font-serif mt-20">Happening now</div>
                    <div className="mt-16 font-bold font-serif text-3xl">Join Today.</div>
                    <div className="grid mt-8 gap-2">
                        <GoogleSignup />
                        <AppleSignup />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login