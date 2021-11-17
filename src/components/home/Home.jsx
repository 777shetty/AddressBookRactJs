import '../home/Home.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import add from '../../assets/add-24px.svg'
const Home = (props) => {
    return (
        <div>
            <header class="header-content header">
                <div class="logo-content">
                <img src={logo} alt="" />
                    <div>
                        <span class="address-text">ADDRESS</span><br />
                        <span class="address-text address-book">BOOK</span>
                    </div>
                </div>
            </header>
            <div class="main-content">
                <div class="header-content">
                    <div class="address-detail-text">
                        Person Details
                        <div class="address-count"></div>
                    </div>
                    <Link to="/" className="add-button flex-row-center"><img src={add} alt="" />Add Person</Link>
                </div>
                <div class="table-main">
                    <table id="table-display" class="table"></table>
                </div>
            </div>
        </div>
    );
}
export default Home;
