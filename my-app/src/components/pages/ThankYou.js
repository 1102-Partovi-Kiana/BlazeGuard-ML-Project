import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import '../../styles/ThankYou.css'

function ThankYou() {
  useEffect(() => {
    // Trigger confetti when the component mounts
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="thank-you-container">
      <h1>Thank you!</h1>
      <p>We have received your submission.</p>
      <button onClick={() => window.location.href = '/'}>Return</button>
    </div>
  );
}

export default ThankYou;