import React,{useState, useEffect} from "react";
import { Link} from "react-router-dom";

const Home = () =>{
    const [state, setState] = useState(5);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();

    document.title = `(${state}) Employee Online`;

  }, [state]);
    return(
        <div>
            <button onClick={() => setState(state + 1)}>Click Me {state} </button>
        {
          data ? (
            data.map((element, index) => (
              <Link to={`/app/$element.id`}>
              <div key={index}>
                {element.firstName}
                {element.lastName}
                {element.email}
              </div>
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )
        }
        </div>
    )
}
export default Home;