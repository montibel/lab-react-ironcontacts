
import './App.css';
import { useState } from "react";
import contactsJSON from "./contacts.json";

function App() {
  
  const [contacts, setContacts] = useState(contactsJSON.slice(1,10)); 

  return (
    <div className="App">
      <h1>IronContacts</h1>
       {/* Add random*/}
      <button onClick={()=>{
        const newRandomContact=contactsJSON[Math.floor(Math.random()*contactsJSON.length)]
        setContacts([...contacts, newRandomContact])
      }}>Add Random Contact</button>

      {/* Add by name*/}
      <button onClick={()=>{
        const newNameContact=contactsJSON.sort((a, b) => (a.name > b.name ? 1 : -1));
        setContacts(newNameContact)
      }}>Add by name</button>

       {/* Add by popularity*/}
      <button onClick={()=>{
        const newPopContact=contactsJSON.sort((a, b) => b.popularity - a.popularity);
        setContacts(newPopContact)
      }}>Add by popularity</button>

        <table></table>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won a Emmy</th>
          </tr>
        </thead>
        {contacts.map(
          ({id,name,pictureUrl,popularity,wonEmmy,wonOscar}) => {
          return (
            <tbody key={id}>
              <tr>
                <td>
                  <img
                    src={pictureUrl}
                    alt="pictureUrl"
                    width="50px"
                  />
                </td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>
                {wonOscar  ? <td>🏆</td> : <td></td>} 
                {wonEmmy  ? <td>🏆</td> : <td></td>} 
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
 

export default App;
