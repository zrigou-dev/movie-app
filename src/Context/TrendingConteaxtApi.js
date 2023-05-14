import axios from "axios";
import { createContext , useState , useEffect } from "react";

export let TrendingContext = createContext()

export default function TrendingContextProvider(props){
    const [trendingMovies, settrendingMovies] = useState([]);
    const [trendingTV, settrendingTV] = useState([]);
    const [trendingPeople, settrendingPeople] = useState([]);
    const sections = ["movie", "tv", "person"];
    
    async function getTrending(){
        for(let i = 0 ; i < sections.length ; i++){
            const {data} =  await axios.get(
                `https://api.themoviedb.org/3/trending/${sections[i]}/week?api_key=c04c56b8aeb3dce3acdfd16eb3ca314b`
            )
            switch (sections[i]) {
                case "movie":
                  settrendingMovies(data.results);
                  break;
                case "tv":
                  settrendingTV(data.results);
                  break;
                case "person":
                  settrendingPeople(data.results);
                  break;
                default:
                  break;
            }
        }
    }
    useEffect(()=>{
        getTrending()
    },[])
    return (
        <TrendingContext.Provider
        value={{
            trendingMovies,
            trendingPeople,
            trendingTV
        }}
        >
            {props.children}
        </TrendingContext.Provider>
    )
}