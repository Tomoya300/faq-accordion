const faqHeader = document.querySelectorAll(".faq_question")
const faqContents = document.querySelectorAll(".faq_answer")
const minus = document.querySelectorAll(".minus")

faqHeader.forEach((elements, index) => {
    elements.addEventListener("click", () => {
        const crrContents = faqContents[index]
        const crrIcon = minus[index]

        if (crrContents.classList.contains("open")) {
            crrContents.style.maxHeight = 0
            crrContents.classList.remove("open")
            crrIcon.classList.remove("minus_appear")
        } else {
            crrContents.classList.add("open")
            crrIcon.classList.add("minus_appear")
            crrContents.style.maxHeight = crrContents.scrollHeight + "px"
            faqContents.forEach((otherContents, conIndex) => {
                if (conIndex !== index) {
                    otherContents.style.maxHeight = 0;
                    otherContents.classList.remove("open")
                }
            })
            minus.forEach((otherMinus, minIndex) => {
                if (minIndex !== index) {
                    otherMinus.classList.remove("minus_appear")
                }
            })
        }

        console.log("clicked")
    })
})