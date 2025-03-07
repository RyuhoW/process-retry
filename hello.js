function hello(retry_count) {
    console.log(retry_count);
    switch (retry_count) {
        case 0:
            return false;
        case 1:
            return false;
        case 2:
            console.log("hello");
            return true;
        default:
            return false;
    }
}
