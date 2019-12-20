
fruits=['Orange', 'Pear', 'Mango', 'Pineapple', 'Passion fruit']

fruits.each{|fruit| Fruit.create(name: fruit, description: "I'm a delicious #{fruit}.")}