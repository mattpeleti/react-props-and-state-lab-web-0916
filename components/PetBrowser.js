const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    //id={petObj.id} type={petObj.type} gender={petObj.gender} age={petObj.age} weight={petObj.weight} name={petObj.name} old props we passed
    //console.log(this.props.adoptedPets) this is proof of the pet's id being added to the adopted pets array
    var petComps = this.props.pets.map((petObj) => {
      return <Pet pet={petObj} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(petObj.id)}/>
    })
    return (
      <div className="ui cards">
        {petComps}
      </div>
    );
  }
}


module.exports = PetBrowser;
