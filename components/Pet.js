const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.genderFinder = this.genderFinder.bind(this)
    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }
  genderFinder(){
    if(this.props.pet.gender === "male"){
      return "♂"
    }else{
      return "♀"
    }
  }
  handleAdoptPet(){
    this.props.onAdoptPet(this.props.pet.id)
    this.adopted()
  }
  adopted(){
    if(this.props.isAdopted === true){
      return <button className="ui disabled button" disabled>Already adopted</button>
    }else{
      return <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>
    }
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} ({this.genderFinder()})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adopted()}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
