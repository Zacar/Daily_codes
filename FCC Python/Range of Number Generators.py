def range_of_numbers(start_num,end_num):
    if start_num > end_num:
        return []
    
    count_list= range_of_numbers(start_num,end_num-1)
    count_list.append(end_num)
    return count_list

print(range_of_numbers(1,5))