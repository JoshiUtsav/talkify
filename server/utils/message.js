let generateMessage = (form, text) => {
    return {
        form,
        text,
        createdAt: new Date().getTime()
    }
}

module.exports = { generateMessage }