def findBefore(x,y,after):
    s = 0
    for i in range(x+1):
        for j in range(y+1):
            if i != x or j != y:
                s = s + after[i][j]
    after[x][y] = after[x][y] - s
    return after[x][y]
    
def findBeforeMatrix(after):
    for i in range(len(after)):        
        for j in range(len(after[0])):
            after[i][j] =findBefore(i,j,after)
    return after