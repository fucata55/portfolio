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
        // section.scrollIntoView(true)
        section.scrollIntoView({behavior: "smooth", block: "start"})
        // section.scrollBy(0, -60)
    })
}

// feature: fade in on view port
// delay reveal on bigger screens because content skillSection is smaller in bigger screen that the animation will not be seen.
ScrollReveal().reveal("header")
ScrollReveal().reveal("#heroSection")
ScrollReveal().reveal("#aboutSection")
ScrollReveal().reveal("#projectSection")
window.innerWidth < 450 ? ScrollReveal().reveal("#skillSection") : ScrollReveal().reveal("#skillSection", {delay: 200})
ScrollReveal().reveal("footer")


ScrollReveal({ distance: "80px"})
ScrollReveal().reveal("#heroSectionLink", {origin: "top"})
ScrollReveal().reveal("#aboutSectionLink", {origin: "top" , delay: "100"})
ScrollReveal().reveal("#projectSectionLink", {origin: "top" , delay: "200"})
ScrollReveal().reveal("#skillSectionLink", {origin: "top" , delay: "300"})
ScrollReveal().reveal(".gitHub-icon", {origin: "top" , delay: "400"})
ScrollReveal().reveal(".linkedIn-icon", {origin: "top" , delay: "500"})
ScrollReveal().reveal(".gmail-icon", {origin: "top" , delay: "600"})
ScrollReveal().reveal(".twitter-icon", {origin: "top" , delay: "700"})

ScrollReveal().reveal("#photoContainer", {origin: "left" , delay: "100"})
ScrollReveal().reveal("#aboutSoftwareContainer", {origin: "top" , delay: "200"})
ScrollReveal().reveal("#aboutBusinessContainer", {origin: "bottom" , delay: "300"})
ScrollReveal().reveal("#aboutOtherContainer", {origin: "bottom" , delay: "400"})

ScrollReveal().reveal("#gantt", {origin: "right" , delay: "100"})
ScrollReveal().reveal("#ppf", {origin: "right" , delay: "200"})
ScrollReveal().reveal("#ataNote", {origin: "right" , delay: "300"})
ScrollReveal().reveal("#exploRestaurant", {origin: "right" , delay: "400"})


let skillSection = document.getElementById("skillSection")
let skills = skillSection.getElementsByTagName("figure")
let delay = 0
for (let i = 0; i < skills.length; i++) {
    delay += 100
    let direction = i == 0 || i % 2 == 0? "top" : "bottom"
    ScrollReveal().reveal(skills[i], {origin: direction, delay: delay})
}

let footer = document.getElementsByTagName("footer")[0]
let footerContent = footer.getElementsByClassName("contact-link")
let delay2 = 0
for (let i = 0; i < footerContent.length; i++) {
    delay2 += 100
    ScrollReveal().reveal(footerContent[i], {origin: "top", delay: delay2})
}
