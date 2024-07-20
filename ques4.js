//4. Find the number problems solved by the user in codekata ?
db.codekata.aggregate([
    {$lookup:{
        from:"users",
        localField:"user_id",
        foreignField:"_id",
        as:"userinformation"
    }},
    
       { $group: {
            _id:{
                userid:"$user_id",
                username:"$userinformation.name"
            },
            total_problems_solved:{$sum:"$problems"}}
        },
            {
                $project:{
                _id:0,
                userid:"$_id.userid",
                username:"$_id:username",
                total_problems_solved:1
            }}
       
    
]);