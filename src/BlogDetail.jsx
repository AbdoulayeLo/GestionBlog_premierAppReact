import React from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

function BlogDetail() {
    const{id}=useParams()
    const {data:blog, isLoading, error}= useFetch("http://localhost:8000/blogs/"+id)

    const back=useNavigate()
    const handleDeleteBlog= ()=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method: 'DELETE',
        }).then(()=>{
            back("/")
            console.log("Supprimer avec success")
            })
    }

    return (
        <div className="detail-blog">
            { isLoading && <div className="text-center mt-3"><img  width="70" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi293.photobucket.com%2Falbums%2Fmm49%2Foficinademultimedia%2FLoading_Animation.gif&f=1&nofb=1&ipt=41e828b995c1461759388c42bc93689f6935407f4eb29f22a012cda3fe332bd0&ipo=images"/></div>}
            {error && <div>{"une Erreur est survenue"}</div>}
            {blog && (
                <div className="col-md-6 offset-3 mt-5" key={blog.id}>
                    <div className="card mb-4" style={{ height: '300px' }}>
                        <div className="card-body" style={{overflowY: 'auto'}}>
                            <h5 className="card-title text-primary-emphasis">{blog.title}</h5>
                            <p className="card-text">{blog.body}.</p>
                            <p className="card-text text-decoration-underline">Publie par: {blog.author}.</p>
                            <small className="card-text">Publie le :{blog.date}.</small>
                            <Link to="/" className="btn btn-outline-warning float-start mt-5">Retour</Link>
                            <button onClick={handleDeleteBlog} className="btn btn-outline-danger float-end mt-5">Supprimer</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogDetail;