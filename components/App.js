const FetchMock = require('fetch-mock')
const React = require('react');
const allPets = require('../data/pets')
const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();
    this.onAdoptPet = this.onAdoptPet.bind(this)
    this.onChangeType = this.onChangeType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }
  onAdoptPet(pet_id){
    this.setState({adoptedPets: [...this.state.adoptedPets, pet_id]})
  }
  onChangeType(type){
    this.setState({filters: {type: type}})
  }
  onFindPetsClick(){
    var url = '/api/pets'
    if(this.state.filters.type !== 'all'){
      url = `/api/pets?type=${this.state.filters.type}`
    }

    let pets = []

    fetch(url).then((response) => {
      return response.json()
    }).then((response) => {
      this.setState({ pets: response})
    })
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
