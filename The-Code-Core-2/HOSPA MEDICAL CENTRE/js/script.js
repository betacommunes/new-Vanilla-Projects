
// function to render reusable components in index page


function renderReusableComponents(url , targetSelector){

    try{

        const targetElement = document.querySelector(targetSelector);

        if(!targetElement){

            throw new Error(`Relevant Target Selector Has Not Been Found`);
        }

        const getComponentHtml = fetch(`components/${url}`);
                
        getComponentHtml.then((response) => {

            if(!response.ok){
                        
                throw new Error(`${response.status} Error Has Been Occurred`);
        
            }

            const result = response.text();

            return result;

        })
        .then((componentHtml) => {

            targetElement.innerHTML = componentHtml;

        })
        .catch((error) => {

            console.log(error.message);

        })

    }

    catch(error){

        console.log(error.message);
    }

}
   

renderReusableComponents("header-top/header-top.html" , "#headerTop-section");

renderReusableComponents("header-main/header-main.html" , "#headerMain-section");

renderReusableComponents("footer/footer.html" , "#footer-section");




// // waiting for the sidebar to load properly //

// setTimeout(() => {

//     // dynamic nav section //

//     const navItems = ["home" , "about us" , "gallery" , "contact us"];

//     const sideBar = document.querySelector(".sidebar");

//     const navBar = document.querySelector(".Navbar");

//     // function to make nav section dynamic //

//     const navSection = (style) => {

//         navItems.forEach(navItem => {

//             const newPageLinks = document.createElement("a");

//             newPageLinks.innerText = navItem;

//             newPageLinks.setAttribute("href" , "");

//              newPageLinks.setAttribute("data-name" , navItem);

//             const newPageItems = document.createElement("li");

//             if(style === "vertical"){

//                 newPageLinks.classList.add("page-links");

//                 newPageLinks.classList.remove("nav-links");

//                 newPageItems.classList.add("page-items");

//                 newPageLinks.classList.remove("nav-items");

//                 newPageItems.append(newPageLinks);

//                 sideBar.append(newPageItems);

//             }

//             else{

//                 newPageLinks.classList.add("nav-links");

//                 newPageLinks.classList.remove("page-links");

//                 newPageItems.classList.add("nav-items");

//                 newPageLinks.classList.remove("page-items");

//                 newPageItems.append(newPageLinks);

//                 navBar.append(newPageItems);

//             }

//         })
     
//     }

//     navSection("vertical");

//     navSection("horizontal");

// } , 100)


// // function when windows load home page appears //

// const mainContent = document.querySelector("#main-section");

// async function loadPage(url){

//     try{

//         const response = await fetch(`../pages/${url}`);
        
//         if(!response.ok){

//             throw new Error(`${response.status} Error Has Been Occurred!`);
//         }

//         const homeHtml = await response.text();

//         mainContent.innerHTML = homeHtml ;

//     }

//     catch(error){

//         console.log(error.message);
//     }
// }


// loadPage("home/home.html")


// // handle different page contents on navbar click //

// const navbarSection = document.querySelector("#navbar-section");

// function handleNavbarEvent(){

//    navbarSection.addEventListener("click" , function(event){

//     event.preventDefault();

//     if(event.target.classList.contains("nav-links")){

//         const pageName = event.target.dataset.name;

//         loadPage(`${pageName}/${pageName}.html`);
//     }

//    });
// }


// handleNavbarEvent()



// function to make dynamic html elements //


const footerContents = [

    {
        title: "Community",

        links: ["Doctors" , "Testimonials" , "FAQs" , "Blog" , "Site Map"]
    },

    {
        title: "About",

        links: ["Careers" , "Education" , "About Us" , "Area Of Care" , "Volunteers"]
    },

    {
        title: "Support",

        links: ["Visitor Information" , "Emergency Care" , "Donate" , "Online Services" , "Pay Your Bills"]
    },

    {
        title: "Trust & Legal",

        links: ["Terms & Conditions" , "Privacy Policy" , "Hospital Stay"],

        MediaLink:{

            title: "Social Media",

            icons: ["fa-facebook-f" , "fa-x-twitter" , "fa-instagram" , "fa-linkedin-in"]
        }
    }

];

const navbarContents = ["home" , "about us" , "blog" , "contact us"];

let html1 = "";

let html2 = "";

let htmlFooter = "";

setTimeout(() => {

    function renderNavbar(elementData , targetSelector){

        const targetElement = document.querySelector(targetSelector);

        try{

            if(!targetElement){

                throw new Error("target element not been found");
            }

            else if(!(typeof elementData === "object" || typeof elementData === "array")){

                throw new Error("data of element not found");
            }
        
        elementData.map(function(Data , index){

            if(targetSelector === "#desktop-navbar"){

                if(index === 0){

                    html1 += `<li class='nav-item'><a href="#" class='nav-link active'>${Data}<a></li>`;
                }

                else{

                    html1 += `<li class='nav-item'><a href="#" class='nav-link'>${Data}<a></li>`;

                    targetElement.innerHTML =  html1;
                }
                
                
            }

            else{

                if(index === 0){

                    html2 += `<li class='nav-item'><a href="#" class='nav-link active'>${Data}<a></li>`;
                }

                else{

                    html2 += `<li class='nav-item'><a href="#" class='nav-link'>${Data}<a></li>`;

                    targetElement.innerHTML =  html2;
                }
            }

        })

        }

        catch(error){

            console.log(error.message);

        }

    }

    renderNavbar(navbarContents , "#desktop-navbar")

    renderNavbar(navbarContents , "#mobile-navbar")

    const footerSection = document.querySelector(".footer-section");

    function renderFooterLinks(){

       htmlFooter  += "<div class='row'>";

        footerContents.forEach((footerContent , index) => {

            htmlFooter  += `<div class='col-sm-6 col-md-6 col-lg-3 footer-links' id='footer-link${index + 1}'>
                        <h3>
                            ${footerContent.title}
                        </h3>
                        <ul>

                    `;

            footerContent.links.forEach((link) => {

                htmlFooter  += `<li><a href="#">${link}</a></li>`;
            })

            if(index === footerContents.length - 1){

                htmlFooter  += `<div class='social-links'>
                            <span>${footerContent.MediaLink.title}</span>
                        <ul>
                        
                        `;
                
                footerContent.MediaLink.icons.forEach((icon) => {

                    htmlFooter  += `<a href="#"><i class='fa-brands ${icon} footer-icons'></i></a>`;

                })

                htmlFooter += "</ul>";

                htmlFooter  += "</div>";
                
            }

            htmlFooter  += "</ul>";

            htmlFooter  += "</div>";
        })

        htmlFooter  += "</div>"

        footerSection.innerHTML = htmlFooter;
    }

    renderFooterLinks()

} , 100)



