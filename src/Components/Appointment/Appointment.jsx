import React, { useState } from 'react';
import styles from './Appointment.module.css';

const Appointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle the form submission here
    console.log('Form submitted:', { name, email, phone, date, time });
  };

  return (
    <div className={styles.formContainer}>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Time:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Appointment;
