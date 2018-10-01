class User():
    def __init__(self):
        self.name = 'John'

class MyModel(User):  # 'is-a' this model is a user (no more than one user) - one-to-one relationship
    pass

class AnotherModel(): 
    def __init__(self):
        self.user = User() # 'has-a'
        # self.user = [] # with this model we can have a whole bunch of users associated with it. 


m = MyModel()
print(m.name)

n = AnotherModel()
print(n.user.name)