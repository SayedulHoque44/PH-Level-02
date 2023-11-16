/*
*---------Queries---------*
1. $gt (greeter than) $gte  (greeter than equal) -------------->
db.test.find({
    fieldName: {$gt:20(value)} --> 20 hocce value, ay field er 20 upore joto document ache sob dibe,
    fieldName: {$gte:20} -->ay field er 20 upore joto document ache and equal vaue sob dibe,
})


2. $lt (less than) & $lte (less than equal)  -------------->
db.test.find({
    fieldName: {$lt:20(value)} --> ay field er 20 niche joto document ache sob dibe,
    fieldName: {$lte:20} --> ay field er 20 niche joto document ache and equal vaue sob dibe,
})


3. $eq (equal) & $ne(not equal) -------------->
db.test.find({
    gender:{$eq:"Male"} --> "Male" chara baki sob doc dibe, 
    gender:{$ne:"Male"} --> "Male" chara baki sob doc dibe, 
},{gender:1})

4. $in (is this value exits in array)& $nin(not in) -------------->
$in summary: 
    1.$in operator array er element jonn use hy
    2.$in:["value1","value2",...,"valueN"], jetar modde in use krteci sei array er bitore value1 thkeke valueN porjonto jekono akta thaklei oi doc ta amder dibe
    3.array er modde arkta way te doc pawa jay single element check krte caile, friends(array):"value3" -> ay friend er array te value3 thakle sei doc gula amder dibe
    4. $nin hocce tar biporit, mane je element gula $nin e dibo ogular jekono akta array te thaklei oi doc ta dibe na

db.test.find({
    friends:"Najmus Sakib" --> friends array te "Najmus Sakib" element thaklei oi doc gula amder dibe
    friends:["Najmus Sakib"] --> evabe dile mongo bujbe amra accurent ay array ta ache kina check krteci tkn dibe na
    friends:{$in:["Najmus Sakib"]} -->ebabe in use krle same friends array te "Najmus Sakib" element thaklei oi doc gula amder dibe
    friends:{$in:["Najmus Sakib","Tanmoy Parvez"]} --> ebabe amra multiple name dite pari, je element gula dici egular je kono akta friends er array te pelei amder doc ta diye dibe.
    friends:{$nin:["Najmus Sakib","Tanmoy Parvez"]} --> ay duita element akta jodi array te thake oi doc ta dibe na,je doc er array te ay element gular akta o thakbe na oi doc gula dibe amder

},{friends:1})

5. $and (join multiple operator queries) -------------->
$and Summary:
    1.$and operator er maddome amra multiple querie opearator join krte pari, $and er bitore dewa sorto gula je doc gular sathe match krbe sei doc gula return krbe.
    2.{$and:[
        {
            filedName:{$eq:value}
        },
        {
            filedName:{$gt:value}
        }
    ]} -> ebabe likhte hy. and akta array er bitore object akare multiple operator gula use krte hy

db.test.find({ 
    $and: [
        { gender: "Female" }, // condition opearator queries as a element of $and array
        { age: { $gt: 18 } }
    ],// gender Male and 18 er upore sob gula doc return krbe, $and e sob sorto puron korte hbe ogulai return krbe
    { gender: 1, age: 1 }
})

5. $exits:boolean (doc will return if filed value is true) -------------->
db.test.find({ 
    "skills.isLearning":{$exists: true} // value true pailei doc ta return korbe
})

6. $all (ata o array er khetre use kore,) -------------->
db.test.find({ friends:{$all: [ "Najmus Sakib", "Mir Hussain", "Fahim Ahammed Firoz", "Tanmoy Parvez", "Abdur Rakib" ]}}) --> $all er array er all element friends er array te thakte hbe taholei oi doc ta return krbe

7.$elemMatch (array er element gula match korle oi doc ta dibe)
    // database er skills er array te {name,level,islearning} ay object ta akta element and ay element ta mill pele tkn oi doc ta return krbe But problem hocce ei object er element seriall same hote hy na hy doc ta return kore na ba match pay na abr jodi jekono akta property sob gula dite hy akta jodi na di tkn same doc ta match korbe na return korbe na, To amra jodi cay je serial maintain kore lagbe na just ei element object tar proper same pelei doc ta return korbe,

    db.test.find({
        skills:{
            name:"JAVASCRIPT",
            level:"Expert",
            isLearning:true
        }
    })

    // those problem solved $elemMatch operator, amra jodi cai kono array er element er kono akta property value maddome oi doc ta reutrn korte tkn amra ei operator use krte pari

    db.test.find({
        skills:{
            $elemMatch: {name:"JAVASCRIPT",level:"Expert"} -->
             // ekhane akta property value ar jai thakuk na keno jodi ay duita property value soho thake tkn amder ata return krbe,mane jodi name:"JAVASCRIPT",level:"Expert" pay tkn sei doc ta return kore dibe, ekhane jodi name ta kete di sudu level:"Expart" rakhi tkn se check korbe array er kono element e level:"Expart" jodi same hy tkn doc ta return korbe
        }
    })

6. $type & $size (type ba array er size er upor depend kore doc return kre) -------------->
    db.test.find(
        { 
            friends: { $type: "array" } // friends er type jodi arrray hy doc gula dibe
        }, { friends: 1 }
    )
    db.test.find({
        friends: { $size:4 }// je array er size 4 sei doc gula dive
    }, { friends: 1 }})

7. $set (update single value)
    summary: Single kono value change korte hole $set use krte hbe.
    db.test.updateOne(
        { _id: ObjectId("6406ad63fc13ae5a40000065") },
        {
            $set: {
                "name.firstName": "sayed"
                "name.lastName": "hoque" // multiole o dite pari
            }
        }
    )
8. $addToSet ---->(add element on array) 
    Summary: jodi kono array er element e extra kono elemnt add krte hy tkn ata user krte pari baki element er sathe ata jog hoye jabe array te,Tobe jodi eki element abar add krte cai tkn add hbe na, jodi Array er value object o hy seta teo kaj kore match korate pare  duplicate value dukay na.tobe Note it that object er property ba value akta diffrent holei tkn oita new value hisebe new object element hisebe duke jabe
    db.test.updateOne(
        { _id: ObjectId("6406ad63fc13ae5a40000065") },
        {
            $addToSet: {
                friends:"sayedul"// uniq element add hbe array te
            }
        }
    )
9. $push ------> eki element abar add krte caile mane duplicate hole o somssa nai ota care kore na tkn push use krte hbe,

// Extra Summary of $set + $addToSet + $push : jodi amra specific kono property er value sob cng krte cai tkn $set use krbo, but jodi amra kono array er modde element dukaite caibo and set jodi uniq dukaite cai tkn $addToSet and jodi uniq hok ba same data seta dukaitei cai tkn $push

10. $unset ---->(amra jodi kono property ke delete kore dite cai tkn ata use krte pari)
    db.test.updateOne(
        { _id: ObjectId("6406ad63fc13ae5a40000065") },
        {
            $unset: {birthday: "" }
            $unset: {"address.country": "" }//delete nested object property
        }
    )
11.$pop ----> (amra jodi kono array er last/first ele delete krte cai)
db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    {
       $pop: {friends: 1 } // arr er last ele del
       $pop: {friends: -1 } // arr er first ele del
    }
)

12.$Pul & $pullAll --------->(remove sfecific ele frm an array )
db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    {
      $pull: {friends: "Fahim Ahammed Firoz" } 
      // arry theke single value remove korte ebebe just value dile hbe
      $pullAll: {languages: ["Catalan", "Thai"] }
       // ar jodi multiple value remove krte cai tkn $pullAll call kre ebabe array kore delete element  gula dile hbe

       $pullAll: {
                skills: [{
                    "name": "GO",
                    "level": "Expert",
                    "isLearning": true
                },
                {
                    "name": "GO",
                    "level": "Beginner",
                    "isLearning": true
                }]
            } // ebabe object o delete krte pare
        }
    )
// ----------------> Method (delet- drop - create) <-------------------
13. .deleteOne & .deleteMany (delete one or manny by multiple way)
        -->.deleteOne
        db.test.deleteOne({_id : ObjectId("6406ad63fc13ae5a40000066"})// by id
        db.test.deleteOne({email:"amccurry3@cnet.com"})// by any property
        db.test.deleteOne({interests:{$in: ["deleteByThisElement"]}}) // by any array ele

        -->.deletMany
        db.test.deleteMany({interests:{$in: ["deleteByThisElement"]}})// interest array er bitore "deleteByThisElement" elemnt ta pawa gele oi doc ta delete krbe, jehtu deleteMany method use krci tai ebabe prota doc kati dibe

14. .createCollection & .drop (new collection create or delete/drop)
        db.createCollection("post")
        db.post.drop()
 */
