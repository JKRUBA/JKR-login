function login() {
    var user = document.getElementById("typeEmailX").value;
    var pass = document.getElementById("typePasswordX").value;
    if(user == "Entri Elevate" && pass == "admin123") {
        window.location.assign("homepage.html")
        return false;
    } else {
        alert("password is incorrect");
        return false;
        }
    }
function pass(){
    let a=prompt("Enter the email:")
    alert("Verification code sent to your email")
}