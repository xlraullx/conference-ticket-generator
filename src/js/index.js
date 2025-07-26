const form = document.querySelector('#ticketForm')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(e.target);    
    let isValid = true
    const imageError = document.getElementsByClassName('upload-info')[0]
    const errorText = imageError.children[1]
    
    const image = data.get("avatar")
    if (imageInvalid(image)) {
        imageError.classList.add('error')
        isValid = false;
    } else if (imageSizeInvalid(image)) {
        imageError.classList.add('error')
        errorText.innerText = 'File too large. Please upload a photo under 500KB';
        isValid = false;
    } else {
        imageError.classList.remove('error')
        errorText.innerText = 'Upload your photo (JPG or PNG, max size: 500KB).';
    }
    
    const fieldName = document.getElementsByClassName('error-text name')
    const name = data.get("name");
    if (fieldInvalid(name)){
        fieldName[0].style.display = 'flex';
        isValid = false;
    }else{
        fieldName[0].style.display = 'none';
    }
    
    const emailError = document.getElementsByClassName('error-text email')
    const email = data.get("email");
    if (emailInvalid(email)){
        emailError[0].style.display = 'flex';
        isValid = false;
    }else{
        emailError[0].style.display = 'none';
    }
    
    const GitHubUserNameError = document.getElementsByClassName('error-text githubUserName')
    const gitHubUserName = data.get('githubUserName');
    if (fieldInvalid(gitHubUserName)){
        GitHubUserNameError[0].style.display = 'flex';
    }else{
        GitHubUserNameError[0].style.display = 'none';
    }
})

const emailInvalid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(email);

}

const fieldInvalid = (field) => {
    if (field === "" || typeof field !== "string"){
        return true
    }else return false
}

const imageInvalid = (image) => {
    if((image.name == "" && image.size === 0) || image.size === 0){
        return true
    }else return false
}

const imageSizeInvalid = (image) => {
    if(image.size > 512000){
        return true
    }else return false
}
