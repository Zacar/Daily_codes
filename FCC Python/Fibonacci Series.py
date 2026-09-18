def fibonacci(n):
    sequence=[0,1]
    for i in range(n):
        value=sequence[i]+sequence[i+1]
        sequence.append(value)
    return(sequence[n])

