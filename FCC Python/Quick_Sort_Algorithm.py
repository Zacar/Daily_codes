def quick_sort(array):
    if len(array) <=1:
        return array
    pivot_element=array[-1]
    left_array=[]
    right_array=[]
    for i in range(len(array)-1):
        if array[i] < array[len(array)-1]:
            left_array.append(array[i])
        else:
            right_array.append(array[i])
        
    return quick_sort(left_array) + [pivot_element] + quick_sort(right_array)


print(quick_sort([1,3,4,2,12,11,9,5]))