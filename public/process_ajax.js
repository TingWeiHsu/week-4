function handleAjax () {
    const xhttp = new XMLHttpRequest();
    let inputNum = document.getElementById("inputNum").value
    
    xhttp.open('GET', `http://localhost:3000/getData?number=${inputNum}`, true)
    
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
        document.getElementById("num").innerHTML = this.responseText
        }
    }
    
    xhttp.send()    
}