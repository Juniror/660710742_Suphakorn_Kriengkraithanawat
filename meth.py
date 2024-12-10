import sympy as s
print(1)
a = s.Matrix([[1,4],[-2,3]])
print(a.inv())
for i in range(3,6) :
    print(a**i)

print(2)
a=s.Matrix([[2,0,-1],[3,1,5]])
b=s.Matrix([[4,1],[0,7],[2,-1]])
print(a*5)
print(a.T+b)
print(2*a-b.T)
print(a*b)
print(b*a)

print(3)
a=s.Matrix([[1,2,3],[-2,0,1],[1,1,2]])
b=s.Matrix([[-3],[1],[2]])
print(a*b)
print(a.inv() *b)
print(b.T*a)

print(4)
a=s.Matrix([[2,3],[5,-1]])
print(a.det())
print((a*3).det())
print(a.inv())

print(5)
a=s.Matrix([[3,-2,4],[-1,5,2],[-4,0,1]])
print(a.det())
print((a*2).det())
><P

print(6)
