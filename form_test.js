
//表单插入数据-演示用
function new_form(){
    window_o()
    var content = document.getElementById("winContent")
    content.innerHTML=""
    input_ele(content,{"name":"输入","nes":"*","dataType":"input"},"nItem")
    input_ele(content,{"name":"输入","nes":"","dataType":"input"},"nItem")
    input_ele(content,{"name":"输入","nes":"","dataType":"input"},"nItem")
    selects_s_ele(content,{"name":"单选菜单","nes":"","dataType":"menu_s","selects":[{"value":"select1","text":"text1"}]},"wItem")
    selects_m_ele(content,{"name":"多选菜单","nes":"","dataType":"menu_m","selects":[{"value":"select1","text":"text1"}]},"nItem")
    input_ele(content,{"name":"输入","nes":"","dataType":"input"},"nItem")
    selects_m_ele(content,{"name":"多选菜单","nes":"","dataType":"menu_m","selects":[{"value":"select1","text":"text1"}]},"nItem")
    selects_m_ele(content,{"name":"多选菜单","nes":"","dataType":"menu_m","selects":[{"value":"select1","text":"text1"}]},"nItem")
    selects_m_ele(content,{"name":"多选菜单","nes":"","dataType":"menu_m","selects":[{"value":"select1","text":"text1"}]},"nItem")
    selects_m_ele(content,{"name":"多选菜单","nes":"","dataType":"menu_m","selects":[{"value":"select1","text":"text1"}]},"wItem")
    code_input(content,{"name":"代码输入","nes":"","dataType":"c_input","configs":{"lang":"sql","id":"editor"}})
}

//自动打开设置窗口-演示用
setTimeout(function(){new_form()},1000)

/***********************************************************************/
//图表测试数据

var areaid="show_area"

//matrix_array=[["col_A","col_B","col_C"],["1","2","3"]]
//table_data(areaid,matrix_array)

var columns=["a","b","c"]
var ynames=[{"name":"y1","unit":" ml"},{"name":"y2","unit":" g"}]
var ynames=["y1","y2"]

var series_data=[
    {
        name:"s1",
        type: "line",
        data: [1,2,2]
    },
    {
        name:"s3",
        type: "bar",
        yAxisIndex: 1,
        data: [1,2,2]
    },
    {
        name:"s2",
        type: "bar",
        yAxisIndex: 1,
        data: [2,3,4]
    }
]

//table_data(areaid,series_data)

var piedata=[
    {"name":"a1","value":5},
    {"name":"a2","value":4},
    {"name":"a3","value":3}
]
//pie(areaid,piedata)
line_bar(areaid,columns,ynames,series_data)

