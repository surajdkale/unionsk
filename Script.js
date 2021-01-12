     function calculate()
            {

                p = document.getElementById("p").value;
                n = document.getElementById("n").value;
                r = document.getElementById("range").value;
                amount = document.getElementById("amount");
               	rate= document.getElementById("rate");
               	result = document.getElementById("result");
               	year = document.getElementById("year");

           		
           				
           		amount.innerHTML = "If your deposit is<mark>" +p+"</mark>";
				rate.innerHTML = "at an interest rate of <mark>" + r +"</mark>";
                result.innerHTML ="You will recieve an amount of <mark>" + (p*n*r/100)+"</mark>";
                year.innerHTML = "in the Year<mark>" + n+"</mark>";
			}

	
