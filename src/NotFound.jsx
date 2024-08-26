import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function NotFound(props) {
    const back=useNavigate()
    return (
        <div className="offset-3  mt-5 col-md-6 mb-5">
            <div className="card">
                <Link to={"/"} className=" card-header bg-primary float-start text-white"><img src={"https://cdn-icons-png.flaticon.com/512/109/109618.png"} width={20}/>  •••</Link>
                <div className="card-body text-center">
                    <h1>404</h1>
                    <h5>PAGE NOT FOUND</h5>
                    {/*<Link to="/">Page D'accueil</Link>*/}
                    <img src={"https://i.pinimg.com/originals/b6/32/d1/b632d118f51c7c8ed2ad9ef42658506d.gif"}
                         width={200}/>

                </div>
            </div>
        </div>
    );
}

export default NotFound;