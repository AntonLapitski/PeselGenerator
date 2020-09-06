        //Functions for Generate Button
        var peselsArray = new Array();
        var value;

        function validate(){
            var maleCheck = document.getElementById('check_1').checked;
            var femaleCheck = document.getElementById('check_2').checked;

            if((maleCheck == true) && (femaleCheck == true)){
                alert("Please select one value for gender");
                return false;
            }else if((maleCheck == false) && (femaleCheck == false)){
                alert("Please select the gender in checkbox");
                return false;
            }else{
                return validateDate();
            }

        }

        function validateDate(){
            var dateBirth = document.getElementById('dateOfBirth').value;
            var date = new Date(dateBirth);
            var month = date.getMonth();
            var day = date.getDay();
            var year = date.getYear();

            if((!month) || (!day) || (!year)){
                alert("Please select the date");
                return false;
            }else{
                return true;
            }
        }

      //  var array = new Array();

		function generateRandomNumber(){

            if(validate()){

                var dateBirth = document.getElementById('dateOfBirth').value;
                var date = new Date(dateBirth);
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var year = parseInt(date.getFullYear().toString().slice(2,4));

                var randZ = Math.floor(Math.random() * 10);
                var randZZ = Math.floor(Math.random() * 10);
                var randZZZ = Math.floor(Math.random() * 10);

                var genderX = 0;
                var maleCheck = document.getElementById('check_1').checked;

                if(maleCheck){
                    genderX = 1;
                }else{
                    genderX = 2;
                }

                var pesOutCheck = year.toString() + month.toString() + day.toString() + randZ.toString() + randZZ.toString() + randZZZ.toString() + genderX.toString();

               // document.write("day: " + day);
               // document.write("month: " + month);
               // document.write("year: " + year);
               // document.writeln("pesOutCheck: " + pesOutCheck);

                //getting check index
                var number_1 = parseInt(pesOutCheck.slice(0, 1));
                var number_2 = parseInt(pesOutCheck.slice(1, 2));
                var number_3 = parseInt(pesOutCheck.slice(2, 3));
                var number_4 = parseInt(pesOutCheck.slice(3, 4));
                var number_5 = parseInt(pesOutCheck.slice(4, 5));
                var number_6 = parseInt(pesOutCheck.slice(5, 6));
                var number_7 = parseInt(pesOutCheck.slice(6, 7));
                var number_8 = parseInt(pesOutCheck.slice(7, 8));
                var number_9 = parseInt(pesOutCheck.slice(8, 9));
                var number_10 = parseInt(pesOutCheck.slice(9, 10));

                var checkQ = parseInt(number_1 * 1 + number_2 * 3 + number_3 * 7 + number_4 * 9 + number_5 * 1 + number_6 * 3 + number_7 * 7 + number_8 * 9 + number_9 * 1 + number_10 * 3);
                checkQ = checkQ % 10;
                checkQ = 10 - checkQ;

                if(checkQ == 10){
                    checkQ = checkQ - 1;
                }

                var finalPeselId = pesOutCheck + checkQ.toString();
               //document.write("PESELId: " + finalPeselId);

               document.getElementById('text').value = finalPeselId;
               var finality = finalPeselId;
               //  document.write(finality);
               var sDate = new Date().toDateString() + " " + new Date().getHours().toString() + ":" + new Date().getMinutes().toString() + ":"  + new Date().getSeconds().toString() + ":" + new Date().getMilliseconds().toString();
               var identityIndex = sDate.substring(16,28);
               var identIndex = identityIndex.replace(":","");
               var identIdentIndex = identIndex.replace(":","");
               var identIdentIdentIndex = identIdentIndex.replace(":","");
               var fullPeselAndDate = finality + " " + sDate;
              //document.write(identIdentIdentIndex);
               localStorage.setItem("Pesel" + identIdentIdentIndex, fullPeselAndDate);


            }else{
                //alert("check the data you entered");
                return alert("check the data you entered");;
            }
		}

        function getPesel(){
            generateRandomNumber();
        }