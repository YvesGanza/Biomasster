// Variables===============================================
let BarsMenus=document.querySelector('.fa-bars');
let navOverlay=document.querySelector('.navOverlay');
let AboutLink=document.querySelector('.AboutLink');


// Add Event Listener======================================
BarsMenus.addEventListener('click', ToggleSideMenus);
navOverlay.addEventListener('click', HideSideMenus);
AboutLink.addEventListener('click', TooggleSubmenus)

// Functions=============================================

function ToggleSideMenus(){
let SideBar=document.querySelector('.SideNav');
let navOverlay=document.querySelector('.navOverlay');
SideBar.classList.toggle('ToggleSideMenus');
navOverlay.classList.toggle('ToggleSideMenus');
}
function HideSideMenus(){
let SideBar=document.querySelector('.SideNav');
let navOverlay=document.querySelector('.navOverlay');
SideBar.classList.remove('ToggleSideMenus');
navOverlay.classList.remove('ToggleSideMenus');
}
function TooggleSubmenus(ev){
    ev.preventDefault();
    console.log('yes workins');
    let Sub=document.querySelector('.SubMenus');
    Sub.classList.toggle('ToggleSubMenus');

}