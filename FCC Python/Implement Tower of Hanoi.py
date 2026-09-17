def hanoi_solver(n):
    rods=[list(range(n,0,-1)),[],[]]
    moves=[]

    def record():
        moves.append(" ".join(str(rod) for rod in rods))

    def solve(n, source,auxiliary,destination):
        if n==0:
            return

        solve(n -1 ,source,destination,auxiliary)

        disk = rods[source].pop()
        rods[destination].append(disk)
        record()

        solve(n-1,auxiliary,source,destination)
    
    record()
    solve(n,0,1,2)
    return "\n".join(moves)

print(hanoi_solver(3))