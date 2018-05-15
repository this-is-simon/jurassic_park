const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = 12.50;
  this.dinosaurs = dinosaurs;
}

Park.prototype.findDinosaur = function(speciesToSearch){
  let foundDinosaurs = [];
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species === speciesToSearch){
      foundDinosaurs.push(dinosaur);
    }
  }
  return foundDinosaurs;
}

Park.prototype.removeDinosaur = function(speciesToRemove){
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species === speciesToRemove){
      this.dinosaurs.pop(speciesToRemove);
    }
  }
}

module.exports = Park;
