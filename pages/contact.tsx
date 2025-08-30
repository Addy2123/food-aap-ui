import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    alert('Form submitted! Check console for data.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '10px' }}>
      <h1>Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '8px' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '8px' }}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
          style={{ padding: '8px' }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            background: '#0070f3',
            color: '#fff',
            border: 'none',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
