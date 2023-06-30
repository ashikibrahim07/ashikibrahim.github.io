var names = new Array();
names[0]="Yakkov";
names[1]="Chaikin";
names[2]="jason";
names[3]="Jennifer";
names[4]="John";
names[5]="Hopkins";
names[6]="joe";
names[7]="Chu";
names[8]="Walter";
names[9]="Jesse";

for (var i =0; i < names.length; i++) {
    if (names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
console.log("Goodbye " +names[i])
 }
 else{
    console.log("Hello " + names[i])
 }

 }