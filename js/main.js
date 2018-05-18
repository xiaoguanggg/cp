

// function sendRequestWithoutToken(option) {
//     option.type = option.type || "GET";
//     // 追加服务器地址
//     option.url = apiUrl + option.url;
//     // 添加默认headers
//     option.headers = option.headers || {};
//     option.headers["content-type"] = "application/json";
//     // 设置默认数据类型
//     option.dataType = option.dataType || "json";
//     // 异常处理
//     originError = option.error;
//     option.error = function(error) {
//         if (!originError) {
//             // 默认错误处理函数
//             console.log(error);
//             alert(
//                 "异常:" +
//                 (error.responseJSON && error.responseJSON.desc ?
//                     error.responseJSON.desc :
//                     error.status)
//             );
//         } else {
//             originError(error);
//         }
//     };
//     $.ajax(option);
// }

// 节点排名
$(function(){
  console.log("dd")
  ajaxT();
  chain_detail();
  // ajaxgg()
});
// // 调试用
// function ajaxgg(){
//    alert("gg")
//    $.ajax({
//    type:"POST",
//    url:"http://192.168.1.146/v1/chain/get_block",
//    data: JSON.stringify({
//            block_num_or_id: 5
//         }),
//    success:function(data){
//        alert(data);
//        console.log(data)
//    },
//     error: function(error) {
//           console.log(error); //打印服务端返回的数据(调试用)
//           alert(
//               "异常:" +
//               (error.responseJSON && error.responseJSON.desc ?
//                   error.responseJSON.desc :
//                   error.status)
//           )
//     }

