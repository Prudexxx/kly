function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Функция которая получает оptions
  // let selected = document.querySelector('.selected')
  //   selected.onchange = function() {
  //       let selectInd = selected.selectedIndex;
  //       let options = selected.options;
  //       let mnp2 = options[selectInd].innerHTML
  //       document.getElementById('mnp').innerHTML= mnp2
  //       document.getElementById('mnp2').innerHTML= mnp2
        
  //   }
 


    // document.querySelector('.btn_danye').addEventListener('click',  () =>{
    //   let zayvka = document.getElementById('zayvka').value;
    //   document.getElementById('zayvka1').innerHTML= zayvka
    //   document.getElementById('zayvka2').innerHTML= zayvka

    //   let tel = document.getElementById('tel').value;
    //   document.getElementById('tel1').innerHTML= tel
     
      
    //   let data = document.getElementById('data').value;
    //   document.getElementById('data1').innerHTML= data.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)
    //   document.getElementById('data2').innerHTML= data.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)
    
  
    // })


   

    area.value = localStorage.getItem('area');
    area.oninput = () => {
      localStorage.setItem('area', area.value)
    }


    username.value = localStorage.getItem('username');
    username.oninput = () => {
        localStorage.setItem('username', username.value)
    };
    

    //==================




    function formTable(selector){
      
      var wrapper = document.querySelector(selector);
      var form = wrapper.getElementsByTagName("form")[0];
      var table = wrapper.getElementsByTagName("table")[0];
      
      form.onsubmit = function ter (ev){
        ev = ev || event;
        ev.preventDefault();


        var tr = document.createElement("tr"), td;
        
        for(let i = 0; i <= 3; i++){
          td = document.createElement("td");

          if( i == 0){
            let zayvka = this.elements[i];
            document.getElementById('zayvka1').innerHTML= zayvka.value
            td.innerHTML = zayvka.value
            tr.classList.add("clas");
            tr.appendChild(td);
           }
           
         if( i == 1){
         let dat = this.elements[i];
         document.getElementById('data1').innerHTML= dat.value.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`);
          td.innerHTML = dat.value.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)
          tr.classList.add("clas");
          tr.appendChild(td);
      }


     
         if( i == 2){
          let mnp2 = this.elements[i];
          document.getElementById('mnp').innerHTML= mnp2.value
          td.innerHTML = mnp2.value
          tr.appendChild(td);
          tr.classList.add("clas");
         }
        
         
         if( i == 3){
          let tel1 = this.elements[i];
          document.getElementById('tel1').innerHTML= tel1.value
        }
           }    
        table.appendChild(tr);
        let  parent = document.getElementById("ta");
        let  nodesSameClass = parent.getElementsByClassName("clas");
        document.querySelector('#col').innerHTML= 'ЗАЯВОК '+ nodesSameClass.length

    
        
        document.querySelector('.tatb').onclick = function(del) {
        let delet = del.target.closest('tr');
         if (confirm('УДАЛИТЬ ЗАЯВКУ ?')) {
          
             delet.remove()
             let  nodesSameClass = parent.getElementsByClassName("clas");
             document.querySelector('#col').innerHTML= 'ЗАЯВОК '+  nodesSameClass.length;
             
             
       
           } 
          else {
        
         }
       }

      }  

    }
    formTable(".wrapper");  


    //===========================

//=================================ЧАСЫ
function clock(){
  var date = new Date(),
         hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
         minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
         seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);
clock();
  
   //=============================LocalStorage
 