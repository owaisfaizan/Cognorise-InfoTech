function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const heightUnit = document.getElementById('height-unit').value;

    if (weight > 0 && height > 0) {
        let heightInMeters;

        switch(heightUnit) {
            case 'meters':
                heightInMeters = height;
                break;
            case 'centimeters':
                heightInMeters = height / 100;
                break;
            case 'feet':
                heightInMeters = height * 0.3048;
                break;
            default:
                heightInMeters = height; // default to meters
        }

        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            alert("you're so light, you might float away! Eat more")
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
            alert("you have got this! keep your healthy habits on track.")
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            alert("your pants are plotting against you. Time for a workout!")
        } else {
            category = 'Obesity';
            alert("your weigth is not just a number, it's a warning sign. Take Action!")
        }

        document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category})`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid weight and height';
    }
}
