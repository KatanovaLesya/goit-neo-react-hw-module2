
import React, { useState, useEffect } from 'react';
import Notification from './components/Notification/Notification';
import './App.css'
import Description from './components/Descriptions/Descriptions'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import styles from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Завантаження стану з localStorage
  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  // Збереження стану в localStorage
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  // Функція для оновлення відгуків
  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  // Функція для скидання відгуків
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  // Обчислення загальної кількості відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Обчислення відсотка позитивних відгуків
  const positiveFeedback = totalFeedback > 0
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sip Happens Café</h1>
      <Description />
      <Options
        onFeedback={handleFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;