var showModalTimeout = 1*60*1000;
var askModal;
$(document).ready(function(){
    // Load model ask
    $("#ask-modal").load("ask.html", ()=>{
        askModal = new bootstrap.Modal(document.getElementById('ask-modal'), { backdrop: 'static'})
        setTimeout(()=>{ askModal.show() }, showModalTimeout)
    })
});