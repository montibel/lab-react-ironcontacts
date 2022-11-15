
import './App.css';
import { useState } from "react";
import contactsJSON from "./contacts.json";

function App() {
  
  const [contacts, setContacts] = useState(contactsJSON.slice(5,10)); 
  return (
    <div className="App">
      <h1>IronContacts</h1>
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
