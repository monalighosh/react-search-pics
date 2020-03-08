import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchValue: ''
  };

  onInputChange = (e) => {
    this.setState({searchValue: e.target.value})
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image search</label> 
            <input 
              type="search" 
              value={this.state.searchValue} 
              onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;