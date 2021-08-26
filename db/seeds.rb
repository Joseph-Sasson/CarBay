puts "🌱 Seeding cars..."

bmw = Car.create(image: "https://www.motortrend.com/uploads/sites/5/2020/06/2021-BMW-4-Series-53.jpg",user_id: 21,price: 100,car_name: "BMW 4 Series")
benz = Car.create(image: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my21/c/sedan/byo-options/2021-C-SEDAN-MP-013.jpg",user_id: 22,price: 200,car_name: "Mercedes-Benz C300")
audi = Car.create(image: "https://di-uploads-pod11.dealerinspire.com/reevesimportmotorcars/uploads/2021/03/2021-audi-a5.jpg",user_id: 22,price: 300,car_name: "Audi A5")
jeep = Car.create(image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl67dFlN7YuCOR6EnbKiz8bHKt4jYwSTyfZQ&usqp=CAU",user_id: 23,price: 400,car_name: "Jeep Wrangler 4xe")
tesla = Car.create(image: "https://media.ed.edmunds-media.com/tesla/model-s/2021/oem/2021_tesla_model-s_sedan_plaid_fq_oem_1_815.jpg",user_id: 23,price: 500,car_name: "Tesla Model S")

puts "✅ Done seeding!"