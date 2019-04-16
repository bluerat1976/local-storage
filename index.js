
var button = document.getElementById('button');
button.addEventListener('click', func); 
    function func() {
         var name = prompt('input your name');
         localStorage.setItem('key', name);
           var text = document.getElementById('greet');
        if (name.length > 2) {
            text.innerHTML = 'Hello test user!';
        } else {
            
            text.innerHTML = 'Hello guest!';
        }
    }
   



