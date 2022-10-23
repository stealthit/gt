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

// highchart dummy
Highcharts.chart('container', {

  title: {
      text: ''
  },
  
  subtitle: {
      text: ''
  },
  
  yAxis: {
      title: {
          text: '(명)'
      }
  },
  
  xAxis: {
      accessibility: {
          rangeDescription: 'Range: 2010 to 2020'
      }
  },
  
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },
  
  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          pointStart: 2010
      }
  },
  
  series: [{
      name: 'Installation & Developers',
      data: [43934, 48656, 65165, 81827, 112143, 142383,
          171533, 165174, 155157, 161454, 154610]
  }, {
      name: 'Manufacturing',
      data: [24916, 37941, 29742, 29851, 32490, 30282,
          38121, 36885, 33726, 34243, 31050]
  }, {
      name: 'Sales & Distribution',
      data: [11744, 30000, 16005, 19771, 20185, 24377,
          32147, 30912, 29243, 29213, 25663]
  }, {
      name: 'Operations & Maintenance',
      data: [null, null, null, null, null, null, null,
          null, 11164, 11218, 10077]
  }, {
      name: 'Other',
      data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
          17300, 13053, 11906, 10073]
  }],
  
  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }
  
  });