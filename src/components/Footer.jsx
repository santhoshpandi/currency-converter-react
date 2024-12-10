import giturl from '../assets/github-icon.svg'
import linkedinurl from '../assets/linkedin-icon.svg'
import gameurl from '../assets/game-icon.png'
import '../App.css'

export default function Footer() {
  return (
    <div className="bg-slate-800 flex flex-col items-center rounded-b-md py-2 gap-2">

      <ul className='flex justify-center gap-2.5'>
        <li className='w-7  hover:scale-110 duration-150 hover:shadow-yellow-400 '>
          <a href="https://www.linkedin.com/in/santhoshpandi543/">
            <img src={linkedinurl} alt="linkedin" /></a>
        </li>
        <li className='w-7  hover:scale-110 duration-150 hover:shadow-yellow-400 '>
          <a href="https://github.com/santhoshpandi/"><img src={giturl} alt="github" /></a>
        </li>
        <li className='w-7  hover:scale-110 duration-150 hover:shadow-yellow-400 '>
          <a href="https://santhoshpandi.github.io/RockPaperScissor/"><img src={gameurl} alt="game" /></a>
        </li>
      </ul>
      
      <div className="text-white">
        &copy; 2024  SanthoshPandi🦋
      </div>

    </div>
  )
}


