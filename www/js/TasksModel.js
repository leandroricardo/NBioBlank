function getTasks() {
  this.items = [{
      nome: "Item 1",
      finalizada: false
    },
    {
      nome: "Item 2",
      finalizada: false
    },
    {
      nome: "Item 3",
      finalizada: false
    }
  ];

  this.remove = function(item) {
    var pos = this.items.indexOf(item);
    this.items.splice(pos, 1);
  }
};
