     function calculate()
            {

                p = document.getElementById("p").value;
                n = document.getElementById("n").value;
                r = document.getElementById("range").value;
                amount = document.getElementById("amount");
               	rate= document.getElementById("rate");
               	result = document.getElementById("result");
               	year = document.getElementById("year");

           
                amount.innerHTML = "If your deposit is" + p;
                rate.innerHTML = "at an interest rate of " + r ;
                result.innerHTML ="You will recieve an amount of " + (p*n*r/100);
                year.innerHTML = "in the Year" + n;
			}

	
