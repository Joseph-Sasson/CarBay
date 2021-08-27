puts "🌱 Seeding users..."

sloan = User.create(name:"Sloan Bee" ,email:"test@test.com" ,password:"flatiron" ,password_confirmation:"flatiron" )
joseph = User.create(name:"Joseph Sasson" ,email:"joseph@gmail.com" ,password:"flatiron" ,password_confirmation:"flatiron" )
hadi = User.create(name:"Hadi Abaza" ,email:"hadi@gmail.com" ,password:"flatiron" ,password_confirmation:"flatiron" )
<<<<<<< HEAD
=======
dariana = User.create(name: "Dariana Gonzalez", email:"dariana@gmail.com", password:"flatiron", password_confirmation:"flatiron")
shivang = User.create(name: "Shivang Dave", email:"shivang@gmail.com", password:"flatiron", password_confirmation:"flatiron")
emmet = User.create(name: "Emmet Free", email:"emmet@gmail.com", password:"flatiron", password_confirmation:"flatiron")
avery = User.create(name: "Avery Crest", email:"avery@gmail.com", password:"flatiron", password_confirmation:"flatiron")
lydia = User.create(name: "Lydia Smiles", email:"lydia@gmail.com", password:"flatiron", password_confirmation:"flatiron")
franz = User.create(name: "Franz Bauer", email:"franz@gmail.com", password:"flatiron", password_confirmation:"flatiron")
sal = User.create(name: "Sal Hill", email:"sal@gmail.com", password:"flatiron", password_confirmation:"flatiron")
mat = User.create(name: "Mathew OBrien", email:"mat@gmail.com", password:"flatiron", password_confirmation:"flatiron")

>>>>>>> seeds

puts "🌱 Seeding cars..."

bmw = Car.create(image: "https://www.motortrend.com/uploads/sites/5/2020/06/2021-BMW-4-Series-53.jpg",user_id: franz.id,price: 45000,car_name: "BMW 4 Series")
benz = Car.create(image: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my21/c/sedan/byo-options/2021-C-SEDAN-MP-013.jpg",user_id: avery.id,price: 42000,car_name: "Mercedes-Benz C300")
audi = Car.create(image: "https://di-uploads-pod11.dealerinspire.com/reevesimportmotorcars/uploads/2021/03/2021-audi-a5.jpg",user_id: joseph.id,price: 43000,car_name: "Audi A5")
jeep = Car.create(image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl67dFlN7YuCOR6EnbKiz8bHKt4jYwSTyfZQ&usqp=CAU",user_id: hadi.id,price: 50000,car_name: "Jeep Wrangler 4xe")
tesla = Car.create(image: "https://media.ed.edmunds-media.com/tesla/model-s/2021/oem/2021_tesla_model-s_sedan_plaid_fq_oem_1_815.jpg",user_id: shivang.id,price: 70000,car_name: "Tesla Model S")
fiat = Car.create(image: "http://www.abarth.com/content/dam/abarth/gamma/595-esseesse-my21/02-overview-gallery/tablet/abarth-new-595-esseesse-overview-03-gallery-full-image-T-880x500.jpg",user_id: hadi.id,price: 40000,car_name: "Abarth 595 Esseesse")
alfa = Car.create(image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/alfa-romeo-gtv-illo-christianschulte-1530629520.jpg",user_id: dariana.id,price: 70000,car_name: "Alfa Romeo GTV")
wagon = Car.create(image: "https://i1.wp.com/2020bestsuv.com/wp-content/uploads/2020/04/2021-Mercedes-Benz-G-Class-redesign.png?fit=1024%2C675&ssl=1",user_id: sloan.id,price: 250000,car_name: "Mercedes-Benz G Wagon")
ferrari = Car.create(image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ferrari-1622033868.jpg",user_id: hadi.id,price: 300000,car_name: "Ferrari Sf90")
lambo = Car.create(image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/images-s/2021/07_07/gate_family_s_02_m.jpg",user_id: joseph.id,price: 470000,car_name: "Lamborghini Aventador")
infiniti = Car.create(image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dsc-4875-copy-1619793665.jpg?crop=0.686xw:0.769xh;0.152xw,0.231xh&resize=640:*",user_id: emmet.id,price: 50000,car_name: "Infiniti Q50s")
cadillac = Car.create(image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-cadillac-escalade-001-1567021710.jpg?crop=0.481xw:0.568xh;0.309xw,0.432xh&resize=640:*",user_id: lydia.id,price: 120000,car_name: "Cadillac Escalade")
honda = Car.create(image: "https://media.ed.edmunds-media.com/honda/civic/2021/oem/2021_honda_civic_4dr-hatchback_type-r-limited-edition_fq_oem_1_815.jpg",user_id: sal.id,price: 40000,car_name: "Honda Civic Type R")
bmw2 = Car.create(image: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/x5m-x6m-first-edition/bmw-x5m-x6m-first-edition-cp-02.jpg",user_id: mat.id,price: 120000,car_name: "Bmw X6M")

puts "✅ Done seeding!" 