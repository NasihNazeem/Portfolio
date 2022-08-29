import './navbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'navbar ' + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className='logo'>nazeem.</a>
                    <div className='itemContainer'>
                        <PersonIcon className="icon" />
                        <span>+1 403 700 7883</span>
                    </div>
                    <div className='itemContainer'>
                        <EmailIcon className="icon" />
                        <span>nasihnazeem@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
