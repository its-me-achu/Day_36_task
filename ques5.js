// 5. Find all the mentors with who has the mentees's count more than 15?
db.users.aggregate([
    {$match:{
        mentorid:{$exists:true}
    }},
    {
        $group:{
            _id:"$mentorid",
            mentorname:{$first:"mentorname"},
            metee_count:{$sum:1}
        }
    },
    {$match:{mentee_count:{$gt:15}}},
    {
        $project:{
              id:0,
              mentorid:"$_id",
              mentorname:1,
              mentee_count:1

        }
    }
]);