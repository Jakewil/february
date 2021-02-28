function addrow(rownum,cellnum){
    var table=$("#tables")
    for (var i=0;i<rownum;i++){
        var tr=$("<tr></tr>")
        tr.appendTo(table)
    }
    for(var j=0;j<cellnum;j++)
    {
        if (j==0){
            var td=$("<td class=\"name\"></td>");
            td.appendTo(tr);
        }else
        if (j==3){
            var td=$("<td class=\"del\"><a href=\"#\">删除</a></td>");
            td.appendTo(tr);
        }else{
            var td=$("<td></td>");
            td.appendTo(tr);
        }
    }
    $('#body>tr:even').css('background','linear-gradient(to right,lightskyblue,white)');
    $('#body>tr:odd').css('background','white');
}
function search(){
    $(".name").css('color','black')
    var temp=$('#want').val();
    var names=$('.name').toArray();
   for (var i=0;i<names.length;i++){
       if (names[i].innerHTML==temp){
           $(names[i]).css('color','red');
           alert("已查询到，字体为红色");
           return true;
       }
   }
   alert("不存在");
}
$(function (){
    $('#body').on("click",".del",function (){
        $(this).parent().remove();
    })
})


