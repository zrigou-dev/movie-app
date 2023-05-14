import axios from "axios";
import { createContext, useEffect ,useState } from "react";

export let tvDataContext = createContext();

export function TVDataContextProvider(props){
  const [airingTodayTV, setairingTodayTV] = useState([]);
  const [onTheAirTV, setonTheAirTV] = useState([]);
  const [popularTV, setpopularTV] = useState([]);
  const [topRatedTV, settopRatedTV] = useState([]);
  const [page, setpage] = useState(1);
  const sections = ["airing_today", "on_the_air", "popular", "top_rated"];

  async function getTv(page){
     for(let i=0 ; i< sections.length ;i++){
        const {data}= await axios.get(
            `https://api.themoviedb.org/3/tv/${sections[i]}?api_key=c04c56b8aeb3dce3acdfd16eb3ca314b&language=en-US&page=${page}`
        )
        switch (sections[i]) {
            case "airing_today":
              setairingTodayTV(data.results);
              break;
            case "on_the_air":
              setonTheAirTV(data.results);
              break;
            case "popular":
              setpopularTV(data.results);
              break;
            case "top_rated":
              settopRatedTV(data.results);
              break;
            default:
              break;
          }
     }
  }
  useEffect(()=>{
    setpage(1);
    getTv(page)
  },[])

  return(
    <tvDataContext.Provider
    value={{
        airingTodayTV,
        onTheAirTV,
        popularTV,
        topRatedTV,
        page,
        setpage,
        getTv   
    }}
    >
        {props.children}
    </tvDataContext.Provider>
  )
}