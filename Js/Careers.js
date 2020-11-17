// Variables===============================================
let BarsMenus=document.querySelector('.fa-bars');
let navOverlay=document.querySelector('.navOverlay');
let AboutLink=document.querySelector('.AboutLink');
let Tstove=document.querySelector('#Tstove');
let TPellets=document.querySelector('#TPellets');
let TCustomer=document.querySelector('#TCustomer');
let StovesTabs=document.querySelector('.StovesTabs');
let CustomerTabs=document.querySelector('.CustomerTabs');
let PelletsTabs=document.querySelector('.PelletsTabs');


// Add Event Listener======================================
BarsMenus.addEventListener('click', ToggleSideMenus);
navOverlay.addEventListener('click', HideSideMenus);
AboutLink.addEventListener('click', TooggleSubmenus)
Tstove.addEventListener('click', FTstove);
TPellets.addEventListener('click', FTPellets);
TCustomer.addEventListener('click', FTCustomer);
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
function FTstove(){
    ActiveTabsD(Tstove);
    RemoveActiveTabs([TPellets,  TCustomer]);
    TabActive(StovesTabs);
    TabInActive([CustomerTabs, PelletsTabs]);
    StovesTabs.classList.add('AnimTabs');
}
function FTPellets(){
    ActiveTabsD(TPellets);
    RemoveActiveTabs([Tstove,  TCustomer]);
    TabActive(PelletsTabs);
    TabInActive([CustomerTabs, StovesTabs]);
}
function FTCustomer(){
    ActiveTabsD(TCustomer);
    RemoveActiveTabs([Tstove,  TPellets]);
    TabActive(CustomerTabs);
    TabInActive([StovesTabs, PelletsTabs]);
}
function ActiveTabsD(el){
el.classList.add('ActiveTabs');
}
function RemoveActiveTabs(el){
el.forEach((Lem)=>{
    Lem.classList.remove('ActiveTabs');
})
}

function TabActive(el){
    el.style.display='grid';
}
function TabInActive(el){
    el.forEach((Lem)=>{
        Lem.style.display='none';
    })
}