// question-container is both the answer text and the "+" button
const questions = document.querySelectorAll(".question");

questions.forEach(
    question =>
        question.addEventListener(
            "click",
            () => {
                const topic = question.parentElement;
                topic.classList.toggle("revealed");
            }
        )
);