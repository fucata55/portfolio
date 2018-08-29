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
// delay reveal on bigger screens because content in skillSection is smaller in bigger screen that the animation will not be seen.
ScrollReveal().reveal("header")
ScrollReveal().reveal("#heroSection")
ScrollReveal().reveal("#aboutSection")
ScrollReveal().reveal("#projectSection")
window.innerWidth < 450 ? ScrollReveal().reveal("#skillSection") : ScrollReveal().reveal("#skillSection", {delay: 200})
ScrollReveal().reveal("footer")


let parentList = [
    document.getElementsByTagName("nav")[0],
    document.getElementById("heroSection"),
    document.getElementById("aboutSection"),
    document.getElementById("projectSection"),
    document.getElementById("skillSection"),
    document.getElementsByTagName("footer")[0],
]

function toReveal(parentList) {
    
    // Set "mobile" to false by default is causing "distance" not applied on mobile
    ScrollReveal({distance: "80px", mobile: false})

    let parents = parentList
    parents.forEach(parent => {
        if (parent.getAttribute("role") === "navigation") {
            let theChildren = parent.getElementsByTagName("li")
            let delay = 0
            Array.from(theChildren).forEach(child => {
                delay += 100
                ScrollReveal().reveal(child, {origin: "top", delay: delay})
            })
        }
        else if (parent.getAttribute("id") === "heroSection") {
            let theChildren = parent.getElementsByTagName("a")
            let delay = 400
            Array.from(theChildren).forEach(child => {
                delay += 100
                ScrollReveal().reveal(child, {origin: "top", delay: delay})
            })
        }
        else if (parent.getAttribute("id") === "aboutSection") {
            let theChildren = parent.getElementsByClassName("main-container")[0].getElementsByTagName("div")
            let delay = 0
            let origin = ["left", "top", "bottom", "right"]
            Array.from(theChildren).forEach((child, i) => {
                delay += 100
                ScrollReveal().reveal(child, {origin: origin[i], delay: delay})
            })
        }
        else if (parent.getAttribute("id") === "projectSection") {
            let theChildren = parent.getElementsByClassName("project")
            let delay = 0
            Array.from(theChildren).forEach(child => {
                delay += 100
                ScrollReveal().reveal(child, {origin: "right", delay: delay})
            })
        }
        else if (parent.getAttribute("id") === "skillSection") {
            let theChildren = parent.getElementsByTagName("figure")
            let delay = 0
            Array.from(theChildren).forEach((child, i) => {
                let origin = i == 0 || i % 2 == 0? "top" : "bottom"
                delay += 100
                ScrollReveal().reveal(child, {origin: origin, delay: delay})
            })
        }
        else if (parent.getAttribute("role") === "complementary") {
            let theChildren = parent.getElementsByTagName("a")
            let delay = 0
            Array.from(theChildren).forEach(child => {
                delay += 100
                ScrollReveal().reveal(child, {origin: "top", delay: delay})
            })
        }
        else {
            console.log("error: section not identified")
        }
    })
}

toReveal(parentList)
