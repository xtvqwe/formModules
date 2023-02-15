//柱折通用
function line_bar(areaid,columns,ynames,series_data){
    var chartDom = document.getElementById(areaid);
    var myChart = echarts.init(chartDom);
    var option;
    var y_axis=[]
    if (ynames.length>2){
        console.log("too many yAxis !")
    }
    
    for (var i=0;i<2;i++){
        if (typeof(ynames[i])=="object"){
            var yname=ynames[i]['name']
            var yunit=ynames[i]['unit']
        }
        else{
            var yname=ynames[i]
            var yunit=''
        }
        y_axis.push({
            type: 'value',
            name: yname,
            axisLabel: {
                formatter: '{value}'+yunit
            }
        })
    } 
    var lgns=[]
    for(var i=0;i<series_data.length;i++){
        lgns.push(series_data[i]['name'])
    }
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
        toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
        legend: {
            data: lgns
          },
        xAxis: [
            {
                type: 'category',
                data: columns,
                axisPointer: {
                  type: 'shadow'
                }
              }
        ],
        yAxis: y_axis,
        series: series_data
    }
    option && myChart.setOption(option);
}
//饼图
function pie(areaid,piedata){
    var chartDom = document.getElementById(areaid);
    var myChart = echarts.init(chartDom);
    var option;
    option={
        tooltip: {
            trigger: 'item'
          },
        toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
        legend: {
            left: 'center'
          },
        series: [
            {
              type: 'pie',
              radius: '80%',
              data: piedata   
            }
        ]
    }
    option && myChart.setOption(option);

}
//表格
function table_data(areaid,series_data){
    var ele = document.getElementById(areaid)
    var ele_c=ele.children
    for(var i=ele_c.length-1;i>=0;i--){
        ele.removeChild(ele_c[i])
    }
    var div_ele=document.createElement("div")
    var download_ele=document.createElement("button")
    download_ele.setAttribute("onclick","download_csv()")
    download_ele.setAttribute("id","download")
    download_ele.innerText="DOWNLOAD"
    div_ele.appendChild(download_ele)
    var table = document.createElement("table")
    table.setAttribute("id","table_ele")
    table.setAttribute("style","width:100%;")
    var thr_ele = document.createElement("tr")
    var row_num=0
    for(var i=0;i<series_data.length;i++){
        var thr_ele=document.createElement("th")
        thr_ele.innerHTML=series_data[i]["name"]
        table.appendChild(thr_ele)
        if(series_data[i]["data"].length>row_num){
            row_num=series_data[i]["data"].length
        }
    }
    for(var i=0;i<row_num;i++){
        var tr_ele=document.createElement("tr")
        for(var j=0;j<series_data.length;j++){
            var td_ele=document.createElement("td")
            if(series_data[j]["data"][i]){
                td_ele.innerText=series_data[j]["data"][i]
            }
            tr_ele.appendChild(td_ele)
        }
        table.appendChild(tr_ele)
    }
    div_ele.appendChild(table)
    ele.appendChild(div_ele)
}
//下载表格
function download_csv(){
    var table_ele=document.getElementById("table_ele")
    var str_data=""
    var rows=table_ele.children
    var th_data=[]
    var tr_str=""
    for(var i=0;i<rows.length;i++){
        if(rows[i].tagName=="TH"){
            th_data.push(rows[i].innerText)
        }
        else{
            var cells=rows[i].children
            var row_data=[]
            for(var j=0;j<cells.length;j++){
                row_data.push(cells[j].innerText)
            }
            if(row_data!=[]){
                var row_str=row_data.join(",")+"\n"
                tr_str+=row_str
            }
        }
    }
    var th_str=th_data.join(",")+"\n"
    str_data=th_str+tr_str
    
    const link = document.createElement('a');
    link.href = `data:text/csv;charset=utf-8,\ufeff${encodeURIComponent(str_data)}`;
    link.download = `table_data.csv`;
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
}
