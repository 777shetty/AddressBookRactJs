import "../address-book/AddressBookForm.scss";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import logo from '../../assets/images/logo.png';
import cross from '../../assets/images/cancel.png'
import AddressBookService from "../../components/services/addressbook-service";

const AddressBookForm = (props) => {
    let initialValue = {
        name: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        id: '',
        isUpdate: false,
        error: {
            phoneNumber: '',
            name: '',
            address: '',
            city: '',
            state: '',
            zipCode: ''
        }

    }

    const [formValue, setForm] = useState(initialValue);
    const [displayMeassage, setDisplayMessage]=useState("");
    const addressbook = new AddressBookService();

    const changeValue = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value })
    }
    const validData = async () => {
        let isError = false;
        let error = {
            phoneNumber: '',
            name: '',
            address: '',
            city: '',
            state: '',
            zipCode: ''

        }
        const regName = /^[A-Z]{1}[A-Za-z]{2,}([\\s]?([a-zA-Z]{3,}))*$/
        if (formValue.name.length < 1 || !regName.test(formValue.name)) {
            error.name = 'name is required'
            isError = true;
        }
        const regPhoneNumber = /^[+]?([0-9]{2})?[789]{1}[0-9]{9}$/
        if (formValue.phoneNumber.length < 1 || !regPhoneNumber.test(formValue.phoneNumber)) {
            error.phoneNumber = 'phone Number is required'
            isError = true;
        }
        const regAddress = /^[a-zA-Z0-9]{3,}([\\s]?[a-zA-Z0-9]{3,})*$/
        if (formValue.address.length < 1 || !regAddress.test(formValue.address)) {
            error.address = 'address is required'
            isError = true;
        }
        const regZip = /^[0-9]{3}[\\s]?[0-9]{3}$/
        if (formValue.zipCode.length < 1 || !regZip.test(formValue.zipCode)) {
            error.zipCode = 'zipcode is required'
            isError = true;
        }

        if (formValue.city.length < 1) {
            error.city = 'city is required'
            isError = true;
        }
        if (formValue.state.length < 1) {
            error.state = 'state is required'
            isError = true;
        }

        await setForm({ ...formValue, error: error })
        return isError;
    }

    const save = async (event) => {
        event.preventDefault();
        console.log("save");

        if (await validData()) {
            console.log('error', formValue);
            return;
        }
        let object = {
            name: formValue.name,
            phoneNumber: formValue.phoneNumber,
            address: formValue.address,
            city: formValue.city,
            state: formValue.state,
            zipCode: formValue.zipCode,
            id: formValue.id
        }
        console.log(object)
        addressbook.addAddressBook(object).then(data => {
            setDisplayMessage("Successfully added user");
                  setTimeout(()=>{
                      setDisplayMessage("");
                  },5000);
        }).catch(err => {
            console.log("Error to add user");
                  setDisplayMessage("Error to add user");
                  setTimeout(()=>{
                    setDisplayMessage("");
                },5000);
        })
       
    }

    const reset = () => {
        setForm({ ...initialValue, id: formValue.id, isUpdate: formValue.isUpdate })
        console.log(formValue)
    }
    return (
        <div>
            <header className="header-content header">
                <div className="logo-content">
                <img src={logo} alt="" />
                    <div>
                        <span className="address-text">ADDRESS</span><br />
                        <span className="address-text address-book">BOOK</span>
                </div>
                </div>
            </header>

            <div className="form-content">
                <form className="form" action="#">
                    <div className="form-head">
                        <h1 className="form-head-title">Person Address Form</h1>
                        <Link to="/home" class="close-button"><img src={cross} className="close-button" /></Link>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="name">Full Name</label>
                        <input className="input" type="text" id="name" name="name" onChange={changeValue} autocomplete="disable" required />
                        <div className="error" id="name-error">{formValue.error.name}</div>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="phoneNumber">Phone Number</label>
                        <input className="input" type="tel" id="phoneNumber" name="phoneNumber" onChange={changeValue} autocomplete="disable" required />
                        <div className="error" id="phoneNumber-error">{formValue.error.phoneNumber}</div>
                    </div>
                    <div className="row-content">
                        <div className="text-row">
                            <label className="label text" htmlFor="address">Address</label>
                            <textarea id="address" className="input" name="address" onChange={changeValue} placeholder="" style={{ height: "100px" }} autocomplete="disable"></textarea>
                            <div className="error" id="address-error">{formValue.error.address}</div>


                        </div>
                    </div>
                    <div className="row-content location-row">
                        <div>
                        <label className="label text" htmlFor="city">City</label>
                            <select id="city" onChange={changeValue} name="city">
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
                            <div className="error" id="zip-error">{formValue.error.city}</div>
                        </div>
                        <div className="state-row">
                            <label className="label text" htmlFor="state">State</label>
                            <select id="state" onChange={changeValue} name="state">
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
                            <div className="error" id="zip-error">{formValue.error.state}</div>
                        </div>
                        <div>
                        
                        <label className="label text" htmlFor="zip">Zipcode</label>
                            <input className="input" type="text" id="zip" name="zipCode" onChange={changeValue} required autocomplete="disable" />
                            <div className="error" id="zip-error">{formValue.error.zipCode}</div>
                        </div>
                    </div>
                    <div className="buttonParent">
                        <div className="submit-reset">
                            <button type="submit" class="button submitButton" id="submitButton" onClick={save}>
                                Submit
                            </button>
                            <button type="reset" className="resetButton button" id="resetButton" onclick={reset}>
                                Reset</button>
                        </div>
                    </div>
                    <div className="displaymessage">
                    {displayMeassage}
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddressBookForm;
