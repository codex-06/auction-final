import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';


export default function Login(props) {
  const router = useRouter();
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSignupMode, setIsSignupMode] = useState(true); // New state variable to track form mode
  
    const toggleFormMode = () => {
      setIsSignupMode((prevMode) => !prevMode);
      setEmail('');
      setPassword('');
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const data  = {
          email:email, 
          password : password
         }
        if (isSignupMode) {
            const response = await fetch("http://localhost:8080/user/signup",{
              method: "POST",
            
              headers :{
                "Content-Type" : "application/json"
              },
              body: JSON.stringify(data)
            })
            console.log(response)
            if( response.ok){
          
              router.push('/test');
            }
        } else {
          // Handle login logic here using the existing firebase login method
          // For example, you can use `signInWithEmailAndPassword` method:
          // signInWithEmailAndPassword(auth, email, password)
          //   .then((userCredential) => {
          //     const user = userCredential.user;
          //     console.log("Logged in!");
          //     // ...
          //   })
          //   .catch((error) => {
          //     const errorCode = error.code;
          //     const errorMessage = error.message;
          //     console.log(errorCode);
          //     console.log(errorMessage);
          //   });
        }
      
        setEmail('');
        setIsLoading(false);
      };

      function show_hide() {
		// logic for password show or hide 
		if(typeof document != null){
			var input = document.getElementById("password");
			if (input.type === "password") {
				input.type = "text";
			} else {
				input.type = "password";
			}
			var showsvg = document.getElementById("show");
			var hidesvg = document.getElementById("hide");
			showsvg.classList.toggle("invisible");
			hidesvg.classList.toggle("invisible")
		}
		
	}

  return (
    <div>
      <div className=" mt-24 mx-auto w-6/12 grid grid-cols-3 bg-white drop-shadow-2xl shadow-2xl">
		<div className="">
			<Image src={"/art5.webp"} width={900} height={900}></Image>
		</div>
		<div className="col-span-2">
			<div className='py-14 relative text-center'>
				<button onClick ={()=>{props.quit(false)}} className='absolute right-4 top-4 w-max'>
					<svg className='' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
				</button>
				<h1 className=' text-center text-black text-2xl'> {isSignupMode ? 'Sign up and begin your treasure hunt.' : 'Welcome to LiveAuctioneers!'}</h1>
			</div>
			<form  onSubmit={ (e) =>onSubmit(e)}>

			
				<div className="mx-20 mb-10 ">
					<label  className= "w-max text-gray-600 text-sm" htmlFor="email">EMAIL ADDRESS</label>
					<input onChange={(event) => {setEmail(event.target.value)}} className='leading-10 border w-full mb-8' type="email" name="email" id="" />

					<div className='relative'>
					<label htmlFor="password" className="w-max text-gray-600 text-sm">PASSWORD</label>

						<button  type="button" className = "absolute right-0 top-1" onClick={show_hide}>
							<svg id = "hide" className = 'absolute top-0 right-0 w-3'xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/>
							</svg>
							<svg id = "show" className = ' absolute top-0 right-0 w-3 invisible' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"/></svg>
						</button>
					
					</div>
					<input className='leading-10 border w-full mb-8' onChange={(event) => setPassword(event.target.value)} type="password" name="password" id='password'/>

					<button type='submit'  className='text-center bg-red-800 w-full hover:bg-red-700 text-white leading-10'>{isSignupMode ? 'SIGNUP' : "LOGIN"}</button>

                    <p className="text-center">{isSignupMode ? 'Already have an account?' : "Don't have an account?"}
                        <button className = "mt-6   text-cyan-800 underline decoration-cyan-800 hover:text-cyan-700 hover:decoration-cyan-700 "onClick={toggleFormMode}>{isSignupMode ? 'LOGIN' : 'SIGNUP'}</button>
                    </p>
				</div>
			</form>
		</div>

    <div>
    </div>
    </div>
    </div>
  )
}
