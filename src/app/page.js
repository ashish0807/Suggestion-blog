"use client"
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import Lottie from '@/components/lottieAnimation';
import StackIcon from "tech-stack-icons";


export default function Home() {
  const el = useRef(null);
  return (
    <main>
      {/* This is my langing animation page */}
      <section className="container px-4 py-4 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center ml-2 lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Suggestion.  <span className="font-semibold">is a website</span> for my blogs<br className="hidden lg:block" /> and my personal achievements and ideas.<span className="font-semibold underline decoration-primary"><span ref={el}/></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Feel free to read and share<br className="hidden lg:block" /> also appreciate if you like.
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        {/* my lottie animation */}
          <Lottie className="w-full h-full max-w-md lg:max-w-full mr-0"/>
        </div>
      </section>


      {/* This is my exepertise and knowledge page */}

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">My Technical Skills</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">FRONTEND/BACKEND/DEVOPS</p>
        </div>

        <div className="flex flex-wrap justify-center">

          {/* Frontend*/}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="p-6 space-x-4  bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
            <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2'>Frontend</h3>
            <StackIcon name="js" className='lg:w-16 h-16' />            
            <StackIcon name="reactjs" className='lg:w-16 h-16'/>
            <StackIcon name="nextjs" className='lg:w-16 h-16' />
            <StackIcon name="typescript" className='lg:w-16 h-16' />
            <StackIcon name="bootstrap5" className='lg:w-16 h-16'/>
            <StackIcon name="tailwindcss" className='lg:w-16 h-16' />
            <StackIcon name="redux" className='lg:w-16 h-16' />    
            </div>
          </div>


          {/* Backend */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="p-6 space-x-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Backend</h3>
              <StackIcon name="nodejs" className='lg:w-16 h-16' />
              <StackIcon name="django" className='lg:w-16 h-16'/>
              <StackIcon name="flask" className='lg:w-16 h-16'/>
              <StackIcon name="postman" className='lg:w-16 h-16' />
              <StackIcon name="graphql" className='lg:w-16 h-16' />
              <StackIcon name="firebase" className='lg:w-16 h-16'/>
              <StackIcon name="supabase" className='lg:w-16 h-16'/>
              <StackIcon name="postgresql" className='lg:w-16 h-16' />
            </div>
          </div>


          {/* DevOps */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="p-6 space-x-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">DevOps</h3>
              <StackIcon name="python" className='lg:w-16 h-16' />
              <StackIcon name="aws" className='lg:w-16 h-16' />
              <StackIcon name="docker" className='lg:w-16 h-16' />
              <StackIcon name="kubernetes" className='lg:w-16 h-16' />
              <StackIcon name="cloudinary" className='lg:w-16 h-16' />
              <StackIcon name="linux" className='lg:w-16 h-16' />
              <StackIcon name="powershell" className='lg:w-16 h-16' />
            </div>
          </div>

          {/* Database and Tools*/}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="p-6 space-x-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Database and Tools</h3>
              <StackIcon name="mongodb" className='lg:w-16 h-16' />
              <StackIcon name="mongoose" className='lg:w-16 h-16' />
              <StackIcon name="mysql" className='lg:w-16 h-16' />
              <StackIcon name="vscode" className='lg:w-16 h-16'/>
              <StackIcon name="git" className='lg:w-16 h-16'/>
              <StackIcon name="github" className='lg:w-16 h-16'/>
              <StackIcon name="wordpress" className='lg:w-16 h-16' />
            </div>
          </div>
        </div>
      </div>
    </section>


    </main>
  );
}


