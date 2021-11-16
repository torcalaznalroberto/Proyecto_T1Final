db.dundermifflin.drop({})

db.dundermifflin.insertMany([

    { "_id" : "JiH98s", 
    "name" : { "first" : "Jim", "last" : "Halpert" }, 
    "phonenumber" : [ 
        { "cell" : "570-209-8130" }, 
        { "landline" : "570-207-5863" } 
    ], 
    "hired" : new Date("1998-03-17T08:00:00Z"), 
    "department" : "sales", "clients" : ["Barbara Allen","Daniel Schofield", "Larry Meyers", "Dunmore High School"], 
    "male" : true, 
    "typeofpaper" : [ 
        { "size" : "A2", "paperweight" : 150, "color" : "white", "qtypermonth" : 300 }, 
        { "size" : "A5", "paperweight" : 100, "color" : "white", "qtypermonth" : 300 }, 
        { "size" : "A5", "paperweight" : 120, "color" : "white", "qtypermonth" : 300 } 
    ], 
        "parking" : [ "04", "05" ] },
    
    { "_id" : "DwS00s", "name" : { "first" : "Dwight", "last" : "Schrute" }, "phonenumber" : [ { "cell" : "570-290-7763" }, { "landline" : "570-241-2535" } ], "hired" : new Date("2000-06-20T09:00:00Z"), "department" : "sales", "clients" : ["Phil Maguire", "Lackawanna County", "Larry Meyers"] , "male" : true, "typeofpaper" : [ { "size" : "A4", "paperweight" : 120, "color" : "white", "qtypermonth" : 500 }, { "size" : "A4", "paperweight" : 150, "color" : "red", "qtypermonth" : 400 }, { "size" : "A4", "paperweight" : 170, "color" : "yellow", "qtypermonth" : 100 } ], "parking" : [ "02", "03" ] },
    { "_id" : "PaB00r", "name" : { "first" : "Pam", "last" : "Beesley" }, "phonenumber" : [ { "cell" : "570-315-4319" }, { "landline" : "570-335-8596" } ], "hired" : new Date("2000-03-17T09:00:00Z"), "department" : "reception", "clients" : null, "male" : false, "parking" : [ "02", "03", "04", "05" ] },
    { "_id" : "RyH05o", "name" : { "first" : "Ryan", "last" : "Howard" }, "phonenumber" : { "cell" : "570-445-8601" }, "hired" : new Date("2005-02-24T09:00:00Z"), "department" : "officetemp", "clients" : [ "Yellow Pages", "Barbara Allen", "Daniel Schofield" ], "typeofpaper" : [ { "size" : "A3", "paperweight" : 200, "color" : "blue", "qtypermonth" : 300 }, { "size" : "A4", "paperweight" : 200, "color" : "red", "qtypermonth" : 300 }, { "size" : "A5", "paperweight" : 200, "color" : "yellow", "qtypermonth" : 300 } ], "male" : true, "parking" : null },
    { "_id" : "MiS92rm", "name" : { "first" : "Michael", "last" : "Scott" }, "phonenumber" : [ { "cell" : "570-499-0739" }, { "landline" : "570-340-7276" } ], "hired" : new Date("1992-03-17T09:00:00Z"), "department" : "regionalmanager", "clients" : ["Yellow Pages", "Barbara Allen", "Phil Maguire", "Daniel Schofield", "Lackawanna County", "Larry Meyers", "Dunmore High School"], "male" : true, "typeofpaper" : [ { "size" : "A3", "paperweight" : 100, "color" : "white", "qtypermonth" : 300 }, { "size" : "A3", "paperweight" : 90, "color" : "white", "qtypermonth" : 300 }, { "size" : "A4", "paperweight" : 60, "color" : "yellow", "qtypermonth" : 300 } ], "parking" : [ "01" ] },
    { "_id" : "MeP00sr", "name" : { "first" : "Meredith", "last" : "Palmer" }, "phonenumber" : [ { "cell" : "570-507-3223" }, { "landline" : "570-346-8958" } ], "hired" : new Date("2000-12-01T09:00:00Z"), "department" : "supplierrelations", "clients" : null, "male" : false, "parking" : [ "06", "08" ] },
    { "_id" : "KeM02a", "name" : { "first" : "Kevin", "last" : "Malone" }, "phonenumber" : { "cell" : "570-575-0965" }, "hired" : new Date("2002-04-09T09:00:00Z"), "department" : "accountant", "clients" : null, "male" : true, "parking" : [ "07", "08", "09" ] },
    { "_id" : "AnM00a", "name" : { "first" : "Angela", "last" : "Martin" }, "phonenumber" : [ { "cell" : "570-209-9135" }, { "landline" : "570-770-5368" } ], "hired" : new Date("2000-04-01T09:00:00Z"), "department" : "accountant", "clients" : null, "male" : false, "parking" : [ "07", "08", "09" ] },
    { "_id" : "ToF97hr", "name" : { "first" : "Toby", "last" : "Flenderson" }, "phonenumber" : [ { "cell" : "570-969-7177" }, { "landline" : "570-906-6016" } ], "hired" : new Date("1997-02-15T09:00:00Z"), "department" : "humanresources", "clients" : null, "male" : true, "parking" : [ "06", "10" ] },
    { "_id" : "OsM00a", "name" : { "first" : "Oscar", "last" : "Martinez" }, "phonenumber" : { "cell" : "570-209-9284" }, "hired" : new Date("2000-09-14T09:00:00Z"), "department" : "accountant", "clients" : null, "male" : true, "parking" : [ "07", "08", "09" ] },
    { "_id" : "PhV00s", "name" : { "first" : "Phyllis", "last" : "Vance" }, "phonenumber" : [ { "cell" : "570-804-3441" }, { "landline" : "570-983-5083" } ], "hired" : new Date("2000-01-23T09:00:00Z"), "department" : "sales", "clients" : [ "Yellow Pages", "Phil Maguire" ], "male" : false, "typeofpaper" : [ { "size" : "A4", "paperweight" : 120, "color" : "white", "qtypermonth" : 350 }, { "size" : "A4", "paperweight" : 200, "color" : "blue", "qtypermonth" : 300 }, { "size" : "A3", "paperweight" : 150, "color" : "white", "qtypermonth" : 300 } ], "parking" : [ "10", "11" ] },
    { "_id" : "KeK00c", "name" : { "first" : "Kelly", "last" : "Kapoor" }, "phonenumber" : [ { "cell" : "570-800-8431" }, { "landline" : "570-969-6582" } ], "hired" : new Date("2000-06-22T09:00:00Z"), "department" : "customerservice", "clients" : null, "male" : false, "parking" : [ "14" ] },
    { "_id" : "CrB90q", "name" : { "first" : "Creed", "last" : "Bratton" }, "phonenumber" : [ { "cell" : "570-862-6087" }, { "landline" : "570-961-9404" } ], "hired" : new Date("1990-06-20T09:00:00Z"), "department" : "qualityassurance", "clients" : null, "male" : true, "parking" : [ "7", "8", "2", "3" ] },
    { "_id" : "StH00s", "name" : { "first" : "Stanley", "last" : "Hudson" }, "phonenumber" : [ { "cell" : "570-614-9051" }, { "landline" : "570-796-5212" } ], "hired" : new Date("2000-11-28T09:00:00Z"), "department" : "sales", "clients" : [ "Larry Meyers", "Dunmore High School", "Lackawanna County" ], "male" : true, "typeofpaper" : [ { "size" : "A3", "paperweight" : 200, "color" : "white", "qtypermonth" : 500 }, { "size" : "A4", "paperweight" : 200, "color" : "white", "qtypermonth" : 200 }, { "size" : "A5", "paperweight" : 200, "color" : "yellow", "qtypermonth" : 100 } ], "parking" : [ "8", "9" ] }
                            ])  
