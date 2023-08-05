import { Link } from "react-scroll";
function NavigationButtons() {
    return (
        <div className="navigation-buttons">
            <Link to="section1" smooth={true} duration={500}>
                <div id="one"></div>
            </Link>
            <Link to="section2" smooth={true} duration={500}>
                <div id="one"></div>
            </Link>
            <Link to="section3" smooth={true} duration={500}>
                <div id="one"></div>
            </Link>
        </div>
    );
}
export default NavigationButtons