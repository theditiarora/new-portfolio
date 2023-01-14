import Pfp from './imgs/pfp2.jpg'
import { useState } from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';

function App() {
  const [vis, setVis] = useState(true);

  return (
    <div className="min-h-screen min-w-screen pb-5 bg-[url(./imgs/purple-circles.png)] bg-cover font-rob">
      {/* NAV */}
      <div className='border-b flex px-5 xs:px-10 md:px-20 py-6 text-purple-c font-semibold text-xs sm:text-sm font-rob items-center justify-between border-black'>
        <p>PORTFOLIO.</p>

        <div className="flex gap-10">
          {/* texts */}
          <a className='outline-none hidden sm:visible' href='https://www.linkedin.com/in/diti-arora' target='_blank'>LinkedIn.</a>
          <a className='outline-none hidden sm:visible' href='https://twitter.com/theditiarora' target='_blank'>Twitter.</a>
          <a className='outline-none hidden sm:visible' href='https://github.com/theditiarora' target='_blank'>Github.</a>

          {/* icons */}
          <div className="flex gap-10">
            <a className='sm:hidden' href='https://www.linkedin.com/in/diti-arora' target='_blank'><AiOutlineTwitter className='w-6 h-6 text-purple-c text-purple-c ' /></a>

            <a className='sm:hidden' href='https://twitter.com/theditiarora' target='_blank'><AiOutlineLinkedin className='w-6 h-6 text-purple-c text-purple-c ' /></a>

            <a className='sm:hidden' href='https://github.com/theditiarora' target='_blank'><AiOutlineGithub className='w-6 h-6 text-purple-c text-purple-c ' /></a>
          </div>
          
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="px-5 xs:px-10 md:px-20 my-16 xs:flex gap-10 md:gap-16">
        <img className='object-cover rounded-full sm:rounded-none border sm:border-2 border-black P-0 w-32 h-32 sm:w-52 sm:h-60 md:w-2/4 lg:w-customm md:h-custom flex-shrink-0' src={Pfp} alt="" />
        <div className="mt-7 xs:mt-1">
          <h1 className={`text-lg sm:text-mid md:text-3xl lg:text-4xl font-dm md:mt-7` }>DITI ARORA</h1>

          <p className='font-rob font-medium lg:1/4 md:w-3/4 xl:w-2/4 mt-1 sm:mt-3 md:mt-5 lg:mt-10 text-xs sm:text-sm md:text-md-lg lg:text-lg'>I'm a 13 y/o ReactJs Developer and UI designer. I've been working with HTML, CSS, JavaScript, React and Tailwind from the past 2 years. I love to explore web dev and get better at it. Currently I'm learning and trying to break into the web3 space.</p>

        </div>
      </div>

      {/* WORK */}
      <div className='px-5 xs:px-10 md:px-20 md:w-3/4'>
        <h1 className="text-3xl md:text-4xl font-dm mt-20 ">WORK</h1>
        
        <div className="border-black border p-4 md:p-5 mt-5">
          <div className="flex justify-between items-center">
            <a target='_blank' href='now-and-me-task.netlify.app/' className="text-purple-c font-semibold font-sm md:font-md">Now and me</a>

            <a target='_blank' href='https://github.com/theditiarora/Now-and-me-Task' className="text-sm underline">Github</a>
            
          </div>
          <p className='mt-2 text-sm md:font-base'>This was an internship task where I had to make a demo app where people can vent and share their feelings.</p>
        </div>

        <div className="border-black border p-4 md:p-5 mt-7 md:mt-5">
          <div className="flex justify-between">
            <a target='_blank' href='https://coder-space.vercel.app/' className="text-purple-c font-semibold">Coder Space</a>
            <a target='_blank' href='https://github.com/theditiarora/Coder-space' className="text-sm underline">Github</a>
          </div>

          <p className='mt-2 text-sm md:text-base'>Social networking platform for programmers where they can come hang out, nerd out on their favourite topics/interests together. Share anything, connect with others.</p>
        </div>

        <div className="border-black border p-4 md:p-5 mt-7 md:mt-5">

          <div className="flex justify-between">
            <a target='_blank' href='https://theditiarora.github.io/Alpaca-Generator/' className="text-purple-c font-semibold">Alpaca Generator</a>
            <a target='_blank' href='https://github.com/theditiarora/Alpaca-Generator' className="text-sm underline">Github</a>
          </div>

          <p className='mt-2 text-sm md:text-base'>Alpaca is a cartoon character. This app lets you customize one of your own, play with the styles, change the accessories and more.</p>
        </div>

        <div className="border-black border p-4 md:p-5 mt-7 md:mt-5">

          <div className="flex justify-between">
            <a target='_blank' href='https://theditiarora.github.io/JS-Calculator/' className="text-purple-c font-semibold">JS Calculator</a>
            <a target='_blank' href='https://github.com/theditiarora/JS-Calculator' className="text-sm underline">Github</a>
          </div>

          <p className='mt-2 text-sm md:text-base'>A calculator app written in JavaScript.</p>
        </div>

        <div className="border-black border p-4 md:p-5 mt-7 md:mt-5">

          <div className="flex justify-between">
            <a target='_blank' href='https://theditiarora.github.io/Gradient-Generator/' className="text-purple-c font-semibold">Gradient Generator</a>
            <a target='_blank' href='https://github.com/theditiarora/Gradient-Generator' className="text-sm underline">Github</a>
          </div>

          <p className='mt-2 text-sm md:text-base'>A tool that lets you generate CSS code of all sorts of linear gradients.</p>
        </div>

        <div className="border-black border p-4 md:p-5 mt-7 md:mt-5">

          <div className="flex justify-between">
          <a target='_blank' href='https://theditiarora.github.io/Twitter-login-page-clone/' className="text-purple-c font-semibold">Twitter Clone</a>
            <a target='_blank' href='https://github.com/theditiarora/Twitter-login-page-clone' className="text-sm underline">Github</a>
          </div>

          <p className='mt-2 text-sm md:text-md'>Twitter sign-up page clone.</p>
        </div>

      </div>

      {/* experience */}
      <div className='px-5 xs:px-10 md:px-20 md:w-3/4'>
        <h1 className="text-3xl md:text-4xl font-dm mt-20 ">EXPERIENCE</h1>

        <div className="border-black border p-5 mt-5">
          <a href='now-and-me-task.netlify.app/' className="text-purple-c font-semibold text-xl">Currsive</a>
          <ul className='list-disc px-6 mt-4 flex flex-col gap-3 text-sm md:text-md'>
            <li>Developed user interfaces with HTML5 CSS and modern Javascript</li>
            <li>Tested site compatibility across multiple browsers and devices, uncovering and debugging issues and addressing inconsistencies.</li>
            <li>Designed and updated layouts to meet usability and performance requirements.</li>
          </ul>
        </div>

        <div className="border-black border p-5 mt-10">
          <a href='now-and-me-task.netlify.app/' className="text-purple-c font-semibold text-xl">Skynox</a>
          <ul className='list-disc px-6 mt-4 flex flex-col gap-3 text-sm md:text-md'>
            <li>Got the experience of working with a database of enterprise level</li>
            <li>Performed duties in accordance with applicable standards and regulatory guidelines</li>
            <li>Developed multiple user interfaces with modern JavaScript frameworks, HTML5 and Tailwindcss</li>
            <li>Developed testing code for mobile and web-based applications.</li>
          </ul>
        </div>


      </div>
          <p className='text-xs sm:text-base text-center mt-10 opacity-60 '>Feel free to mail me at <a href="mailto: diti.aromatic@gmail.com">diti.aromatic@gmail.com</a></p>
    </div>
  );
}

export default App;


