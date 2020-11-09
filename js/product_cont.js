$(function(){
    //start data.json
    $.ajax({
        url:'/data.json',
        type:'GET',
        success:function(data){
            console.log($(data).find('Product src'))
            var Product = '',src,name,price;
            
        }
    })
    //end
})






/*$(document).ready(function(){
    $.getJSON('/data.json',function(data){
        var content = [];
        var page = [];
        
        $.each(data, function(i,item){
            console.log(item.Product.length);
            
            for(var num = 0; num < item.Product.length; num++){
                content.push('<li class="product">');
                content.push('<div class="imgD"><img src="'+item.Product.src+'"></div>');
                content.push('<h3 class="name">'+item.Product.name+'</h3>');
                content.push('<p class="price">'+item.Product.price+'</p>');
                content.push('</li>');
            }
        });
        $('#Shop .Content_box ul').after(content);
    });
});

*/
                       
                        
                        
                   