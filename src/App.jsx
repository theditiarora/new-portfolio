import Pfp from './imgs/pfp.png'
function App() {
  return (
    <div className="min-h-screen min-w-screen pb-5 bg-[url(./imgs/purple-circles.png)] bg-cover font-rob">
      {/* NAV */}
      <div className='border-b flex px-20 py-6 text-purple-c font-semibold text-sm font-rob justify-between border-black'>
        <p>PORTFOLIO.</p>

        <div className="flex gap-10">
          <a className='outline-none' href='https://www.linkedin.com/in/diti-arora' target='_blank'>LinkedIn.</a>
          <a className='outline-none' href='https://twitter.com/theditiarora' target='_blank'>Twitter.</a>
          <a className='outline-none' href='https://github.com/theditiarora' target='_blank'>Github.</a>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="px-20 my-16 flex gap-16">
        <img className='object-cover border-2 border-black P-0' src={Pfp} alt="" />
        <div className="">
          <h1 className="text-4xl font-dm">DITI <br/> ARORA</h1>

          <p className='font-rob font-medium w-2/4 mt-5 text-lg'>I'm a 13 y/o ReactJs Developer and UI designer. I've been working with HTML, CSS, JavaScript, React and Tailwind from the past 2 years. I love to explore web dev and get better at it. Currently I'm learning and trying to break into the web3 space.</p>

        </div>
      </div>

      {/* WORK */}
      <div className='px-20 w-3/4'>
        <h1 className="text-4xl font-dm mt-20 ">WORK</h1>

        <div className="border-black border p-5 mt-5">
          <a target='_blank' href='https://now-and-me-task.netlify.app/' className="text-purple-c font-semibold">Now and me</a>
          <p className='mt-2'>This was an internship task where I had to make a demo app where people can vent and share their feelings.</p>
        </div>

        <div className="border-black border p-5 mt-5">
          <a target='_blank' href='https://coder-space.vercel.app/' className="text-purple-c font-semibold">Coder Space</a>
          <p className='mt-2'>Social networking platform for programmers where they can come hang out, nerd out on their favourite topics/interests together. Share anything, connect with others.</p>
        </div>

        <div className="border-black border p-5 mt-5">
          <a target='_blank' href='https://theditiarora.github.io/Alpaca-Generator/' className="text-purple-c font-semibold">Alpaca Generator</a>
          <p className='mt-2'>Alpaca is a cartoon character. This app lets you customize one of your own, play with the styles, change the accessories and more.</p>
        </div>

        <div className="border-black border p-5 mt-5">
          <a target='_blank' href='https://theditiarora.github.io/JS-Calculator/' className="text-purple-c font-semibold">JS Calculator</a>
          <p className='mt-2'>A calculator app written in JavaScript.</p>
        </div>

        <div className="border-black border p-5 mt-5">
          <a target='_blank' href='https://theditiarora.github.io/Gradient-Generator/' className="text-purple-c font-semibold">Gradient Generator</a>
          <p className='mt-2'>A tool that lets you generate CSS code of all sorts of linear gradients.</p>
        </div>

        <div className="border-black border p-5 mt-5">
          <a target='_blank' href='https://theditiarora.github.io/Twitter-login-page-clone/' className="text-purple-c font-semibold">Twitter Clone</a>
          <p className='mt-2'>Twitter sign-up page clone.</p>
        </div>

      </div>

      {/* experience */}
      <div className='px-20 w-3/4'>
        <h1 className="text-4xl font-dm mt-20 ">EXPERIENCE</h1>

        <div className="border-black border p-5 mt-5">
          <a href='now-and-me-task.netlify.app/' className="text-purple-c font-semibold text-xl">Currsive</a>
          <ul className='list-disc px-6 mt-4 flex flex-col gap-3'>
            <li>Developed user interfaces with HTML5 CSS and modern Javascript</li>
            <li>Tested site compatibility across multiple browsers and devices, uncovering and debugging issues and addressing inconsistencies.</li>
            <li>Designed and updated layouts to meet usability and performance requirements.</li>
          </ul>
        </div>

        <div className="border-black border p-5 mt-10">
          <a href='now-and-me-task.netlify.app/' className="text-purple-c font-semibold text-xl">Skynox</a>
          <ul className='list-disc px-6 mt-4 flex flex-col gap-3'>
            <li>Got the experience of working with a database of enterprise level</li>
            <li>Performed duties in accordance with applicable standards and regulatory guidelines</li>
            <li>Developed multiple user interfaces with modern JavaScript frameworks, HTML5 and Tailwindcss</li>
            <li>Developed testing code for mobile and web-based applications.</li>
          </ul>
        </div>


      </div>
          <p className='text-center mt-10 opacity-60'>Feel free to mail me at <a href="mailto: diti.aromatic@gmail.com">diti.aromatic@gmail.com</a></p>
    </div>
  );
}

export default App;
