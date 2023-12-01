var navAnchorTags=document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0;i<navAnchorTags.length;i++)
{
    navAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId);
        

        // interval=setInterval(scrollVertically(),50,targetSection)
        interval=setInterval(function(){
            scrollVertically(targetSection);
        },50)
       
    })
}
var scrollVertically=function(targetSection){
    var targetSectionCordinates=targetSection.getBoundingClientRect();
    if(targetSectionCordinates.top<=0)
    {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);

}


//skill bar filling animation 

var progressBars=document.querySelectorAll('.skill-progress > div');
var skillContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function inializeBars(){
    for(let bar of progressBars)
    {
        bar.style.width=0 + '%';
    }
}
inializeBars();
function fillbars(){
    for(let bar of progressBars)
    {
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth)
            {
                clearInterval(interval);
                return;
            }
            else{
                currentWidth++;
                bar.style.width=currentWidth + "%";
            }
        },3);
    
    }
}

function checkScroll(){
    var cordinates=skillContainer.getBoundingClientRect();
    if(!animationDone && cordinates.top <= window.innerHeight)
    {
        // console.log("inner section visible");
        animationDone=true;
        fillbars();
    
    }
    else if(cordinates.top > window.innerHeight)
    {
        animationDone=false;
        inializeBars();
    }
}

// Initialize EmailJS with your email service credentials
emailjs.init("vxwVatRwip0mHCh-K");

// Add an event listener to the send button
document.getElementById("send-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    var name = document.getElementById("input-name");
    var email = document.getElementById("input-email");
    var message = document.getElementById("input-message");

    // Define the email template parameters
    var templateParams = {
        from_name: name.value,
        from_email: email.value,
        message: message.value
    };

    // Send the email using EmailJS
    emailjs.send("service_tarog4s", "template_22236bb", templateParams)
        .then(function(response) {
            console.log("Email sent successfully!", response);
            alert('I will Contact You Soon!!!')
                name.value = "";
                email.value = "";
                message.value = "";
        })
        .catch(function(error) {
            console.error("Error sending email:", error);
            // Optionally show an error message
        });
});


