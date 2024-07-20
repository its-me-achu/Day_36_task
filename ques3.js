// Find all the company drives and students who are appeared for the placement?
db.companydrives.aggregate([
    {
        $lookup:{
            from:"users",
            localField:"user_id",
            foreignField:"_id",
            as:"userinformation"
        }
    },
    {
        $project:{
            _id:0,
            company:1,
            drive_date:1,
            students:"$userinformation"
        }
    }
]);