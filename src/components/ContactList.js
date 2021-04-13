import React, {useState} from 'react';

const defaultContacts = [
    {
        name: 'Marc',
        age: '34',
        favoris: false
    },
    {
        name: 'Xavier',
        age: '42',
        favoris: false
    }
];

export default function ContactList() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [contactList, setContactList] = useState(defaultContacts);

    const createContact = () => {
        // const newContact = {name,  age, favoris: false}
        const newContact = {name: name, age: age, favoris: false}
        setContactList([...contactList, newContact]);
    }

    return (
        <div>
            <h3>Liste de contacts</h3>
            <div>
                <input type="text" value={name} placeholder="Nom" onChange={(e) => setName(e.target.value)}/>
                <input type="text" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)}/>
                <button onClick={createContact}> + </button>
            </div>
            {
                contactList.map((contact, index) => {
                    return (
                        <div key={index + contact.name}>
                            {contact.name} / {contact.age}
                        </div>
                    )
                })
            }
        </div>
    )
}