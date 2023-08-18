import { useState } from "react";
import ContactList from "./componets/ContactList";
import { useEffect } from "react";
import './App.css';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      if (!selectedContactId) return;

      try {
        const response = await fetch(`http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setSelectedContact(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchContact();
  }, [selectedContactId]);

  const goBack = () => {
    setSelectedContactId(null);
    setSelectedContact(null);
  };

  return (
    <>
      {selectedContact ? (
        <div className="mafe"> 
          <h4>name: {selectedContact.name}</h4>
          <p>Username: {selectedContact.username}</p>
          <p>email: {selectedContact.email}</p>
          <p>Phone Number: {selectedContact.phone}</p>
          <div>
          <p>Address: {selectedContact.address ? `${selectedContact.address.street}, ${selectedContact.address.city}, ${selectedContact.address.zipcode}` : "Address not available"}</p>
          </div>        
          <p>Website: {selectedContact.website}</p>
          <button onClick={goBack}>Go Back</button>
        </div>
      ) : (
        <ContactList onSelectContact={setSelectedContactId}/> 
      )}
    </>
  );
}


