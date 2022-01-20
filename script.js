var shoplist={};

shoplist.name= "My Buylist 電腦周邊購物清單";
shoplist.time= "2021/11/24";
shoplist.list=[
  {name: "電競滑鼠", price: 900},
  {name: "桌上型麥克風", price: 1600},
  {name: "筆記型電腦", price: 35000},
  {name: "桌上型電腦", price: 45000},
  {name: "電競鍵盤", price: 4000}
];

var item_html="<li id={{id}} class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{del_id}} datadel-id={{deled}} class='del_btn'>X</div></li>"

var total_html="<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>"

function showlist(){
  $("#items_list").html("");
  var total_price=0;
  for(var i=0;i<shoplist.list.length;i++){
    var item=shoplist.list[i];
    var item_id="buyitem_"+i;
    var del_item_id="del_buyitem_"+i;
    total_price+=parseInt(item.price);
    var current_item_html=
        item_html.replace("{{num}}",i+1)
                 .replace("{{item}}",item.name)
                 .replace("{{id}}",item_id)
                 .replace("{{del_id}}",del_item_id)
                 .replace("{{price}}",item.price)
                 .replace("{{deled}}",i)
    ;
    $("#items_list").append(current_item_html);
    $("#"+del_item_id).click(
      function(){
        remove_item($(this).attr("datadel-id"));
      }
    );
  }
  var current_total_html=
      total_html.replace("{{price}}",total_price);
  $("#items_list").append(current_total_html);
}
showlist();

$(".addbtn").click(
  function(){
    shoplist.list.push(
      {
        name: $("#input_name").val(),
        price: $("#input_price").val()
      }
    );   
    $("#input_name").val("");
    $("#input_price").val("");
    showlist();
  }
);

function remove_item(id){
  shoplist.list.splice(id,1);
  showlist();
}