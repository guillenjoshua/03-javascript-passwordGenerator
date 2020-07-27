# 03-javascript-passwordGenerator


A few things to note for this homework.  

I opted not to use prompts. After reading through the Eloquent Javascript section on console.log functions, pg 26, it states that the prompt function is not used much in modern programming and also, our TA said it was ok to use checkboxes or input fields. So I chose checkboxes. 

I used ternary functions in the function writePassword, starting line 18, because it seemed easier and I was having a hard time or getting confused with my if statements. 

The writePassword parameter in the addEventListener, line 32, kept throwing me off and wasnt able to get my password to recognize the length of the password, checkboxes and generate a password.  Realized I needed to change password in line 27 to generatePassword. 

The function writePassword section, starting line 18, in particular confused me, mostly line 20 becuase it had query.selector inside the function when I kept thinking it should be part of the assignment code section at the top.

I did leave lowercase as a non-option purposefully, mainly since I've never seen or had a password generated without lowercase letters.  Otherwise, I would have created a lowercaseEl variable, a checkbox in HTML and made lower a ternary function on line 22.  

Im not sure if we were supposed to use Math in this homework, but everything I was reading directed towards using Math in order to generate the length of number of characters chosen for the password.  