import {useState} from "react";
const Profile = () => {
    const [formData , setFormData] = useState({ 
        name:'',
        email:'',
        phone:'' ,
    })




const handleInputChange = e=>{
   
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
}

    return <div>
        <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>
            Profile informations
            </h2>

            <form>
                <div className="mb-5">
                    <p className="form__label">Name*</p>
                    <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange}
                    placeholder="Full Name" 
                    className="form__input"/>
                </div>
                <div className="mb-5">
                    <p className="form__label">Email*</p>
                    <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email" 
                    className="form__input"
                    readOnly
                    aria-readonlydisabled="true" 
                    />
                    
                </div> 
                <div className="mb-5">
                    <p className="form__label">Phone*</p>
                    <input 
                    type="number" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange}
                    placeholder="Phone number" 
                    className="form__input"/>
                </div>

            </form>
    </div>
    
};
export default Profile