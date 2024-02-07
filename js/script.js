const searchBtn = document.getElementById("searchbtn");
        
searchBtn.addEventListener('click', function(){
    searchBtn.classList.toggle('fa-xmark');
});




const sr = ScrollReveal ({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('.name-img', {delay:90, origin:'top'})
sr.reveal('.trailer', {delay:100, origin:'top'}) 