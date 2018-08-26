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
        console.log(section)
        section.scrollIntoView({behavior: "smooth"})
    })
}
