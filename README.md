# Insertion Sort

> Simple sorting that builds the final list one item at a time. Insertion sort iterates, takes one input element each repetition, and grows a sorted output list. Each iteration removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain. 

Best Case Scenario - O(n)

Average Case Scenario - O(n^2)

Worst Case Scenario - O(n^2)

## Psuedo code
```
function insertionSort(list)
    for i = 1 to length(list)
        temp = list[i]
        for j >= 0 and A[j] > temp
            list[j+1] = list[j]
        list[j+1] = temp
    return
```
