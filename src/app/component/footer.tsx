import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const Footer = (): React.ReactElement => {
    return (
        <div className="grid grid-cols-2 px-5 py-10 bg-gray-200 align-middle text-black">
            <div>
                <strong className="text-3xl">SunSaKi</strong>
                <p className="text-lg">Game Developer and Front End Developer</p>
                <p>&copy; 2025, SunSaKi. All rights reserved.</p>
            </div>
            <div className="flex justify-center gap-4">
                <Link href="https://instagram.com/_denizzf">
                    <FontAwesomeIcon icon={faInstagram} fixedWidth className="w-10 h-10 hover:text-blue-900" />
                </Link>
                <Link href="https://linkedin.com/in/denis-firmansyah">
                    <FontAwesomeIcon icon={faLinkedin} fixedWidth className="w-10 h-10 hover:text-blue-900" />
                </Link>
                <Link href="https://github.com/DenisFirmansyah">
                    <FontAwesomeIcon icon={faGithub} fixedWidth className="w-10 h-10 hover:text-blue-900" />
                </Link>
            </div>
        </div>
    )
}