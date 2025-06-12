import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const Footer = (): React.ReactElement => {
    return (
        <div className="grid grid-cols-3 px-5 py-10 bg-gray-400 align-middle">
            <div>
                <h2 className="text-2xl">SunSaKi</h2>
                <p className="text-lg">Game Developer and Front End Developer</p>
            </div>
            <div className="flex justify-center gap-4">
                <Link href="https://instagram.com/_denizzf">
                    <FontAwesomeIcon icon={faInstagram} className="w-10 h-10 hover:text-blue-900 transition-colors" />
                </Link>
                <Link href="https://linkedin.com/in/denis-firmansyah">
                    <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10 hover:text-blue-900 transition-colors" />
                </Link>
                <Link href="https://github.com/DenisFirmansyah">
                    <FontAwesomeIcon icon={faGithub} className="w-10 h-10 hover:text-blue-900 transition-colors" />
                </Link>
            </div>
            <div className="flex flex-grow items-center">
                <p>&copy; 2025, SunSaKi. All rights reserved.</p>
            </div>
        </div>
    )
}