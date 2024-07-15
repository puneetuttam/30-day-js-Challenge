function grade(score) {
    switch (true) {
        case score >= 90:
            console.log("You got A");
            break;
        case score >= 70 && score < 90:
            console.log("You got B");
            break;
        case score >= 60 && score < 80:
            console.log("You got C");
            break;
        case score >= 50 && score < 70:
            console.log("You got D");
            break;
        case score >= 40 && score < 60:
            console.log("You got E");
            break;
        case score < 40:
            console.log("You got F");
            break;
            default:
                console.log("Not a valid Score")
    }
}

grade(90);
grade(80);
grade(70);
grade(60);
grade(50);
grade(40);
grade(30);
