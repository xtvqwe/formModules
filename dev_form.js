document.onmousedown = down;
function down(e){
    close_m_menu(e)
}

/**************************************************/
//初始化设置窗口
function window_new(wname){
    var shadow_ele=document.createElement("div")
    shadow_ele.setAttribute("id","win")
    var window_ele=document.createElement("div")
    window_ele.setAttribute("id","window")
    var winTitle_ele=document.createElement("div")
    winTitle_ele.setAttribute("id","winTitle")
    var title_ele=document.createElement("div")
    title_ele.setAttribute("id","title")
    title_ele.innerText=wname
    winTitle_ele.appendChild(title_ele)
    var close_ele=document.createElement("button")
    close_ele.setAttribute("id","closeButton")
    close_ele.setAttribute("onclick","window_c()")
    close_ele.innerText="X"
    winTitle_ele.appendChild(close_ele)
    window_ele.appendChild(winTitle_ele)
    var winContent_ele = document.createElement("div")
    winContent_ele.setAttribute("id","winContent")
    window_ele.appendChild(winContent_ele)
    var winEnd=document.createElement("div")
    winEnd.setAttribute("id","winEnd")
    var confirmButton = document.createElement("button")
    confirmButton.innerText="确认"
    confirmButton.setAttribute("id","confirmButton")
    confirmButton.setAttribute("onclick","confirm_data()")
    winEnd.appendChild(confirmButton)
    window_ele.appendChild(winEnd)
    shadow_ele.appendChild(window_ele)
    document.body.appendChild(shadow_ele)
}
window_new("设置")

/**************************************************/
//设置窗口淡入淡出效果
function window_o(){
    $("#win").fadeIn()
    //document.getElementById("win").fadeIn()
}
function window_c(){
    //var win_ele=document.getElementById("win")
    //win_ele.parentElement.removeChild(win_ele)
    $("#win").fadeOut()
}

