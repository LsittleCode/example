// 提交按钮
const submit = document.querySelector(".submit");
// 文本域
const textarea = document.querySelector("textarea");
// 留言列表
const comment_list = document.querySelector(".comment_list");
// str&&time
const text = document.querySelector(".text");
const time = document.querySelector(".time");

// 获取count  渲染comment_list
function show_comment(){
    if(localStorage.getItem('count') == 0){
        return;
    }
    let list = '';
    const lengths = localStorage.getItem('count');
    for(let i = 1; i <= lengths; i++){
       const obj = JSON.parse(localStorage.getItem(`data${i}`));
       list += `
            <li>
                <span class="text">${obj.str}</span>
                <span class="time">${obj.time}</span>
            </li>
            `;
    }
    comment_list.innerHTML = list;
    textarea.value = '';
}


submit.addEventListener('click',function(){
    if(textarea.value.trim() == ''){
        alert('请输入文字！');
        return;
    }

    const obj = {
        str :textarea.value,
        time:new Date().toLocaleString(),
    };

    if(localStorage.getItem('count') != '0'){
        let c = Number(localStorage.getItem('count')) +1;
        localStorage.setItem(`data${c}`,JSON.stringify(obj));
        localStorage.setItem('count',c);
        show_comment()
    }else{
        localStorage.setItem(`data${c}`,JSON.stringify(obj));
        localStorage.setItem('count',1);
    }
})

// 打开展示
window.addEventListener('DOMContentLoaded',show_comment)












