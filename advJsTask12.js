 class student{
    static count=0;
    constructor(name,age,phoneNumber,marks){
        this.name=name;
        this.age=age;
        this.phoneNumber=phoneNumber;
        this.marks=marks;

        student.studentCount();
    }
    static studentCount(){
        return(student.count++);
    }
    eligibleForPlacement(eligibleAge){
        return (minMarks)=>{
            if(this.marks>=minMarks && this.age>=eligibleAge){
                console.log(`${this.name} is eligible for placement`);
            }
            else{
                 console.log(`${this.name} is not eligible for placement`);
            }

        }
    }

    // elgible(){
    //     if(this.marks>=40){
    //         console.log(`${this.name} is elgible`);
    //     }
    //     else{
    //         console.log(`${this.name} id not elgible`);
    //     }   

  //  }

 }
 
 const mujaffar=new student('Mujaffar',23,99454,90)
 const aj = new student('Aj',24,8897,35)
 const mj =new student('Mj',17,9889,35)
 var rj=new student('Rj',17,6879,39)
 var az=new student('Az',24,9988,99)

 console.log(student.studentCount());
 
 mujaffar.eligibleForPlacement(18)(40);
 aj.eligibleForPlacement(18)(40);
 mj.eligibleForPlacement(18)(40);
 rj.eligibleForPlacement(18)(40);
 az.eligibleForPlacement(18)(40);
 