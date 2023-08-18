import React from "react";

export default function ContactRow({contact, onSelect}) {
    return (
        <tr onClick={() => onSelect(contact.id)}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}