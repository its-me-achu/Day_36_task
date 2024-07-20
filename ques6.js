// 6.  Find the number of users who absent and task is not submitted 
// between 15-oct-2020 and 31-oct-2020?
db.attendance.aggregate([
    {
        $group:{
            from:"topics",
            localField:"toipcid",
            foreignField:"topic_id",
            as:"topics"
        }
    },
    {
        $lookup:{
            from:"tasks",
            localField:"topicid",
            foreignField:"topic_id",
            as:"tasks"
        }
    },
    {
        $match:{
            attended:false,
            "task.submitted":false,
            $and:[
                {"topics.topic_date":{$gte:new date("15-10-2020")}},
                {"topics.topic_date":{$lte:new date("31-10-2020")}},
                {"tasks.due_date":{$gte:new date("15-10-2020")}},
                {"tasks.due_date":{$lte:new date("31-10-2020")}},
                {
                    $count:{numberof_students_absent}
                }

            ]
        }
    }
]);