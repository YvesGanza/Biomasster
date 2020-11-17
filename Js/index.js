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
window.addEventListener('scroll', ()=>{
    let content=document.querySelector('.PartnersCont');
    let contentPosition=content.getBoundingClientRect().top;
    let screenPosition=window.innerHeight/1.1;
    if(contentPosition<screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
    });

    // Videos =============================================================
    let output='';
fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyBOqry8aC7uz7kVVpUFuXpTK-41lm8W-zA&type=video&playlistId=PLtHv01_T7w3_t_gVvv6d3ZLQDx5ux1Ou_&maxResults=6")
.then((respo)=> respo.json())
.then((Jsdata)=>{
    let VideosData=Jsdata.items;
    VideosData.forEach(element => {
        let videos=element.snippet.resourceId.videoId
        output+=`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videos}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
    });
    document.querySelector('.videosBoxes').innerHTML=output;
});