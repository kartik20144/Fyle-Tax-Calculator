# Fyle-Tax-Calculator
Tax calculator: A website that allows for tax calculation based on a users input. 
Homepage looks like:
![11 04 2024_11 33 29_REC](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/6bad556a-3d47-490f-8bf3-50810dbc2e54)
- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
        - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
Example:
![11 04 2024_11 26 01_REC](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/83e5fa27-b246-44ea-af37-c33c86473b30)
and answer is:
![11 04 2024_11 27 24_REC](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/bef62792-2f7d-4311-8b33-e0f5e09472e3)

- Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
    - 30% for people with age < 40
    - Example:
    - ![11 04 2024_11 44 15_REC](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/a8e8805f-80dd-4f2b-8f0e-273a37a1eb0d)
and answer is:
![11 04 2024_11 44 30_REC](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/5cd49611-b253-462e-8e17-cd9f305280f5)

40% for people with age ≥ 40 but < 60
Example:
![11 04 2024_11 44 46_REC](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/d5fc8f1b-035b-4bb4-b629-e1d8082201b2)
and answer is:
![11 04 2024_11 45 07_REC](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/c6187c0c-ffe4-414d-a8f8-b17783c4bfba)


10% for people with age ≥ 60
Example:
![11 04 2024_11 45 40_REC](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/823c0f8d-c2c3-4389-a423-bdd6294b19d6)

and answer is:
![11 04 2024_11 46 07_REC](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/cec6b1e9-4e8a-4f10-acda-34519bd9f4bb)

- User is not restricted from entering incorrect values like characters in the number fields
    - A error icon is highlighted to the right of the input field (shown as an example in above image as a circle with `!`).
    - 
![11 04 2024_11 30 46_REC](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/41731998-01e0-4461-81ee-c480ce22d3ca)

 Hovering over it should show the error in a tooltip
 
![WhatsApp Image 2024-04-11 at 11 34 21_d898c072](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/099ce49e-5c06-4151-947f-602d851bf536)
If no errors are present, there is no error icon 
Error icons  are not visible in the form by default.
![11 04 2024_11 32 09_REC](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/af1c2717-338b-475a-9805-bf5f87f83094)

- The age dropdown field should have 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
  ![WhatsApp Image 2024-04-11 at 11 47 06_3b6d9218](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/b2e060b8-05a2-4cef-96f2-cdf7f3a345ed)
If user has not entered this value and clicks on submit,  a error icon is shown
 ![WhatsApp Image 2024-04-11 at 11 34 22_9bfd5ce3](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/96b57307-7e6e-41e4-8f08-3951b5518f56)

hovering over which should show that input field is mandatory
![WhatsApp Image 2024-04-11 at 11 34 22_7312c565](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/3166155f-8c1b-4e30-9534-a8cada657b25)
Clicking on submit shows a modal which would show the final values based on above calculations.
![11 04 2024_11 44 30_REC](https://github.com/kartik20144/Fyle-Tax-Calculator/assets/122911965/3672afb2-2621-47e5-b52a-7e20760f9bc1)

