class Ejercicio10{
    constructor(){

    }

    getNews(){
        var result= new Object();
        result.url="https://content.guardianapis.com/search?";
        result.url+="api-key=61926119-b31a-49c3-b2d2-f693537f90c3";
        result.url+="&show-fields=thumbnail,trailText";
        result.onSuccess=this.onSuccess.bind(this);
        result.onError=this.onError.bind(this);
        $.ajax({
            dataType:"json",
            url:result.url,
            method:"GET",
            success:(data) => {
                result.data=data;  
                result.onSuccess(result);},
            error:()=>{
                result.onError(error);
            }
        })


    }

    onSuccess(result){
       var str="";
       str+="<h2>Últimas noticias</h2>";
       var response=result.data.response;
       for(var i=0; i<response.pageSize;i++){
        var item=response.results[i];
        str+="<section class='news'>";
        str+="<h3 class='newsHeader'>" +item.webTitle +"</h3>";//titulo
        str+="<p class='newsSubtitle'>" +item.sectionName +". "+ item.webPublicationDate +"</p>";//subtitle

        str+="<div class='thumbnail'>"+"<img class='thumbnailImg' alt='imagen' src='"+item.fields.thumbnail+"'/>" //imagen
        str+= "</div>";
        str+="<div class='trailText'><p>"+ item.fields.trailText+ "(<a href='" +item.webUrl+ "'>Read more</a>)"
        str+="</p>";
        str+= "</div>";

        
        str+="</section>";
       }
       $("#result").html(str);
    }

    onError(result){
        $("#result").html("<h2>Error</h2> <p> No se pueden visualizar las noticias </p>");
    }


}

var ej10=new Ejercicio10();
ej10.getNews();