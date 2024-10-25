function checkAnswers() {
  const correctAnswers = {
      q1: 'A',
      q2: 'B',
      q3: 'C',
      q4: 'A',
      q5: 'D',
      q6: 'C',
      q7: 'B',
      q8: 'A',
      q9: 'D',
      q10: 'C',
      q11: 'A',
      q12: 'B',
      q13: 'D',
      q14: 'C',
      q15: 'A',
      q16: 'B',
      q17: 'C',
      q18: 'D',
      q19: 'A',
      q20: 'B',
      q21: 'A',
      q22: 'C',
      q23: 'A',
      q24: 'A',
      q25: 'D',
      q26: 'B',
      q27: 'D',
      q28: 'A',
      q29: 'A',
      q30: 'D',
      q31: 'D',
      q32: 'B',
      q33: 'A',
      q34: 'A',
      q35: 'A',
      q36: 'B',
      q37: 'A',
      q38: 'C',
      q39: 'D',
      q40: 'A',
      // Add correct answers for all remaining questions up to q40
      // Continue until q40
  };

  let score = 0;
  let totalQuestions = Object.keys(correctAnswers).length;
  let wrongAnswers = [];

  // Reset option colors before checking
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
      option.style.backgroundColor = ''; // Reset background
  });

  for (let q in correctAnswers) {
      const selectedOption = document.querySelector(`input[name="${q}"]:checked`);
      if (selectedOption) {
          if (selectedOption.value === correctAnswers[q]) {
              score++;
          } else {
              wrongAnswers.push(q);
              // Color the wrong option
              selectedOption.parentElement.style.backgroundColor = 'rgba(255, 99, 71, 0.5)'; // Light red
          }
      } else {
          wrongAnswers.push(q);
      }
      // Color the correct option if selected answer was wrong
      const correctOption = document.querySelector(`input[name="${q}"][value="${correctAnswers[q]}"]`);
      if (correctOption) {
          correctOption.parentElement.style.backgroundColor = 'rgba(144, 238, 144, 0.5)'; // Light green
      }
  }

  const feedbackMessages = {
      0: "RRRRRrrrrrrrrrrrrrrr ,try again",
      1: "You can do better, Teacher Amine believes in you!",
      2: "Keep trying, Teacher Amine is cheering for you!",
      3: "You're getting there, Teacher Amine is proud!",
      4: "Don't give up, Teacher Amine knows you can do it!",
      5: "Good effort, Teacher Amine sees your hard work!",
      6: "Nice try, Teacher Amine is impressed!",
      7: "Well done, Teacher Amine thinks you're on the right track!",
      8: "Almost there, Teacher Amine is excited for your progress!",
      9: "Great job, Teacher Amine is very proud of you!",
      10: "You've made some progress, Teacher Amine is happy to see it!",
      11: "Good work, Teacher Amine appreciates your effort!",
      12: "Solid performance, Teacher Amine is taking note!",
      13: "You're improving, and Teacher Amine notices it!",
      14: "Well played, Teacher Amine is impressed by your skills!",
      15: "Nice performance, Teacher Amine acknowledges your efforts!",
      16: "Very good, Teacher Amine is delighted with your progress!",
      17: "Excellent job, Teacher Amine is amazed by your talent!",
      18: "Outstanding, Teacher Amine is thrilled with your results!",
      19: "You're a quick learner, Teacher Amine is proud to teach you!",
      20: "Great improvement, Teacher Amine is here to support you!",
      21: "Impressive work, Teacher Amine is proud of your dedication!",
      22: "You've mastered it, Teacher Amine is in awe of your skills!",
      23: "Fantastic performance, Teacher Amine is singing your praises!",
      24: "Very impressive, Teacher Amine is amazed by your talent!",
      25: "Exceptional understanding, Teacher Amine is proud of your knowledge!",
      26: "You really know your stuff, Teacher Amine is impressed!",
      27: "Outstanding knowledge, Teacher Amine recognizes your hard work!",
      28: "Remarkable performance, Teacher Amine is celebrating your success!",
      29: "Brilliant job, Teacher Amine is inspired by your efforts!",
      30: "Excellent mastery, Teacher Amine is proud of your achievements!",
      31: "Top-notch, Teacher Amine thinks you're doing great!",
      32: "Superb work, Teacher Amine is pleased with your results!",
      33: "Expert level, Teacher Amine sees your expertise!",
      34: "Unmatched skill, Teacher Amine is honored to guide you!",
      35: "Incredible knowledge, Teacher Amine is proud to teach you!",
      36: "You've excelled, Teacher Amine is excited for your future!",
      37: "Phenomenal performance, Teacher Amine is celebrating your success!",
      38: "Unbelievable understanding, Teacher Amine is amazed by your insight!",
      39: "You're the master, Teacher Amine is proud of your mastery!",
      40: "You are the teacher Amine, inspiring greatness in others!"
  };

  let resultText = `You scored ${score} out of ${totalQuestions}. `;
  if (score in feedbackMessages) {
      resultText += feedbackMessages[score];
  } else if (score < 10) {
      resultText += "Try again!";
  }

  document.getElementById('result').innerText = resultText;

  // Disable all radio buttons
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => {
      radio.disabled = true; // Disable the radio buttons
  });
}

function resetQuiz() {
  // Reset all radio buttons
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => {
      radio.checked = false; // Uncheck the radio buttons
      radio.parentElement.style.backgroundColor = ''; // Reset background
      radio.disabled = false; // Enable the radio buttons
  });
  document.getElementById('result').innerText = ''; // Clear result text
}
  