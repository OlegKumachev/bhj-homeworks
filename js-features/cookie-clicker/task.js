
cookie.onclick = () => {
    const cookie = document.getElementById('cookie')
    const countnew = document.getElementById('clicker__counter')
    if (cookie.width === 200){
        cookie.width += 20
    }
    else if (cookie.width === 220) {
        cookie.width -= 20
    }

    
    countnew.textContent = Number(countnew.textContent) + 1
    
    } 
    