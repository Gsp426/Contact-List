import React from "react";

function ContactList({ contacts, deleteContact }) {
  if (contacts.length === 0) return <p>No contacts found.</p>;

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {contacts.map((contact, index) => (
        <li
          key={index}
          style={{
            marginBottom: "10px",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "400px",
            margin: "10px auto",
          }}
        >
          <span>
            {contact.name} - {contact.email}
          </span>
          <button
            onClick={() => deleteContact(index)}
            style={{ padding: "2px 5px", cursor: "pointer" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