/**************************************************/
//输入框
function input_ele(content,data,lentype){
    var item_ele=document.createElement("div")
    item_ele.setAttribute("class",lentype)
    var nes_ele=document.createElement("div")
    nes_ele.setAttribute("class","nes")
    nes_ele.innerText=data["nes"]
    item_ele.appendChild(nes_ele)
    var name_ele=document.createElement("div")
    name_ele.innerText=data["name"]
    name_ele.setAttribute("class","name")
    item_ele.appendChild(name_ele)
    var input = document.createElement("input")
    if (lentype=="wItem"){
        input.setAttribute("class","value_area_w")
    }
    else{
        input.setAttribute("class","value_area_n")
    }
    item_ele.appendChild(input)
    content.appendChild(item_ele)
}
/**************************************************/
//单选框
function selects_s_ele(content,data,lentype){
    var item_ele=document.createElement("div")
    item_ele.setAttribute("class",lentype)
    var nes_ele=document.createElement("div")
    nes_ele.setAttribute("class","nes")
    nes_ele.innerText=data["nes"]
    item_ele.appendChild(nes_ele)
    var name_ele=document.createElement("div")
    name_ele.innerText=data["name"]
    name_ele.setAttribute("class","name")
    item_ele.appendChild(name_ele)
    var selects=document.createElement("select")
    var sdatas=data["selects"]
    for(var i=0;i<sdatas.length;i++){
        var s_opt=document.createElement("option")
        s_opt.setAttribute("value",sdatas[i]["value"])
        s_opt.innerText=sdatas[i]["text"]
        selects.appendChild(s_opt)
    }
    if (lentype=="wItem"){
        selects.setAttribute("class","value_area_w")
    }
    else{
        selects.setAttribute("class","value_area_n")
    }
    item_ele.appendChild(selects)
    content.appendChild(item_ele)
}
/**************************************************/
//多选框
function selects_m_ele(content,data,lentype){
    var item_ele=document.createElement("div")
    item_ele.setAttribute("class",lentype)
    var nes_ele=document.createElement("div")
    nes_ele.setAttribute("class","nes")
    nes_ele.innerText=data["nes"]
    item_ele.appendChild(nes_ele)
    var name_ele=document.createElement("div")
    name_ele.innerText=data["name"]
    name_ele.setAttribute("class","name")
    item_ele.appendChild(name_ele)
    var m_area = document.createElement("div")
    m_area.setAttribute("onclick","multi_area(this)")
    var menu_drop = document.createElement("div")
    if (lentype=="wItem"){
        m_area.setAttribute("class","value_area_w")
        menu_drop.setAttribute("class","m_area_w")
    }
    else{
        m_area.setAttribute("class","value_area_n")
        menu_drop.setAttribute("class","m_area_n")
    }
    var sdatas=data["selects"]
    for(var i=0;i<sdatas.length;i++){
        var select_item=document.createElement("button")
        select_item.setAttribute("class","menu_item")
        select_item.setAttribute("value",sdatas[i]["value"])
        select_item.setAttribute("onclick","multi_insert(this)")
        select_item.innerText=sdatas[i]["text"]
        menu_drop.appendChild(select_item)
    }
    item_ele.appendChild(m_area)
    item_ele.appendChild(menu_drop)
    content.appendChild(item_ele)
}
//点击多选输入框展开多选下拉框
function multi_area(ele){
    var bros=ele.parentElement.children
    for(var i=0;i<bros.length;i++){
        if(
            bros[i].getAttribute("class")=="m_area_w"||
            bros[i].getAttribute("class")=="m_area_n"
            ){
            bros[i].style.display="block"
            break
        }
    }
}
//点击选择框外关闭多选下拉框
function close_m_menu(e){
    var click_ele=e.target
    var m_menus_w=document.getElementsByClassName("m_area_w")
    var m_menus_n=document.getElementsByClassName("m_area_n")
    if (click_ele.getAttribute("class")!="menu_item"){
        for(var i=0;i<m_menus_w.length;i++){
            m_menus_w[i].style.display="none"
        }
        for(var i=0;i<m_menus_n.length;i++){
            m_menus_n[i].style.display="none"
        }
    }
}
//多选元素输入到框内
function multi_insert(ele){
    var bros=ele.parentElement.parentElement.children
    var i_selected=document.createElement("div")
    i_selected.setAttribute("value",ele.getAttribute("value"))
    i_selected.setAttribute("class","m_selected")
    var i_name=document.createElement("div")
    i_name.setAttribute("class","m_s_name")
    i_name.innerText=ele.innerText
    i_selected.appendChild(i_name)
    var closeb=document.createElement("button")
    closeb.innerText="X"
    closeb.setAttribute("class","m_s_del")
    closeb.setAttribute("onclick","sitem_del(this)")
    i_selected.appendChild(closeb)
    var insert_ele;
    for(var i=0;i<bros.length;i++){
        if(
            bros[i].getAttribute("class")=="value_area_w"||
            bros[i].getAttribute("class")=="value_area_n"
        ){
            insert_ele=bros[i]
            break
        }
    }
    var values=[]
    for(var i=0;i<insert_ele.children.length;i++){
        values.push(insert_ele.children[i].getAttribute("value"))
    }
    if(values.indexOf(ele.getAttribute("value"))==-1){
        insert_ele.appendChild(i_selected)
    }
}
//多选框删除元素
function sitem_del(ele){
    var item=ele.parentElement
    var insert_area=item.parentElement
    insert_area.removeChild(item)
}

//代码输入框
function code_input(content,data){
    var item_ele=document.createElement("div")
    item_ele.setAttribute("class","cItem")
    var nes_ele=document.createElement("div")
    nes_ele.setAttribute("class","nes")
    nes_ele.innerText=data["nes"]
    item_ele.appendChild(nes_ele)
    var name_ele=document.createElement("div")
    name_ele.innerText=data["name"]
    name_ele.setAttribute("class","name")
    item_ele.appendChild(name_ele)
    var input = document.createElement("pre")
    input.setAttribute("id",data["configs"]["id"])
    item_ele.appendChild(input)
    content.appendChild(item_ele)
    editor_init(data["configs"])
}
/**************************************************/
//代码输入框初始化设置
function editor_init(configs){
    var editor=ace.edit(configs["id"]);
    editor.session.setMode("ace/mode/"+configs["lang"]);
    //editor.setShowPrintMargin(false);
    editor.setTheme ("ace/theme/twilight");
    editor.setFontSize(15);
    editor.session.setUseWrapMode(true);
    editor.renderer.setShowGutter(false);
}

/**************************************************/
