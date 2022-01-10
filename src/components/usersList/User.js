import Company from "./Company";
import '../styles/Style.css';
import Address from "./Address";

export default function User({user: {id, name, username, email, address, phone, website, company}}) {
    return (
        <div>
            <center><h3>User: {name}</h3></center>
            <div className="user-box">
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>User name: {username}</div>
                <div>Email: {email}</div>
                <div>Address:
                    {
                        <Address address={address}/>
                    }
                </div>
                <div>Phone: {phone}</div>
                <div>Website: {website}</div>
                <div>Company:
                    {
                        <Company company={company}/>
                    }
                </div>
            </div>
        </div>
    );
}