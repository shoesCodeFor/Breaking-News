$( document ).ready(function (){
    $.get('/api/articles', function(data){
        $('#articles').empty();
        data.forEach(element => {
            console.log(element);
            let story = `
            <div class="row" id="${element._id}">
                <div class="col s8">
                    <a href="${element.link}" target="_blank"><h4>${element.title}</h4></a>
                </div>
                <div class="col s4"><img src="${element.image}"/></div>
            </div>`;
            $('#articles').append(story);    
        });
    });
});