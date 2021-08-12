const textArea = document.getElementById("textarea");
const tagsEl = document.getElementById("tags");

textArea.focus();

textArea.addEventListener("keyup",(e)=>{
   createTags(e.target.value);

   if(e.key==="Enter"){
       setTimeout(()=>{
        e.target.value='';
       },10);
       randomSelect();
   }
});

function createTags(input){
    const tags = input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim());

    tagsEl.innerHTML= '';

    tags.forEach((tag)=>{
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
   
}

function randomSelect(){
    

    const interval = setInterval(()=>{
        const randomTag = pickRandomTag();
        highlight(randomTag);

        setTimeout(()=>{
            Unhighlight(randomTag);
        },100);
    },100);

    setTimeout(()=>{
        clearInterval(interval);

        setTimeout(()=>{
            const randomTag = pickRandomTag();
            highlight(randomTag);
        },100);
    },7000);

}

function pickRandomTag(){
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random()*tags.length)];
}

function highlight(tag){
    tag.classList.add("highlight");
}

function Unhighlight(tag){
    tag.classList.remove("highlight");
}