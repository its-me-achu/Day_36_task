// 1.Find all the topics and tasks which are throught in the month of october.
db.topics.aggregate([
    {
        $lookup:{
            from:"tasks",
            localField:"topics_id",
            foreignField:"_id",
            as:"task details"
        }
    },{
        $match:{$and:[
            {topic_date:{$gte:new date ("01-10-2020"),
                $lt:new date ("01-11-2020")
            } },
            {

                $or:[
                    {"task details.due_date":{$gte:new date ("01-10-2020"),
                        $lt: new date("01-11-2020")
                    }},
                    {"task deatails.due_date":{$exists:false}}
                ]}
            ]
            }},
            {
                $project:{
                    _id:0,
                    topic_id:1,
                    topic:1,
                    topic_date:1,
                    tasks:"$task details.task",
                    due_dates:"$task details.due_date"
                }
            }
        
    
]);