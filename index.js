
// Calculate BMI 
function done() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let yourName = document.getElementById('yourName').value;
    let convertedHeight = height / 100
    let bmi = weight / (convertedHeight * convertedHeight);
    bmi = Math.round(bmi * 10) / 10;
    if (height == "" || weight == "") {
        document.querySelector('.error').style.display = 'block';
    }
    else if (height != "" || weight != "") {
        if (bmi < 18.5) {
            weightStatus = "UnderWeight😕";
            greet = "You need Healthy Diet ";
            linkTip1 = "https://www.medicalnewstoday.com/articles/321518#foods-to-gain-weight-quickly";
            linkTip2 = "https://www.healthline.com/nutrition/how-to-gain-weight";
            linkTip3 = "https://familydoctor.org/healthy-ways-to-gain-weight-if-youre-underweight/";

        } else if (bmi >= 18.5 && bmi < 24.9) {
            weightStatus = "Normal😀";
            greet = "Congratulations ";
            linkTip1 = "https://www.nia.nih.gov/health/maintaining-healthy-weight#:~:text=Stay%20hydrated%20with%20water%20and,eat%20in%20a%20food%2";
            linkTip2 = "https://reverehealth.com/live-better/tips-to-maintain-a-healthy-weight/";
            linkTip3 = "https://www.cdc.gov/healthyweight/index.html";
        } else if (bmi >= 25.0 && bmi < 29.9) {
            weightStatus = "OverWeight😮";
            greet = "You need to Control on Your Diet ";
            linkTip1 = "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/treatment";
            linkTip2 = "https://www.nhlbi.nih.gov/health/educational/lose_wt/index.htm";
            linkTip3 = "https://www.timesnownews.com/health/article/how-do-you-know-that-you-are-overweight-or-obese-10-tips-to-maintain-a-healthy-weight/641313";

        } else if (bmi >= 30) {
            weightStatus = "Obese😧";
            greet = "Need Urgent Care ";
            linkTip1 = "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/treatment";
            linkTip2 = "https://www.nhlbi.nih.gov/health/educational/lose_wt/index.htm";
            linkTip3 = "https://www.timesnownews.com/health/article/how-do-you-know-that-you-are-overweight-or-obese-10-tips-to-maintain-a-healthy-weight/641313";
        }
        document.getElementById('linkTip1').href = linkTip1;
        document.getElementById('linkTip2').href = linkTip2;
        document.getElementById('linkTip3').href = linkTip3;

        document.querySelector('.resultSide').style.backgroundColor = '#ed1e79';
        document.querySelector('.specTips').style.display = 'flex';
        document.querySelector('.notes').style.display = 'block';
        document.getElementById('greet').innerHTML = greet + yourName + "!";
        document.getElementById('expression').innerHTML = "Your BMI Status is " + weightStatus
        document.getElementById('bmi').innerHTML = "Your Body Mass Index is " + bmi;
    }

}



// Calculate WaisttoHip Ratio
function calculateWHR() {
    let w = document.getElementById('waistCircumference').value;
    let h = document.getElementById('hipCircumference').value;

    let whr = w / h;
    if (w == "" || h == "") {
        document.querySelector('.error2').style.display = 'block';
    }else if(w != "" || h != ""){
        document.getElementById('whr').innerHTML = "Your WHR is " + whr;

    }
}



// INITIALIZIN TOOLTIPS 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));