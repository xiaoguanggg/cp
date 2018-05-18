$(function(){
   var r = window.location.search;
   r = r.substring(r.indexOf("?")+1,r.length);
   ajaxgetAccount()
   // ajaxgetAccounttest()
})
// 测试
function ajaxgetAccounttest(){
  $.ajax({
    type:"POST",
    contentType: 'application/json;charset=utf-8',
    url:"http://192.168.1.179:8888/chain/getAccount",
    data: JSON.stringify({
         "account" : "huobi.pro"
        }),
      success:function(data){
         var account = data.data.account;
         var voteHistory = data.data.voteHistory;
         // console.log(account);
         // console.log(voteHistory);
         var r = window.location.search;
         r = r.substring(r.indexOf("?")+1,r.length);
         // alert("gg" + r);
         console.log(account);
         alert(typeof(account));
         $.each(account,function(index,item){
            //index指下标 
            //item指代对应元素内容 
            //this指代每一个元素对象 
            //console.log(obj.bkdata[index]); 
            console.log(item);  
            //console.log($(this))
            // if(r == this.address||r == this.nodeName){

          //     alert("cheng");

          //     var table6 = "";
          //        table6 += ' <ul class="clearfix">\
          //                   <li class="">\
          //                     <img src="http://www.eosforce.io/imgs/newlogotm.png" style="width:60px;height: 60px">\
          //                     <span class="fw">eos</span>\
          //                   </li>\
          //                   <li class="">\
          //                     <span class=""><label style="margin-right:10px">链用户名 :</label>'+ account.nodeName +'</span>\
          //                     <span class=""><label style="margin-right:10px">链地址 :</label>'+ account.address +'</span>\
          //                   </li>\
          //                 </ul>'
          //     $("#chain_addr").append(table6);
          //    // 投票
          //     var  table7 = "";
          //         table7 += '<table border="0" id="vote-lists">\
          //                       <tr class="block-tr" style="position: relative;">\
          //                         <th>投票历史</th>\
          //                       </tr>\
          //                       <tr class="tr-title">\
          //                         <th>时间</th>\
          //                         <th>开始抵押</th>\
          //                         <th>接触抵押</th>\
          //                         <th>节点投票</th>\
          //                         <th>提现利息</th>\
          //                         <th>币量</th>\
          //                       </tr>';
          //         for(var i=0;i<voteHistory.length;i++){

          //           //console.log(item[i].name);

          //               table7 += '<tr class="tr-dec">\
          //                 <td style="padding-left:15px">' + voteHistory[i].timestamp+ '</td>\
          //                 <td>' + voteHistory[i].stakedBalance + '</td>\
          //                 <td>' + voteHistory[i].stakingBalance + '</td>\
          //                 <td>' + voteHistory[i].voteToken + '</td>\
          //                 <td>' + voteHistory[i].profit + '</td>\
          //                 <td>' + voteHistory[i].supply + '</td><tr>';
          //         }
          //         table7 += '</table>';
          //     $("#vote-box").append(table7);

          //     // 信息
          //     var table_box = "";
          //         table_box += '<table border="0">\
          //                       <tr class="tr-title">\
          //                         <th>用户信息</th>\
          //                       </tr>\
          //                       <tr class="tr-dec">\
          //                         <td>用户名</td>\
          //                         <td class="fw">'+ account.nodeName +'</td>\
          //                         <td>用户地址</td>\
          //                         <td class="fw">'+ account.address +'</td>\
          //                       </tr>\
          //                       </table>\
          //                         <table border="0">\
          //                       <tr class="tr-title">\
          //                         <th>收益信息</th>\
          //                       </tr>\
          //                       <tr class="tr-dec">\
          //                         <td>历史总收益</td>\
          //                         <td class="fw">'+ account.profit +'</td>\
          //                         <td>未提取收益</td>\
          //                         <td class="fw" style="height:60px">'+ account.receiveProfit +'</td>\
          //                       </tr>\
          //                       </table>\
          //                       <table border="0">\
          //                       <tr class="tr-title">\
          //                         <th>动态信息</th>\
          //                       </tr>\
          //                       <tr class="tr-dec">\
          //                         <td>最新总余额</td>\
          //                         <td class="fw">'+ account.balance +'</td>\
          //                         <td>最新抵押币量</td>\
          //                         <td class="fw" style="height:60px">'+ account.stakedBalance +'</td>\
          //                       </tr>\
          //                       </table>'
          //      $("#user-box").append(table_box);
     
            // }else{
            //   alert("无结果")
            // }
         })
      },
      error: function(error) {
          console.log(error); //打印服务端返回的数据(调试用)
          alert(
              "异常:" +
              (error.responseJSON && error.responseJSON.desc ?
                  error.responseJSON.desc :
                  error.status)
          );
      },
  })
}

