// tab-menu
const tabMenuList = document.querySelectorAll('ul.tab-menu > li');
tabMenuList.forEach( (list) => {
  list.addEventListener('click', () => {    
    sRemoveClass(sSiblings(list),'active');
    list.classList.add('active');

    const tabId = list.getAttribute("data-tab");
    var sib = sSiblings(document.getElementById(tabId));
    sRemoveClass(sib,'active');    
    document.getElementById(tabId).classList.add("active");    
  });  
});


//close modal
document.querySelectorAll('.modal-close').forEach( (list) => {
  list.addEventListener('click', () => {    
    $parent = list.closest('.modal-con')
    if ($parent == null) return;
    $parent.classList.toggle('opaque');
    if (!($parent.classList.contains('opaque'))) 
      document.body.style.overflow = "overlay";
  
    $parent.addEventListener('transitionend', function(e){
      this.classList.toggle('unstaged');
      this.removeEventListener('transitionend',arguments.callee);
    });
  });
});

// function 모음
// 형제node 
function sSiblings(t) {
  const children = t.parentElement.children;
  const tempArr = [];

  for (let i = 0; i < children.length; i++) {    
    tempArr.push(children[i]);
  }
  
  return tempArr.filter(function(e){
    return e != t;
  });
}

// 선택한 모든 element에서 클래스삭제
function sRemoveClass(t, removeClass) {  
  for (let i = 0; i < t.length; i++) {    
    t[i].classList.remove(removeClass);
  }  
}

// 해당요소의 str문자열을 포함한 id가 있는 부모노드찾기
function sfindParentNode(el, str) {
  var pNode = el.parentElement;
  while (pNode!=null) {    
    const strId = pNode.getAttribute("id");    
    if (strId!=null && strId.startsWith(str)) return pNode;
    pNode = pNode.parentElement;
  }  
}
