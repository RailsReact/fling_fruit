class Body extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      fruits: []
    }
    this.handlerFormSubmit = this.handlerFormSubmit.bind(this)
    this.addNewFruit = this.addNewFruit.bind(this)

    this.handlerDelete= this.handlerDelete.bind(this)
    this.deleteFruit= this.deleteFruit.bind(this)

    this.handlerUpdate = this.handlerUpdate.bind(this)
    this.updateFruit = this.updateFruit.bind(this)
  }

  handlerUpdate(fruit){
    fetch(`http://localhost:3000/api/v1/fruits/${fruit.id}`, {
      method: 'PUT',
      body: JSON.stringify({fruit: fruit}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response)=>{
      this.updateFruit(fruit)
    })
  }

  updateFruit(fruit){
    let newFruits = this.state.fruits.filter((f)=> f.id !== fruit.id);
    newFruits.push(fruit)
    this.setState({
      fruits: newFruits
    })
  }

  handlerDelete(id){
    fetch(`http://localhost:3000/api/v1/fruits/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response)=>{
      this.deleteFruit(id)
    })
  }

  deleteFruit(id){
    newFruits = this.state.fruits.filter((fruit)=> fruit.id !==id);
    this.setState({
      fruits: newFruits
    })
  }

  handlerFormSubmit(name, description){
    let body = JSON.stringify({fruit: {
      name: name,
      description: description
    }})

    fetch('http://localhost:3000/api/v1/fruits',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    }).then((response)=> {return response.json()})
      .then((fruit)=>{this.addNewFruit(fruit)})
  }

  addNewFruit(fruit){
    this.setState({
      fruits: this.state.fruits.concat(fruit)
    })
  }

  componentDidMount(){
    fetch('/api/v1/fruits.json')
      .then((response)=>{return response.json()})
      .then((date)=> { this.setState({ fruits: date }) });
  }

  render(){
    return(
      <div>
        <NewFruit 
          handlerFormSubmit = {this.handlerFormSubmit}
        />
        <AllFruits 
          fruits={this.state.fruits} 
          handlerDelete={this.handlerDelete}
          handlerUpdate={this.handlerUpdate}
        />
      </div>
    )
  }
}