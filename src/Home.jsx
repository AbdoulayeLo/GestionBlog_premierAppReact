import React, {useEffect, useState} from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const title="Liste des Blogs"
    const {data:blog, isLoading, error}= useFetch(` http://localhost:8000/blogs`)


    // const handleDelete=(id)=>{
    //    const newBlog = blog.filter((blog)=>blog.id !==id);
    //     console.log(id)
    //     setBlog(newBlog); //met a jour automtiqument le tableau
    //
    // }
    return (
        <>
            { blog && <BlogList blog={blog} title={title}/> } {/*Condition qui affiche <BlogList/> si blog est vraie*/}
            {/*<BlogList  blog={blog.filter( (blog)=> blog.author == 'AbdouLY')} title={'Liste des blogs de AbdouLY'}/>*/}
            { isLoading && <div className="text-center mt-3"><img  width="70" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi293.photobucket.com%2Falbums%2Fmm49%2Foficinademultimedia%2FLoading_Animation.gif&f=1&nofb=1&ipt=41e828b995c1461759388c42bc93689f6935407f4eb29f22a012cda3fe332bd0&ipo=images"/></div>}
            {error && <div className="text-center mt-3"><span className="text-danger fw-bolder fs-5">Une erreur est survenue...</span></div>}
        </>
    );
};

export default Home;

/**
 *   {
 *             id: 1,
 *             title:"Bienvenu dans mon blog",
 *             img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LNVHPtFfUBI8aIrmZYji9gAAAA%26pid%3DApi&f=1&ipt=601569d9ce4b020860bd5b63f4d75e7bdb39acfe064c17bb6047d261bd71bd33&ipo=images",
 *             body:"Le lorem ipsum est, en imprimerie, une suite de mots sans significationLe lorem ipsum est, en imprimerie, " +
 *                 "une suite de mots sans signification une suite de mots sans signification une suite de " +
 *                 "mots sans signification une suite de mots sans signification une suite de mots sans signification une suite de mots sans sig" +
 *                 "nification une suite de mots sans signification une suite de mots sans signification " +
 *                 "une suite de mots sans signification ",
 *             author:"AbdouLo",
 *             date: "04/04/2021",
 *         },
 *         {
 *             id: 2,
 *             title:"Une si longue lettre",
 *             img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LNVHPtFfUBI8aIrmZYji9gAAAA%26pid%3DApi&f=1&ipt=601569d9ce4b020860bd5b63f4d75e7bdb39acfe064c17bb6047d261bd71bd33&ipo=images",
 *             body:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification ",
 *             author:"AbdouLY",
 *             date: "04/06/2021",
 *         },
 *         {
 *             id: 3,
 *             title:"Une si longue lettre",
 *             img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LNVHPtFfUBI8aIrmZYji9gAAAA%26pid%3DApi&f=1&ipt=601569d9ce4b020860bd5b63f4d75e7bdb39acfe064c17bb6047d261bd71bd33&ipo=images",
 *             body:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification ",
 *             author:"AbdouLY",
 *             date: "04/06/2021",
 *         },
 *         {
 *             id: 4,
 *             title:"Une si longue lettre",
 *             img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LNVHPtFfUBI8aIrmZYji9gAAAA%26pid%3DApi&f=1&ipt=601569d9ce4b020860bd5b63f4d75e7bdb39acfe064c17bb6047d261bd71bd33&ipo=images",
 *             body:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification ",
 *             author:"AbdouLY",
 *             date: "04/06/2021",
 *         },
 */