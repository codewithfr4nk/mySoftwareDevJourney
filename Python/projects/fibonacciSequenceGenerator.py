# Fibonacci Sequence Generator Function
def fibonacciGenerator(n):
    if n == 1:
        output = [0]
        print(output)
    elif n == 2:
        output = [0, 1]
        print(output)

    else:
        output = [0, 1]
        listLen = len(output)

        # looping through the list until the (n) number of fibonnacci values in the sequence is generated
        while listLen < n:
            lastValue = output[listLen - 1] + output[listLen - 2]  # getting the sum of the last 2 values in the current list postion
            output.append(lastValue)     # adding the resulting sum to the end of the list
            print(output)
            listLen += 1    # increamenting the length of the list until it's equal to (n)

fibonacciGenerator(10)