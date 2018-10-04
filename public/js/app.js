$( document ).ready(function (){
    $.get('/api/articles', function(data){
        fillItUp(data);
    });
});

const fillItUp = data =>{
    $('#articles').empty();
        data.forEach(element => {
            console.log(element);
            let story = `
            <div class="row story" id="${element._id}">
                <div class="col s6">
                    <a href="${element.link}" target="_blank"><h4>${element.title}</h4></a>
                </div>
                <div class="col s3"><img class="storyImg" src="${element.image}"/></div>
                <div class="col s3">
                    <h5 class="saveBtn">Save for Later 
                    <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </h5>
                </div>
                
            </div>
            `;
            $('#articles').append(story);    
    });
};

const update = () =>{
    $.get('/api/scrape', function(data){
        fillItUp(data);
    });
};