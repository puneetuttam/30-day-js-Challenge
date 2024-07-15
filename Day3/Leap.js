function isLeap(year) {
    if (year % 400 == 0 || (year >= 100 && year % 4 == 0)) {
        console.log("Leap Year");
    } else {
        console.log("Not a Leap Year");
    }
}

isLeap(2020);
isLeap(2021);
isLeap(2022);
isLeap(2023);
isLeap(2024);
