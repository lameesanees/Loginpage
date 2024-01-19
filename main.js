login = () => {
    let username = uname.value
    let password = pswd.value

    if (!username || !password) {
        alert("Invalid Ceredentials. Login failed!!")
    } else {
        localStorage.setItem("username",username)
        localStorage.setItem("password",password)
        console.log(`Username:${username},Password:${password}`)
        window.location = "dashboard.html"
    }
}