//    })
// }
// 首页节点
function ajaxT(){
 $.ajax({
   type:"GET",
   contentType: 'application/json;charset=utf-8',
   url:"http://192.168.1.179:8888/chain/nodeRank",
   success:function(data){
      // var data = JSON.stringify(data)
      var item = data.data
      for(var i=0;i<item.length;i++){
         var htm = "";
         htm +='<div class="col-md-12"><ul class="clearfix">\
                    <li class="node"><a href="chain.html"><img src="http://www.eosforce.io/imgs/newlogotm.png"><span class="node-title chainName">' + item[i].chainName+'</span></a></li>\
                    <li class="node"><span class="">节点排名</span><span class="node-rank">' + item[i].rank + '</span></li>\
                    <li class="node"><span class="">得票数</span><span class="voteToken">' + item[i].voteToken + '</span></li>\
                    <li class="node"><span class="">昨日出块数</span><span class="ydBlock">' + item[i].ydBlock + '</span></li>\
                    <li class="node"><span class="">昨日奖励</span><span class="ydAward">' + item[i].ydAward + '</span></li>\
                    <li class="node"><span class="">用户数</span><span class="account">' + item[i].account + '</span></li>\
                    <li class="node"><span class="">年化利率</span><span class="yrBonusScale">' + item[i].yrBonusScale + '</span></li>\
                    <li class="node"><span class="">万币收益</span><span class="profit">' + item[i].profit + '</span></li>\
                    <li class="node"> <span class="">币价</span><span class="price">' + item[i].price + '</span></li>\
                </ul></div>'
      }
      $("#pos-row").append(htm);
   },
    error: function(error) {
          console.log(error); //打印服务端返回的数据(调试用)
          console.log(
              "异常:" +
              (error.responseJSON && error.responseJSON.desc ?
                  error.responseJSON.desc :
                  error.status)
          );}
 });
}
// 链
function chain_detail(){
   $.ajax({
   type:"POST",
   contentType: 'application/json;charset=utf-8',
   url:"http://192.168.1.179:8888/chain/detail",
   data: JSON.stringify({
           seq : 1
        }),
   success:function(data){
      // var data = JSON.stringify(data)
      var chain = data.data;
      var node = chain.node;
      var blocks = chain.blocks;
       // 节点信息
      var table1 = "";
      table1 += '<table border="0">\
                      <tr class="tr-title"><th>节点信息</th></tr>\
                      <tr class="tr-dec"><td>用户名</td><td class="user-name">' + node.nodeName + '</td><td>地址</td><td class="user-addr">' +node.address +'</td></tr>\
                </table>'
       $("#node-dec").append(table1);
       // 用户信息
       var table2 = "";
       table2 +='<table border="0">\
                      <tr class="tr-title"><th>用户相关信息</th></tr>\
                          <tr class="tr-dec">\
                            <td>用户数</td>\
                            <td class="">'+ node.account +'<span class="fr">人(待定)</span></td>\
                            <td>投票年化利率</td>\
                            <td class="">'+ node.yrScale +'</td>\
                            <td class="">万币收益</td>\
                            <td class="">\
                              <p class="fl fz"><span>'+ node.profitVolume +'</span>(币数)</p>\
                              <p class="fl fz" style="text-align: right;"><span>'+ node.profitVolume +'</span>(RMB)</p>\
                            </td>\
                          </tr>\
                      </table>'
        $("#user-dec").append(table2);
        // 基本信息
        var table3 = "";
        table3 +='<table border="0">\
                      <tr class="tr-title"><th>节点基本信息</th></tr>\
                      <tr class="tr-dec">\
                        <td><span>排名</span><span>'+node.rank+'</span></td>\
                        <td><span>得票数</span><span>'+node.token+'</span></td>\
                        <td><span>昨日出块数</span><span>'+node.ydBlock+'</span></td>\
                        <td><span>昨日完成度</span><span>'+node.ydScale+'</span></td>\
                        <td><span>分红比例</span><span>'+node.bonusScale+'</span></td>\
                        <td><span>佣金比例</span><span>'+node.ommissionScale+'</span></td>\
                      </tr>\
                  </table>'
        $("#chain").append(table3);

        var table4 = "";
        table4 +='<div class="col-md-12"><ul class="clearfix">\
                       <li class="node-title-box">\
                        <img src="http://www.eosforce.io/imgs/newlogotm.png" style="width:50px;height: 50px">\
                        <span class="node-title fz">eos</span>\
                        <span class="">全链年化通胀率</span>\
                        <span class="fz">'+node.yrInflation+'</span>\
                      </li>\
                      <li class="node">\
                        <span class="">发行总量</span>\
                        <span class="fz">'+node.totalSupply+'</span>\
                        <span class="">昨日发行量</span>\
                        <span class="fz">'+node.ydSupply+'</span>\
                      </li>\
                      <li class="node">\
                        <span class="">总投票量</span>\
                        <span class="fz">'+node.token+'</span>\
                        <span class="">币美元单价</span>\
                        <span class="fz">'+node.price+'</span>\
                      </li>\
                      <li class="node">\
                        <span class="">投票参与率</span>\
                        <span class="fz">'+node.voteScale+'</span>\
                        <span class="">昨日发行市值</span>\
                        <span class="fz">'+node.volume+'</span>\
                      </li>\
                </ul></div>'
        $("#pos-box").append(table4);
        // 区块
         var  table5 = "";
              table5 += '<table border="0" id="block-lists">\
                            <tr class="tr-title">\
                              <th>块高度</th>\
                              <th>时间戳</th>\
                              <th>块奖励</th>\
                              <th>手续费</th>\
                            </tr>';
              for(var i=0;i<blocks.length;i++){

                //console.log(item[i].name);

                    table5 += '<tr class="tr-dec">\
                      <td style="padding-left:15px">' + blocks[i].blockNumber+ '</td>\
                      <td>' + blocks[i].timestamp + '</td>\
                      <td>' + blocks[i].award + '</td>\
                      <td>' + blocks[i].commision + '</td><tr>';
            }
            table5 += '</table>';
            $("#block-box").append(table5);
      // createShowingUl(data);
   },
    error: function(error) {
          console.log(error); //打印服务端返回的数据(调试用)
          console.log(
              "异常:" +
              (error.responseJSON && error.responseJSON.desc ?
                  error.responseJSON.desc :
                  error.status)
          );}
 });
}
// 查询区块接口
function ajaxgetBlock(){
   $.ajax({
   type:"POST",
   contentType: 'application/json;charset=utf-8',
   url:"http://192.168.1.179:8888/chain/getBlock",
   data: JSON.stringify({
           blockNumber: 100
        }),
   success:function(data){
       console.log(data)
   },
    error: function(error) {
          console.log(error); //打印服务端返回的数据(调试用)
          console.log(
              "异常:" +
              (error.responseJSON && error.responseJSON.desc ?
                  error.responseJSON.desc :
                  error.status)
          )
    }

   })
}

//回车快捷区块查询查询  
$(function(){
    $(".block-search").keypress(function (e) { 
         var keyCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;  
          if (keyCode == 13){  
              var blockkeyword = $("#block-search").val();
              if(blockkeyword == ""){
                alert("不能为空")
              }else{
                   alert(blockkeyword);
                   console.log(blockkeyword);
                   var blockkeyword = $.trim(blockkeyword);
                   // window.location.href = 'index.html' + "?" +blockkeyword;
                   ajaxgetBlock()
              }
          }
    })
  })
// 查询用户 ajaxgetBlock()
$(function(){
    $(".addr-search").keypress(function (e) { 
         var keyCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;  
          if (keyCode == 13){  
              var addrkeyword = $("#addrkeyword").val();
              if(addrkeyword == ""){
                alert("不能为空")
              }else{
                   alert(addrkeyword);
                   var addrkeyword = $.trim(addrkeyword);
                   window.location.href = 'node.html' + "?" +addrkeyword;
              }
          }
    })
  })
// // 跳转
// function searchurl(){
//      var addrkeyword = $("#addrkeyword").val();
//      var account = data.data.account;
//       $.each(account,function(i){
//           //alert(this.name);
//           if(addrkeyword == this.address||addrkeyword == this.nodeName){
//             alert("成功");
//             window.location.href = "/cp/node.html";
//             window.reload();
//             ajaxgetAccount()
//           }
//       })
// }