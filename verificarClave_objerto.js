function verificarPassword (usuario, password) {
  var passwordObjeto = usuario[password];
  console.log(`soy el valor de passwordObjeto: ${passwordObjeto}`);
 // return usuario[password] === password;
}

verificarPassword(mario, 12);

si el objeto mario tiene la propiedad password (cadena) y la propiedad 12 (número, es decir no es una cadena númerica)
¿que valor se le asignara a passwordObjeto?

/*
var mario = {
  password : 12,
  12 : null,
}

se le asignará null. usuario[password] no puede buscar dentro del objeto a la propiedad password (no es usuario['password']),
en consecuencia todo depende del argumento password de la función, es decir si este es un número o un estring. en este caso
fue el número 12 y busco a la propiedad con key o clave 12.

otra situación seria 
usuario.password

la notación de punto no admite números ni variables, solo string que se escriben sin comillas
por lo tanto buscaria la propiedad password

asi mismo tambien podría ser

usuario['password'] en este caso se elegiría a 'password' ya que no hay una key '12'

EN ESTE CASO EN CONCRETO SE ESPERA QUE EL AGUMENTO RECIBIDO SEA UNA CONTRASEÑA QUE SE COMPARARA CON EL VALOR DE LA PROPIEDAD password,
POR LO CUAL ES CONVENIENTE:
1) QUE EL NOMBRE DEL PARAMETRO SEA DISTINTO AL NOMBRE DE LA PROPIEDAD (usuario, posiblePassword)
2) considerar que la clave puede ser un número o un string, asi pues, en este caso muy particular
lo mejor sería ocupar notación de punto la cual descartara un argumento numerico o con comillas
3) como sea hay que prestar mucha atencion y considerar que cualquier error puede ser causa de lo anterior


*/



objeto.key === objeto['key']

/* ocurre los siguiente 

si verificarPassword(lucho, '1234');

'1234' no aplica para la notacion de punto

