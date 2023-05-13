import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  return (
    <form>
      <div className="form-group">
        <label className={name || nameFocused ? 'active' : ''}>Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          onFocus={() => setNameFocused(true)}
          onBlur={() => setNameFocused(name !== '')}
        />
      </div>
      <div className="form-group">
        <label className={email || emailFocused ? 'active' : ''}>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(email !== '')}
        />
      </div>
      <div className="form-group">
        <label className={message || messageFocused ? 'active' : ''}>Message</label>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          onFocus={() => setMessageFocused(true)}
          onBlur={() => setMessageFocused(message !== '')}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
