try {
    console.log('using var before initialization: ' + a);
    var a = 1;
} catch (error) {
    console.log('Error: ' + error.message);
}

try {
    console.log('using const before initialization: ' + b);
    const b = 2;
} catch (error) {
    console.log('Error: ' + error.message);
}

try {
    console.log('using let before initialization: ' + c);
    let c = 3;
} catch (error) {
    console.log('Error: ' + error.message);
}
