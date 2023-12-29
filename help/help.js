document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq_ques');
  
    questions.forEach(function (question) {
      question.addEventListener('click', function () {
        const answer = this.querySelector('.faq_answer');
        if (answer.style.display === 'block') {
          setTimeout(() => {
            answer.style.display = 'none';
          }, 300); // Adjust the delay time (in milliseconds) as needed
        } else {
          setTimeout(() => {
            answer.style.display = 'block';
          }, 300); // Adjust the delay time (in milliseconds) as needed
        }
      });
    });
  });
  