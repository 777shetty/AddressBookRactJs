import "../address-book/AddressBookForm.scss";
import { Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import cross from '../../assets/images/cancel.png'
const AddressBookForm = (props) => {
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

            <div class="form-content">
                <form class="form" action="#">
                    <div class="form-head">
                        <h1 class="form-head-title">Person Address Form</h1>
                        <Link to="/home" class="close-button"><img src={cross} className="close-button" /></Link>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="name">Full Name</label>
                        <input class="input" type="text" id="name" name="name" autocomplete="disable" required />
                        <error-output id="name-error" class="text-error" for="text"></error-output>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="phoneNumber">Phone Number</label>
                        <input class="input" type="tel" id="phoneNumber" name="phoneNumber" autocomplete="disable" required />
                        <error-output id="phoneNumber-error" class="tel-error" for="tel"></error-output>
                    </div>
                    <div class="row-content">
                        <div class="text-row">
                            <label class="label text" for="address">Address</label>
                            <textarea id="address" class="input" name="address" placeholder="" style={{ height: "100px"}}autocomplete="disable"></textarea>
                            <error-output id="address-error" class="add-error" for="address"></error-output>
                        </div>
                    </div>
                    <div class="row-content location-row">
                        <div>
                            <label class="label text" for="city">City</label>
                            <select id="city" name="City">
                                <option value="" disabled selected hidden>Select City</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Aligarh">Aligarh</option>
                                <option value="Allahabad">Allahabad</option>
                                <option value="Ambala">Ambala</option>
                                <option value="Amravati">Amravati</option>
                                <option value="Amritsar">Amritsar</option>
                                <option value="Aurangabad">Aurangabad</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Bhopal">Bhopal</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Dehradun">Dehradun</option>
                                <option value="Firozpur">Firozpur</option>
                                <option value="Gandhinagar">Gandhinagar</option>
                                <option value="Gaya">Gaya</option>
                                <option value="Guntur">Guntur</option>
                                <option value="Gurgaon">Gurgaon</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Indore">Indore</option>
                                <option value="Jaipur">Jaipur</option>
                                <option value="Jammu">Jammu</option>
                                <option value="Kanyakumari">Kanyakumari</option>
                                <option value="Leh">Leh</option>
                                <option value="Lucknow">Lucknow</option>
                                <option value="Madurai">Madurai</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="New Delhi">New Delhi</option>
                                <option value="Patna">Patna</option>
                                <option value="Pondicherry">Pondicherry</option>
                                <option value="Pune">Pune</option>
                                <option value="Raipur">Raipur</option>
                                <option value="Ranchi">Ranchi</option>
                                <option value="Shimla">Shimla</option>
                                <option value="Srinagar">Srinagar</option>
                                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                <option value="Tiruchirappalli">Tiruchirappalli</option>
                                <option value="Ujjain">Ujjain</option>
                                <option value="Visakhapatnam">Visakhapatnam</option>
                                <option value="Warangal">Warangal</option>
                                <option value="Yanam">Yanam</option>
                                <option value="Zunheboto">Zunheboto</option>
                            </select>
                        </div>
                        <div class="state-row">
                            <label class="label text" for="state">State</label>
                            <select id="state" name="State">
                                <option value="" disabled selected hidden>Select State</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>
                        <div>
                            <label class="label text" for="zip">Zipcode</label>
                            <input class="input" type="text" id="zip" name="zip" required autocomplete="disable" />
                            <error-output id="zip-error" class="zip-error" for="zip"></error-output>
                        </div>
                    </div>
                    <div class="buttonParent">
                        <div class="submit-reset">
                            <button type="submit" class="button submitButton" id="submitButton" onclick="save()">
                                Submit
                            </button>
                            <button type="reset" class="resetButton button" id="resetButton" onclick="reset()"
                                >Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddressBookForm;
