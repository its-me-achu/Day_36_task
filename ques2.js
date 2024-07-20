// 2. Find all the company drives ehich appeared between 15 oct_2020 and 31_oct_2020?
db.companyderives.find({
    $or:[
        {drive_date:{$gte:new date ("15-10-2020")}},
        {drive_date:{$lte:new date ("31-10-2020")}}
    ]
});