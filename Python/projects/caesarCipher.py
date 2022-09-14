an_letters = "aefhilmnorsxAEFHILMNORSX"
word = input("I will cheer for you! Enter a word: ")
eth = int(input("Ethusiasm level (1-10):"))

for char in word:
    if char in an_letters:
        print('Give me an', char)
    else:
        print('Give me a', char)

print("What does that spell?")
for x in range(1, eth + 1):
    print(word.upper() + "!!")