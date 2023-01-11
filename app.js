const amount= document.getElementById('amount');
const interest= document.getElementById('interest');
const years= document.getElementById('years');
// const calculate= document.getElementById('calculateresult');
const monthlyPayment= document.getElementById('Monthly-Payment');
const totalPayment= document.getElementById('Total-Payment');
const totalInterest= document.getElementById('Total-Interest');

document.getElementById('loan-form').addEventListener('submit', function(e){

    //show loader
    document.getElementById('loading').style.display='block';
    //hide result
    document.getElementById('result').style.display='none';

    setTimeout(result, 5000);

    e.preventDefault();
});

function result(){

    const principal=parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

     // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = (monthly * calculatedPayment - principal).toFixed(2);

        //hide loader
        document.getElementById('loading').style.display='none';

        //show result
        document.getElementById('result').style.display='block';

    }else{
        //console.log('please check your numbers');
        showerror('Please enter the data for calculating');
        
    }

    console.log("calculating...");
}

function showerror(error){

    //hide loader
    document.getElementById('loading').style.display='none';

    //show result
    document.getElementById('result').style.display='none';

    const errorDiv= document.createElement('div');
    errorDiv.className='alert alert-danger d-flex align-items-center alert-dismissible fade show';
    errorDiv.setAttribute("role", "alert");

    //cross button on alert
    const btn=document.createElement('button');
    btn.className='btn-close';
    btn.type='button';
    btn.setAttribute("data-bs-dismiss", "alert");

    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');

    errorDiv.appendChild(document.createTextNode(error));

    errorDiv.appendChild(btn);

    card.insertBefore(errorDiv,heading);

    setTimeout(clearalert,2000);
    document.querySelector('.btn-close').addEventListener('click',clearalert);

}

function clearalert(){
    
    document.querySelector('.alert').remove();
}