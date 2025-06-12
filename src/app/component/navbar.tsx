import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NavBar = (): React.ReactElement => {
    return (
        <div className="sticky top-0 flex p-5 align-middle">
            <button>
                <FontAwesomeIcon icon={faBars} className="w-7 h-7 mr-2"/>
            </button>
            <h1 className="text-5xl">SunSaKi</h1>
        </div>
    )
}