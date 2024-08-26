import  {useEffect, useState} from 'react';

/**
 * CECI EST UNE USECUSTOMISER
 * @param url
 * @returns {{isLoading: boolean, data: unknown, error: boolean}}
 * @constructor
 */
const UseFetch=(url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true) //permet de gerer le chargement de la page si
    // le chargement des donnees du serveur  vers le site est lent
    const [error, setError] = useState(false)

    useEffect(() =>  {  // s'execute chak fois ou il y a eu reaffichage
        setTimeout(()=>{
            fetch(url)
                .then(response=>{
                    if(!response.ok){
                        setError(true)
                    }
                    return  response.json()
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false) // ceci permet de changer l'etat  du  chargement a false si si les donnees son afficher
                    setError(null)
                })
                .catch(error => {
                    console.log(error.message)
                    setError(true)
                    setIsLoading(false)
                });
        },2000)
    }, [url]);

    return {data, isLoading,error}
}

export default UseFetch;