import { Link } from '@/components'
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'

export default function Navbar() {
  return (
    <header className="w-full h-auto shadow-md flex justify-between p-4 items-center">
      <Link href="/" color="blue" name="home">
        <img src={'/logo.svg'} alt="logo" width="300" height="80" />
      </Link>
      <div className="flex space-x-3 pl-2">
        <Link
          href="https://www.linkedin.com/in/willdavsmith/"
          color="red"
          name="linkedin"
        >
          <FaLinkedin size={50} name="linkedin" />
        </Link>
        <Link
          href="https://github.com/willdavsmith"
          color="yellow"
          name="github"
        >
          <FaGithubSquare size={50} name="github" />
        </Link>
        <Link href="mailto: willdavsmith@gmail.com" color="blue" name="email">
          <FaEnvelopeSquare size={50} name="email" />
        </Link>
      </div>
    </header>
  )
}
