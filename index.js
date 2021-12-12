$(function () {
    $.get('A.csv', function (theData) {
        var data = $.csv.toObjects(theData);
        $.each(data,function(index, val){
            // console.log(val['HTML'])
            $("p").append(val['verb'])
            $("p").append(val['HTML'])
            // $(`h2.${val['verb']}`).html()
            // $.each(val, function(word, tree){
            //     // console.log(word,tree)
            //     $("h2").append(word)
            //     $("p").append(tree)
            // }); 
        });
    });
});
