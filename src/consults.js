/*
Los datos de esta base de datos estan completamente basados en la primera temporada de la serie The Office,
para que las busquedas relacionadas con fecha tengan sentido, introduciremos al principio el siguiente comando,
para crear un campo new Date con la fecha que sustituiria a la del dia de hoy.
*/
var todaysdate = new Date("2006-01-01")


/*
Un hombre me ha dado su número personal en una convención sobre material de oficina, pero se me ha mojado el papel donde lo tenia apuntado y se ha borrado parte del numero.
Era muy simpático y me gustaría tratar directamente con él para abastecer mi oficina. Probablemente era de ventas. Quiero encontrar su nombre.
*/
db.dundermifflin.find( {
    $and: [
       { male: true },
       {"phonenumber.cell": {$regex: /570-209/}},
       { department: {$eq: "sales"}}
    ]
 },{name:1,"phonenumber.cell":1})


/*
Ryan, el becario lleva ya un tiempo trabajando aqui, quiero ver cuanto tiempo lleva en meses para saber si hay que contratarlo ya.
*/
db.dundermifflin.aggregate( [ {$match:{department : "officetemp"}},{ $project:  { name: 1, "months": {$round: { $divide: [ { $subtract: [todaysdate, "$hired"] }, 2592000000] }} } } ] )


/*
Hemos firmado un contrato con motorola y va a proveer de nuevos fijos a todos los que tengan ya uno.
Nos han pedido que le digamos el numero de fijos que tienen que mandarnos.
*/
db.dundermifflin.countDocuments( { "phonenumber.landline": { $exists: true } } )


/*
Necesitamos saber quienes de nuestros vendedores trabajan con las paginas amarillas
*/
db.dundermifflin.find({clients:{$in: ["Yellow Pages"]}},{_id:1})


/*
Michael y los de ventas estaran hoy fuera buscando nuevos clientes, queremos saber que plazas de garaje que suelen usar para limpiarlas y encerarlas
*/
db.dundermifflin.distinct( "parking", { $or: [ { "name.first": {$eq: "Michael" }}, { department: {$eq: "sales"} } ] } )


/*
Para una campaña de igualdad de genero vamos a comprobar desde el año 2000 cuantas mujeres fueron contratadas 
y cuantos hombres fueron contratados antes de esta fecha.
*/
db.dundermifflin.find({$or:[
   {$and:[
      { hired: { $gte: new Date("2000-01-01") } },
      { male: false}
   ]},
   {$and:[
      { hired: { $lte: new Date("2000-01-01") } },
      { male: true}
   ]}
]},{"male":1}).sort( {"male": 1 } )


/*
Queremos saber quienes son los mas veteranos de cada departamento, para que trabajen de mentores para los nuevos.
Para ello buscaremos quienes llevan trabajando desde antes del 2000.
*/
db.dundermifflin.find( { hired: {$not: {$gt: new Date("2000-01-01")}}},{name:1,hired:1} )

/*
Necesito comprar mas de 300 unidades de papel A4 que no tenga mucho gramaje de color blanco para un instituto.
Para ello quiero ponerme en contacto con algun vendedor que tenga el tipo pertinente.
*/
db.dundermifflin.find( {
   typeofpaper: { $all: [
                  { "$elemMatch" : { size: "A4", qtypermonth: { $gt: 300} } },
                  { "$elemMatch" : { paperweight : {$lt: 150}, color: "white" } }
                ] }
 },{name:1,phonenumber:1,typeofpaper:1} ).pretty()

/* 
Quiero buscar un nuevo distribuidor de papel, y quiero que el vendedor no tenga clientela de la competencia ("Daniel Schofield","Barbara Allen"),
se me da un poco mal hablar con las mujeres por lo tanto preferiria que me atendiera un chico de ventas, 
en caso de ser una mujer preferiria que fuera recepcionista o de atencion al cliente.
*/
db.dundermifflin.find( {
   $and: [
      { clients: { $nin: ["Daniel Schofield","Barbara Allen"] } },
      { $nor: [
         { $and: [{male:false},{department:{$nin:["customerservice","reception"]}}]},
         { $and: [{male:true},{department:{$ne:"sales"}}]}
      ] }
   ]
},{name:1,"phonenumber.landline":1} )

/*
No paran de mandarme correo para vender, y estoy tratando de recordar la persona que fue pero solo recuerdo 
como empezaba su apellido (S). Trabajo para Lackawanna County. 
*/
db.dundermifflin.find({
   $and:[
      {clients:{$exists:true}},
      {clients:{$in:["Lackawanna County"]}},
      {"name.last": {$regex: /^S/}},
      
   ]})