let i = 1;
while (i <= 10) {
    if (i == 5) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}

i = 1;
while (i <= 10) {
    if (i == 7) {
        break;
    }
    console.log(i);
    i++;
}
