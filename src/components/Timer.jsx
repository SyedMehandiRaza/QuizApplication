import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Timer({ onEnd }) {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onEnd();
      return;
    }

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onEnd]);

  return (
    <div>Time left: {timeLeft}s</div>
  );
}

Timer.propTypes = {
  onEnd: PropTypes.func.isRequired,
};

export default Timer;
