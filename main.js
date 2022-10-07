const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"
const splitOriginal = originalDisorderFormat.split("|$|")
 
for (const disorder of splitOriginal) {
    console.log(`<div>${disorder}</div>`)
 }


