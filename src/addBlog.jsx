import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function AddBlog() {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [body, setBody] = useState("")
    const [isLoading, setIsLoading]=useState(false)

    const back = useNavigate();  // sa permet de redriger vers la page acceuil apres ajout avec success
    const handleAddBlog= (e)=>{
        /*e.preventDefault()est une méthode JavaScript qui empêche l'exécution de l'action par défaut d'un événement.
        Elle est souvent utilisée dans la gestion des événements pour empêcher le
         navigateur d'exécuter son comportement par défaut pour un événement particulier.*/
        e.preventDefault();
        const laDate= Date().toString().split('T');
        const date= `${laDate[0]} ${laDate[1]}`;
        const blog = {title, author, body,date};
        setIsLoading(true)

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("Article ajouter avec success")
            setIsLoading(false)
            back("/")
        })

    }
    return (
        <>
           <div className="container">
               <div className="col-md-8 offset-2">
                 <div className="card mt-5 mb-5">
                   <div className="card-header text-center fs-5">Creer Blog</div>
                     <div className="card-body">
                         <form onSubmit={handleAddBlog}>
                             <div className="mb-3">
                                 <label htmlFor="exampleInputEmail1" className="form-label">Titre</label>
                                 <input type="text" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                 />
                             </div>
                             <div className="mb-3">
                                 <label htmlFor="exampleInputEmail1" className="form-label">Auteur</label>
                                 <select type="text" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" name="author"
                                        value={author}
                                         onChange={(e)=>setAuthor(e.target.value)}
                                 >
                                     <option value="">Selectionner ici ...</option>
                                     <option value="Abdoulaye Lo">Abdoulaye Lo</option>
                                     <option value="Abdoulaye Ly">Abdoulaye Ly</option>
                                 </select>
                             </div>
                             <div className="mb-3">
                                 <label htmlFor="exampleInputPassword1" className="form-label">Contenu</label>
                                 <textarea type="text" className="form-control" id="exampleInputPassword1" name="boby"
                                    value={body}
                                           onChange={(e)=>setBody(e.target.value)}
                                 />
                             </div>


                             {!isLoading && <button type="submit" className="btn btn-primary">Creer Article</button>}
                             {isLoading && <button type="submit" className="btn btn-primary">En cours de traitement ...</button>}
                         </form>
                     </div>
                 </div>
               </div>
           </div>
        </>
    );
}

export default AddBlog;