// 查询地址
function ajaxgetAccount(){
   $.ajax({
   type:"POST",
   contentType: 'application/json;charset=utf-8',
   url:"http://192.168.1.179:8888/chain/getAccount",
   data: JSON.stringify({
         "account" : "huobi.pro"
        }),
   success:function(data){
       console.log(data);
       var account = data.data.account;
       var voteHistory = data.data.voteHistory;
       console.log(account);
       console.log(voteHistory);
       var r = window.location.search;
       r = r.substring(r.indexOf("?")+1,r.length);
       var table6 = "";
           table6 += ' <ul class="clearfix">\
                          <li class="">\
                            <img src="http://www.eosforce.io/imgs/newlogotm.png" style="width:60px;height: 60px">\
                            <span class="fw">eos</span>\
                          </li>\
                          <li class="">\
                            <span class=""><label style="margin-right:10px">链用户名 :</label>'+ account.nodeName +'</span>\
                            <span class=""><label style="margin-right:10px">链地址 :</label>'+ account.address +'</span>\
                          </li>\
                        </ul>'
       $("#chain_addr").append(table6);
       // 投票
       var  table7 = "";
            table7 += '<table border="0" id="vote-lists">\
                          <tr class="block-tr" style="position: relative;">\
                            <th>投票历史</th>\
                          </tr>\
                          <tr class="tr-title">\
                            <th>时间</th>\
                            <th>开始抵押</th>\
                            <th>接触抵押</th>\
                            <th>节点投票</th>\
                            <th>提现利息</th>\
                            <th>币量</th>\
                          </tr>';
            for(var i=0;i<voteHistory.length;i++){

              //console.log(item[i].name);

                  table7 += '<tr class="tr-dec">\
                    <td style="padding-left:15px">' + voteHistory[i].timestamp+ '</td>\
                    <td>' + voteHistory[i].stakedBalance + '</td>\
                    <td>' + voteHistory[i].stakingBalance + '</td>\
                    <td>' + voteHistory[i].voteToken + '</td>\
                    <td>' + voteHistory[i].profit + '</td>\
                    <td>' + voteHistory[i].supply + '</td><tr>';
          }
          table7 += '</table>';
          $("#vote-box").append(table7);

        // 信息
        var table_box = "";
            table_box += '<table border="0">\
                          <tr class="tr-title">\
                            <th>用户信息</th>\
                          </tr>\
                          <tr class="tr-dec">\
                            <td>用户名</td>\
                            <td class="fw">'+ account.nodeName +'</td>\
                            <td>用户地址</td>\
                            <td class="fw">'+ account.address +'</td>\
                          </tr>\
                          </table>\
                            <table border="0">\
                          <tr class="tr-title">\
                            <th>收益信息</th>\
                          </tr>\
                          <tr class="tr-dec">\
                            <td>历史总收益</td>\
                            <td class="fw">'+ account.profit +'</td>\
                            <td>未提取收益</td>\
                            <td class="fw" style="height:60px">'+ account.receiveProfit +'</td>\
                          </tr>\
                          </table>\
                          <table border="0">\
                          <tr class="tr-title">\
                            <th>动态信息</th>\
                          </tr>\
                          <tr class="tr-dec">\
                            <td>最新总余额</td>\
                            <td class="fw">'+ account.balance +'</td>\
                            <td>最新抵押币量</td>\
                            <td class="fw" style="height:60px">'+ account.stakedBalance +'</td>\
                          </tr>\
                          </table>'
         $("#user-box").append(table_box);
   },
    error: function(error) {
          console.log(error); //打印服务端返回的数据(调试用)
          alert(
              "异常:" +
              (error.responseJSON && error.responseJSON.desc ?
                  error.responseJSON.desc :
                  error.status)
          )
    }

   })
}