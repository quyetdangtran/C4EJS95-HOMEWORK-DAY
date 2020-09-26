// coding challenge 4: Calculate BMI
const person1 = 
  {
    fullname: "John Cena",
    mass: 90,
    height: 195,
    BMI: function () {
      return Math.floor(this.mass / (this.height /100) ** 2);
    }
  };
const person2 = 
  {
    fullname: "Mark Zuckerberg",
    mass: 82,
    height: 180,
    BMI: function () {
      return Math.floor(this.mass / (this.height /100)**2);
    }
  };
  if(person1.BMI() < person2.BMI()){
    console.log(`BMI of ${person1.fullname} is ${person1.BMI()} and lower than ${person2.fullname}`);
  }else if(person2.BMI() > person1.BMI()){
    console.log(`BMI of ${person2.fullname} is ${person2.BMI()} and highter than ${person1.fullname}`);
  }else{
console.log(`Same BMI`)
  };
   
  
  // Lab homeworks
  // part 1
  
  // part 2
  // 2.1
  const jobData=  "https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js";
  // 2.2 Get all the job hits
  console.log("Job hit:" , jobData.hits);
  // 2.3 Get the first job hit
  console.log(jobData.hits[0]);
  // 2.4 Get jobTitle of the first job hit
 const {jobTitle} = jobData.hits[0];
 console.log(`First job title: .\n${jobTitle}`);
//  2.5 Get the benefits of the first job hit
const { benefits } = jobData.hits[0];
console.log(benefits);
//part 2.6: Log out first job hit benefit values
console.log("First job hit benefits");
for (let i = 0; i < benefits.length; i++) {
  console.log(`- ${benefits[i].benefitValue}`);
// part 3
// 3.1 Write a program to count the occurrences of the words

const myArr = ["to","be","that","of","elon","to","this","now","back","cool","hey","love","of","life","that","rain","summer","color","now","of","hat","late","sorry","my","team"];
const leng= myArr.length;
const countData = {};
for(let i= 0;i <leng;i++){
  const word = myArr[i].toLowerCase();
   if(countData[word]){
    countData[word] ++;
  }else{
    countData[word]=1;
  }
   }
console.log(countData);
// 3.2
const inventory = [

  {
  
      name: 'HP Envy 13aq',
  
      price: 21000,
  
      brand: 'HP',
  
      quantity: 5,
  
  },
  
  {
  
      name: 'Dell XPS 9370',
  
      price: 30000,
  
      brand: 'Dell',
  
      quantity: 1,
  
  },
  
  {
  
      name: 'Dell Inspiron 3567',
  
      price: 9300,
  
      brand: 'Dell',
  
      quantity: 12,
  
  },
  
  {
  
      name: 'Dell Latitude E5450',
  
      price: 8600,
  
      brand: 'Dell',
  
      quantity: 2,
  
  },
  
  {
  
      name: 'Asus Zenbook',
  
      brand: 'Asus',
  
      price: 20000,
  
      quantity: 4,
  
  },
  
  {
  
      name: 'HP Pavilion',
  
      brand: 'HP',
  
      price: 14000,
  
      quantity: 7,
  
  },
];








