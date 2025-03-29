  const facts = [
    "דוביק הציל ארבעה כלבים ביום אחד",
    "הוא מכין את הקפוצ'ינו הכי טעים בהרצליה",
    "הוא למד HTML רק כדי להרשים מישהי",
    "הוא בכה גם בסוף טיטאניק וגם כשכתב CSS",
    "יש לו אלבום רק של תמונות עם כלבים מחייכים",
    "הוא מורח קרם ידיים לפני כל כתיבת קוד"
  ]

  function showFact() {
    const randomIndex = Math.floor(Math.random() * facts.length)
    document.getElementById("dovik-fact").innerText = facts[randomIndex]
  }



  const likeButton = document.getElementById('like-button');
  const likeCount = document.getElementById('like-count');

  let count = parseInt(localStorage.getItem('likeCount')) || 0;
  likeCount.textContent = count;

  likeButton.addEventListener('click', () => {
    count++;
    likeCount.textContent = count;
    localStorage.setItem('likeCount', count);
  });

  function addEmoji(emoji) {
    const messageBox = document.getElementById("message");
    const cursorPos = messageBox.selectionStart;
    const textBefore = messageBox.value.substring(0, cursorPos);
    const textAfter = messageBox.value.substring(cursorPos);
    messageBox.value = textBefore + emoji + textAfter;
    messageBox.focus();
    messageBox.selectionEnd = cursorPos + emoji.length;
  }


// פתיחת שאלון
document.getElementById("open-quiz").addEventListener("click", function () {
    document.getElementById("quiz-modal").classList.remove("hidden")
  })
  
  // סגירת שאלון בלחיצה על הרקע
  document.getElementById("quiz-modal").addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.add("hidden")
    }
  })
  
  // טיפול בהגשת שאלון
  document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault()
  
    let score = 0
    for (let i = 1; i <= 5; i++) {
      const answer = document.querySelector(`input[name="q${i}"]:checked`)
      if (answer) {
        score += Number(answer.value)
      }
    }
  
    let message = ""
    if (score >= 4) {
      message = "דוביק היה עונה תוך 10 דקות שאת בול הטעם שלו"
    } else if (score >= 2) {
      message = "יש כימיה - אולי תתחילו מקפה ונראה לאן זה יוביל"
    } else {
      message = "לא בטוח שזה זה, אבל הי! לפחות שניכם אוהבים חתולים"
    }
  
    document.getElementById("quiz-result").innerText = message
    document.getElementById("quiz-popup").classList.remove("hidden")
    document.getElementById("quiz-modal").classList.add("hidden") // סגור שאלון
  })
  
  // סגירת תוצאה בלחיצה
  document.getElementById("quiz-popup").addEventListener("click", function () {
    this.classList.add("hidden")
  })
  



