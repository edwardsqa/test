const side1 = 14
const side2 = 11
const side3 = 15

if(side1 ===side2 && side2=== side3 && side1=== side3)(
    console.log("Equilateral triangle")
)
else if(side1===side2 || side2===side3|| side1===side3)(
    console.log("isosceles triangle")
)
else(
    console.log("scalene triangle")
)