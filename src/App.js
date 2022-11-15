
import './App.css';
import { useState } from "react";
import contactsJSON from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0,5)); 
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        {contacts.map((element) => {
          return (
            <tbody key={element.id}>
              <tr>
                <td>
                  <img
                    src={element.pictureUrl}
                    alt="pictureUrl"
                    width="50px"
                  />
                </td>
                <td>{element.name}</td>
                <td>{element.popularity.toFixed(2)}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
 

export default App;
