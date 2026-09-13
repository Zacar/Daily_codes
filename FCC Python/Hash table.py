class HashTable:
    def __init__(self):
        self.collection={}
    
    def hash(self,string):
        return sum(ord(char) for char in string)

    def add(self,key,value):
        hash_key=self.hash(key)
        if hash_key not in self.collection.keys():
            self.collection[hash_key]={}
        self.collection[hash_key][key]=value


    def remove(self,key):
        hash_key=self.hash(key)
        if hash_key not in self.collection.keys():
            return
        self.collection[hash_key].pop(key,None)
        
    
    def lookup(self,key):
        hash_key=self.hash(key)
        if hash_key not in self.collection.keys():
            return None
        return self.collection[hash_key].get(key)




