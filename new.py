li = [5,8,21]
def bi(num,start,end,li):
        while start <=end:
            mid = (start+end)//2
            if li[mid] == num:
                return len(li) - mid + 1
            if li[mid] < num:
                start = mid + 1
            else:
                end = mid - 1
        if end == -1:
            return len(li)
        elif start == len(li):
            return 0
        else:
            return len(li) - start

print(bi(7,0,2,li))