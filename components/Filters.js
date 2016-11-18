const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();
    this.handleChangeType = this.handleChangeType.bind(this)
    this.handleFindPets = this.handleFindPets.bind(this)
  }
  handleChangeType(event){
    this.props.onChangeType(event.target.value)
  }
  handleFindPets(){
    this.props.onFindPetsClick()
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleFindPets}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
