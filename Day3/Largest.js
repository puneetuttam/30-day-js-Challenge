function largest(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log(a + " is Largest");
        }
    } else {
        if (b > c) {
            console.log(b + " is Largest");
        } else {
            console.log(c + " is Largest");
        }
    }
}

largest(12, 34, 45);
