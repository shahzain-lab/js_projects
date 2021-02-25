


const submit = document.getElementById('submit');
const desc = document.getElementById('desc');
const amount = document.getElementById('amount');
const required = document.getElementById('required');

 
submit.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(desc.value === '' || amount.value === ''){
        const req = document.createElement('p');
        req.classList.add('required');
        req.textContent = 'Feild is Required';
        required.append(req)
        setTimeout(() => {
            req.remove()
        }, 3000);
    }else{
        desc.value = '';
        amount.value = '';
        getData();
    }
    
});


function getData(){
    
}