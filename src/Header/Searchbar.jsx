import React, { useState } from 'react'
import "./Searchbar.css"
import { Modal } from 'react-bootstrap';



const Searchbar = (props) => {
    const [dropdownvalue, setdropdownvalue] = useState(0);
    console.log("searchbar", props.data)
    console.log("searchbar", dropdownvalue)

    const favouritebtn=()=>{
        setdropdownvalue(1);
        
    }


//     const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
    return (
        <>
          

            <button onClick={favouritebtn}>Favourite List</button>
{dropdownvalue==1&&
            <div className="modelcard">
              
     
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item) => (
              <tr key={item.id}>
                <td>{item.cardData.id}</td>
                <td>{item.cardData.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
    }
            {/* <div>
               
                {
                 
                    props.data.map(item => (
                        <tr key={item.id}>
                           
                            <td>{item.cardData.id}</td>
                            <td>{item.cardData.title}</td>
                        </tr>
                    ))
                    
                }
                
             </div> */}


             

        </>
    )
}

export default Searchbar
