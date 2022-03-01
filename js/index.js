    const CurrentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const dt = CurrentDate.toLocaleDateString(undefined,options);
    const CurDate = document.getElementById('CurDate');
    CurDate.innerHTML = `${dt}`;
    
    setInterval(() => {
        const CurrentDate = new Date();
        const dt2 = CurrentDate.toLocaleTimeString();
        const CurTime = document.getElementById('CurTime');
        CurTime.innerHTML = `${dt2}`;
    }, 1000);
  
            // Mouse Event

    const mouseHover = document.getElementById('mouseHover');
    const result1 = document.getElementById('result1');
    mouseHover.addEventListener('mouseenter',() =>{
        mouseHover.style.backgroundColor = 'red';
        result1.innerText = `Mouse Enter`;
    });

    mouseHover.addEventListener('mouseleave',() =>{
        mouseHover.style.backgroundColor = '#fff';
        result1.innerText = `Mouse Leave`;
    });

    const mouseClick = document.getElementById('mouseClick');

    mouseClick.addEventListener('mousedown',() =>{
        mouseClick.style.backgroundColor = "green";
        result1.innerText = `Mouse Down`;
    });

    mouseClick.addEventListener('mouseup',() =>{
        mouseClick.style.backgroundColor = "#fff";
        result1.innerText = `Mouse Up`;
    });


    // Keyborad Events

    const name1 = document.getElementById('name1');

    name1.addEventListener('keypress',()=>{
        const result2 = document.querySelector('.result2');
        result2.innerHTML = `Pressed  ${event.key}  KeyCode ${event.keyCode}`;
    });

    const name2 = document.querySelector('.name2'); 

    name2.addEventListener('keydown',()=>{
        const result3 = document.querySelector('.result3');
        result3.innerHTML = `Key is Down`;
    });

     name2.addEventListener('keyup',()=>{
        const result3 = document.querySelector('.result3');
        result3.innerHTML = `Key is Up`;
    });
    
