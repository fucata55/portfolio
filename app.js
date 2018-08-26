//feature: scroll on navigation click
let navItem = document.getElementsByClassName("nav-item")

for(let i = 0; i < navItem.length; i++) {
    let section
    switch(i) {
        case 0:
            section = document.getElementById("heroSection")
            break
        case 1:
            section = document.getElementById("aboutSection")
            break
        case 2:
            section = document.getElementById("projectSection")
            break
        case 3:
            section = document.getElementById("skillSection")
    }
    navItem[i].addEventListener("click", () => {
        section.scrollIntoView({behavior: "smooth"})
    })
}

// feature: fade in on view port

ScrollReveal().reveal("#heroSection")
ScrollReveal().reveal("#aboutSection")
ScrollReveal().reveal("#projectSection")
//delay reveal on bigger screens because content skillSection is smaller in bigger screen that the animation will not be seen.
window.innerWidth < 450 ? ScrollReveal().reveal("#skillSection") : ScrollReveal().reveal("#skillSection", {delay: 200})
