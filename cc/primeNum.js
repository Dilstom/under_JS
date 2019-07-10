function primeN(N) {
    if (N < 2) {
        return false
    }
    for (let i = 2; i < N; i++) {
        if (N === 2 || N === 3) {
            return true
        }
        else if (N % i == 0) {
            return false
        }
    }
    return true
}