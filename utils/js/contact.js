ContactForm.onsubmit = async e => {
    e.preventDefault()
    let response = await fetch('https://eturkish.herokuapp.com/contact', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: NameInp.value,
            email: NameInp.value,
            phone: PhoneInp.value,
            subject: SubjectInp.value,
            message: MessageInp.value,
        })
    })

    console.log(await response.json())
    NameInp.value = null
    EmailInp.value = null
    PhoneInp.value = null
    SubjectInp.value = null
    MessageInp.value = null
}