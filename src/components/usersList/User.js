import Posts from "../postsList/Posts";
import '../style/Style.css';
import Address from "./Address";
import Company from "./Company";


export default function User({user: {id, name, username, email, address, phone, website, company}}) {

    return (
        <div>
            <div className="block">
                <div className="user-box">
                    <center><h1>User {id}</h1></center>
                    <div style={{border: '1px solid black'}}>
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
                    <Posts id={id}/>
                    </div>
                </div>
            </div>

        </div>
    );
}