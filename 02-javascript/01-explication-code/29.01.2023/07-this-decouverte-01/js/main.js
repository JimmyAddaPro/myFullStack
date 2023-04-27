// Exemple simple dans lequel this fait référence à l'Object dans lequel il se trouve. L'Object n'a pas de nom, ou plutôt, son nom est un indice. Mais peut-être, par la suite, voudrions-nous ajouter un Object dans notre constante. Plutôt que de chercher l'indice, le terme This fait ce travail pour nous et nous facilite donc la tache.
const stackOfChairs =[ 
    {
        brand: "Ikea",
        model: "oierjjhfgsde",
        price: 59.99, 
        easyToAssemble: false,
        func: function () {
            // Ecrire cette ligne en premier pour ce rendre compte que cela produit le même résultat.
            // alert("This chair is easy to assemble? " + stackOfChairs[0].easyToAssemble);
            alert("This chair is easy to assemble? " + this.easyToAssemble);
        }
    },
   {
        brand: "Conforama",
        model: "oierjjhfgsde",
        price: 230.99, 
        easyToAssemble: true,
        func: function () {
            alert("This chair is easy to assemble? " + this.easyToAssemble);
        }
    }
];


stackOfChairs[0].func();
stackOfChairs[1].func();
// REPRENDRE environ à 15min avant la fin de la vidéo du 29-01-2023 pour terminer le formulaire avec des THIS et des CLASS. 