// ---> Aggregiate 

/*
--------> Method aggregate <---------------
1.$match & $addFields & & $project &out $merge
$match --> as like $and er moto conditon sob true hole ogula return krbe but $and e operators gula array er bitoer dite hy arki 
$addFields --> extra kono property add korte pari sob doc e But ata main doc e cng hbe na
$project --> as like projection
$out --> new akta collection create kora jabe return kora doc gula diye
$merge --> jodi amra cai jet $addFields korci oita amder main doc gula teo add krte tkn amra $merge krte pari

    db.test.aggregate([
        //stage-1
        { $match: { gender: "Female", age: { $gt: 50 } } },// matched doc gula return krbe
        // 
        {$addFields: {course:"Level 2"}}// return kora doc gula sathe ay property add kre dibe, just for output
        // stage-2
        { $project: { gender: 1, age: 1,course: 1}
    ])
// but jodi main doc e add krte cai course ta tkn $marge:"database er nam"
    db.test.aggregate([
        //stage-1
        { $match: { gender: "Female", age: { $gt: 50 } } },
        // 
        {$addFields: {course:"Level 2"}},
        // stage-2
        {$merge:"test"}// add hoi jabe course ta
        
    ])

// Abr amra caile ay data gula diye notun akta collection o create krte parbo
    
db.testaggregate([
    //stage-1
    { $match: { gender: "Female", age: { $gt: 50 } } },
    // 
    {$addFields: {course:"Level 2"}},
    // stage-2
    {$project: {gender:1,age:1,course:1}},
    {$out:"posts"} // posts nam er akta collection create krbe
    
])

2. $group --->

db.test.aggregate([
    // stage-1
    {
        $group: { 
            _id: "$address.country",// atar upor group krbe, 
            count:{$sum:1},// proti ta doc 1 kore jok hoye total dekhabe
            fullUser:{$push: "$$ROOT"}// jei doc ta oita akta akta push kre dibe array er bitore
        }
    }
    // stage-2
    {
        $project: {
            "fullUser.email":1,
            "fullUser.phone":1,
            count:1
        }
    }

    // null mane sob gula doc e loop krbe

    db.test.aggregate([
    // stage-1
    {
        $group: { 
            _id:null,
            TotalSallary:{$sum:"$salary"},
            maxSalary:{$max: "$salary"},
            minSallary:{$min: "$salary"}
           avgSallary:{$avg: "$salary"}
        }
    },
    // stage-2
    // {
    //     $project: {
            TotalSallary:1,
            maxSalary:1,
            minSallary:1
           averageSallary:"$avgSallary",
           rangeBetweenMaxAndMin:{$subtract:["$maxSalary","$minSallary"]}
    //     }
    // }
    
    ])

    
    ])
3. $unwind --> 
**array er element gular upor group korar jonno prothome unwind krte hy, eta krle array oitar single element niye akta akta kore doc create hy id same thake same array er element er doc
    
    db.test.aggregate([
        // stage-1
        {
            $unwind: "$friends"// friends array er protita elemnt niye doc create hbe jate sei element gular upor group kora jy
        },
    ])
    // 
    db.test.aggregate([
        // stage-1
        {
            $unwind: "$friends"
        },
        //stage-2   
        {
            $group: { 
                _id: "$friends",// ebar ay friends gular nam er upor group krte parbe
                count:{$sum:1}
            }
        }
    ])

//**Amra jodi cai age er upor group kore oder interest gula jante tkn amra prothome interest array ke unwind kore erpor age er upor group kore seta jante parbo sei age er upor interst gula ke push kore

    db.test.aggregate([
        // stage-1
    {
        $unwind: "$interests"// prothome interest arry er bitore sob ele single kore doc create hbe baki info soho, just interests:[ele,ele] ebabe theke interests:ele , ebabe hbe
    },
        //stage-2   
        {
            $group: { 
                _id: "$age", -->//erpor same age gula niye group hbe
                interestsPerAge:{$push: "$interests"}, -->//epor proti group e loop korar smy proti interest er element gula niye akta array hbe
                totalNumberOfMember:{$sum: 1} -->//same babe ekta group e loop korar smy 1 kore jog hoye total kyta group kyta ele seta jog hbe total dekhanoe jonno
            }
        }
    ])
3.$bucket -->
**amra jodi cai kono nirdisto property er number er upor boundary kore group krte and output dekhaite tkn amra $bucket use krte pari

    db.test.aggregate([
        // stage-1
    {
        $bucket:{
            groupBy:"$age", //-->group er upor bitti kore group hbe,_id hbe start boundary value.

            boundaries:[1,21,80,101],//-->1 theke 20 prjonto akta group ,21 theke 79 porjonto,ebabe 80 theke  101 prjnto group, 
            default:"baki gula",//--> baki kono doc baaki thakle ogula etar bitore jabe and _id hbe "baki gula" ay name e.

            output:{
                count:{$sum: 1},//--> group er value total

                KaraAche:{$push: "$age"}//-->ele gula dekte caile ebabe array te push kore rakte pari ba pura ele caile $$ROOT use krte pari.
            }
        }
    },
        //stage-2
        {
            $sort: {
                _id:1//--> _id er upor assending sorting hbe,coto theke suru
            }
        }
    ])
4.$facet

    structure:
    db.test.aggregate([
        {
            $facet: {
                // pipleline-1
                ageInterastReports:[],//operator gula ekhane hbe
                // pipleline-2
                getSkillReports:[]
            }
        }
    ])

    // ata akta object er value nam hisebe dibe
    {
        ageInterastReports:[],
         companyReports:[]

    }

    db.test.aggregate([
        {
            $facet: {
                // pipleline-1
                ageInterastReports:[
                    // stage-1
                    {
                        $unwind: "$interests" //--> interest er upore unwind hbe
                    },
                    // stage-2
                    {
                        $group: { 
                            _id: "$age",// age er upore group hbe
                            count:{$sum:1},
                            ageInterestData:{$addToSet: "$interests"}// same group er age e ki ki interst ache oita dukbe
                            
                        }
                    },
                    {
                        $limit: 10
                    },
                    // stage-3
                    {
                        $project: {
                            interests:1,
                            count:1,
                            ageInterestData:1
                        }
                    }
                    ],
                // pipleline-2 --> same babe 2nd pipeline diye 2nd data pabo
                companyReports:[
                    // stage-2
                    {
                        $group: {
                            _id: "$company",
                            employiesTotal:{$sum:1},
                            employiesListName:{$push:"$name.firstName"}
                        }
                    },
                    // stage-3
                    {
                        $limit: 10
                    }
                    ]
            }
        }
    ])

// $lookup --> for creating reference
    db.userOrders.aggregate([
        {
            $lookup: {
                from: "test",// -->reference colleciton er nam
                localField: "userId",//-->local
                foreignField: "_id",//-->owner
                as: "User"//--> je nam e dekhabe output
                }
        }
    ])
*/