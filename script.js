const audio = new Audio();
        audio.src = "https://www.dropbox.com/s/at573gt2yrsi35k/windows_xp_shutdown.mp3?dl=1";
        
        
       const open = document.querySelector('.open');
    const win = document.querySelector('.win');  
    const close = document.querySelector('.same');
    
    const xyz = document.querySelector(".same1");
    const xyzz = document.querySelector(".same2");
    const xyzzz = document.querySelector(".same3");
  //  const xyz = document.querySelector(".same4");
    
    const power = document.querySelector('.samee');
    const down = document.querySelector(".down");
    const slep = document.querySelector('.slep');
    const sd = document.querySelector('.sd');
    const res = document.querySelector(".res");
    const body = document.querySelector(".body");
 // const audio = document.querySelector(".audio");
    
    var count = 0;
    
    win.onclick = function(){
        open.style.width="300px"
    }
    
    close.onclick = function(){
        open.style.width="0px"
        down.style.height="0px"
    }
    
    slep.onclick = function(){
        open.style.width="0px"
        down.style.height="0px"
        alert("PC is on sleep mode. Click on OK for reopen the PC.");
       /* body.style.background="#000"
        close.style.background="#000"*/
        
        
    }
    
  /* sd.onclick = function(){
        open.style.width="0px"
        down.style.height="0px"
        alert("PC is succesfully Shutdown. Click on OK for reopen the PC.");
        }
       */
      
        
    
    
    res.onclick = function(){
        open.style.width="0px"
        down.style.height="0px"
        alert("PC is restarting.");
        
    }
    
    power.onclick = function(){
        down.style.height="150px"
    }
    
       
    xyz.onclick = function(){
        down.style.height="0px"
    }
    
    xyzz.onclick = function(){
        down.style.height="0px"
    }
    
    xyzzz.onclick = function(){
        down.style.height="0px"
    }
       
      
      function msg(){
      
       open.style.width="0px"
        down.style.height="0px"
        
      var mywin = window.open("","_self");
      mywin.document.write("<body style='background:black;' </body>");
      }