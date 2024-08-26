import {Link} from "react-router-dom";

const BlogList = ({blog,title,handleDelete}) => {
    // const title=props.title;
    // const blog=props.blog;

    return (
        <>
            <h3 className={'text-center mt-4 text-primary-emphasis'}>{title}</h3>
            <div className="container my-5">
                <div className="row">
                    {
                        blog.map((blog) => (
                        <div className="col-md-6" key={blog.id}>
                            <div className="card mb-4" style={{ height: '300px' }}>
                                <div className="card-body" style={{overflowY: 'auto'}}>
                                    <h5 className="card-title text-primary-emphasis">{blog.title}</h5>
                                    <p className="card-text">{blog.body}.</p>
                                    <p className="card-text text-decoration-underline">Publie par: {blog.author}.</p>
                                    <p className="card-text">Publie le :{blog.date}.</p>
                                    <a href="#" className="btn btn-outline-primary mt-5">Lire</a>
                                    <Link className="btn btn-outline-success float-end mt-5" to={`/blog/${blog.id}`}>Details</Link>
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default BlogList